import './manageusers.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { _apiurluser } from '../api_URLs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ManageUsers(){

    const [userDetails,setUserDetails]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
      axios.get(_apiurluser+"fetch?role=user",userDetails).then((response)=>{
        setUserDetails(response.data);
      })
    });

    const manageUserStatus=(_id,s)=>{
        // console.log(_id+"----"+s);
        // alert(_id+"----"+s);
        if(s==="block")
        {
            let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}}
            axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            // setUserDetails(response.data);
            navigate("/manageusers");

        }).catch((err)=>{
           console.log(err);
        });
       }
        else if(s==="verify")
        {
            let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}}
            axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            // setUserDetails(response.data);
            navigate("/manageusers");
        }).catch((err)=>{
            console.log(err);
         });
    }
        else
        {
            let deleteDetails={"data":{"_id":_id}};
            axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
                navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
            });  
          
        }
    }

    

return(
    <div> 
   
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        {/* <h5 class="fw-bold text-primary text-uppercase">About Us</h5> */}
                        <h1 class="mb-0">View And Manage User Details</h1>
                        <br/>
                        {/* <h4 class="mb-0">AdminHome</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                        <table class="table table-bordered" cellPadding={"5"} cellSpacing={"5"}>
                            <tr>
                                <th>RegId</th>
                                <th>Name</th>
                                <th>Email</th>  
                                <th>Mobile</th>  
                                <th>Address</th> 
                                 <th>City</th>
                                 <th>Gender</th>
                                 <th>Info</th>
                                 <th>Status</th>
                                 <th>Action</th>
                            </tr>
                              
                               {
                                  userDetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.mobile}</td>
                                        <td>{row.address}</td>
                                        <td>{row.city}</td>
                                        <td>{row.gender}</td>
                                        <td>{row.info}</td>

                                        <td>
                                           
                                            {
                                            row.status==1 &&
                                            <a onClick={()=>{manageUserStatus(row._id,"block")}}><Link style={{"color":"green"}} to={""}>Blog User</Link></a>
                                            }
                                             {
                                            row.status==0 &&
                                            <a onClick={()=>{manageUserStatus(row._id,"verify")}}><Link style={{"color":"orange"}} to={""}>Verify User</Link></a>
                                            }
                                        </td>
                                        <td>
                                           <a onClick={()=>{manageUserStatus(row._id,"delete")}}><Link style={{"color":"red"}} to={""}>Delete</Link></a>
                                        </td>
                                    </tr>
                                  ))
                               }
                         </table>
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
    
    
   </div>
);
}
export default ManageUsers;