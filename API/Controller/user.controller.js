
import url from 'url';
import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import sendEmail from './mail.controller.js';

//first code without sorting
/*export var save=async (req,res,next)=>{
  var userDetails=req.body;
  var userList=await UserSchemaModel.find();
  var l=userList.length;
  var _id=l==0?1:userList[l-1]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
  //console.log(userDetails);
  var user=await UserSchemaModel.create(userDetails);
  if(user)
    return res.status(201).json({"result":"User register successfully...."});
  else
    return res.status(500).json({"result": "Server Error"});
}*/

//first code with sorting
export var save=async (req,res,next)=>{
  var userDetails=req.body;
  var userList=await UserSchemaModel.find().sort({"_id":-1}).limit(1);
  // return res.status(201).json({"result":userList});

  var l=userList.length;
  var _id=l==0?1:userList[0]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
  //console.log(userDetails);
  var user=await UserSchemaModel.create(userDetails);
  if(user)
  {
    sendEmail(userDetails.email,userDetails.password);
    return res.status(201).json({"result":"User register successfully...."});
  }
    else
    return res.status(500).json({"result": "Server Error"});
}

//fetch code 
export var fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  // console.log(condition_object);
 var userList=await UserSchemaModel.find(condition_object);
  // return res.status(500).json(condition_object);
  var l=userList.length;
  if(l!=0)
   return res.status(201).json(userList);
   else
   return res.status(201).json(userList);
  //  return res.status(500).json({"result":"Server Error"});
  // return res.status(500).json({"result":"sucess"});
}


//delete code
export var deleteUser=async (request,response,next)=>{
// var id=request.params.id;
// var user=await UserSchemaModel.find({"_id":id});
// var user=await UserSchemaModel.find(request.body);
// if(user.length!=0)
// {
//   let result=await UserSchemaModel.deleteMany(request.body);
//   if(result)
//     return response.status(201).json({"msg":"success"});
//   else
//     return response.status(500).json({error:"server error"});
// }
// else
// return response.status(404).json({error:"Resorce not found"});
// }
var user = await UserSchemaModel.find(request.body);
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany(request.body); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: "Server Error"});
  }
  else
    return response.status(404).json({error: "Resource not found"});   
}


//updation code
export var updateUser=async (request,response,next)=>{
  // let userDetails=await UserSchemaModel.findOne(JSON.parse(request.body.condition_object));
  let userDetails=await UserSchemaModel.findOne(request.body.condition_obj);
  // console.log(userDetails);
  if(userDetails){
    // let user=await UserSchemaModel.updateOne(JSON.parse(request.body.condition_object),{$set:JSON.parse(request.body.set_condition)})
    let user=await UserSchemaModel.updateOne(request.body.condition_obj,{$set:request.body.set_condition});
  if(user)
   return response.status(201).json({"msg":"sucess"});
  else
  return response.status(500).json({"error":"server error"});
  }
  else
    return response.status(404).json({"error":"requested resourse not awailable"});
  //  console.log(request.body);
  // return response.status(201).json({"result":"sucess"});
}


//login code
export var login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList=await UserSchemaModel.find(userDetails);
  var l=userList.length;
  if(l!=0)
  {
    let payload={"subject":userList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"userDetails":userList[0]});
    // return res.status(500).json({"result":"sucess"});
  }
  else
  {
    return res.status(201).json({"token":"error"});
    // return res.status(500).json({"result":"failed"});
  }  
}

