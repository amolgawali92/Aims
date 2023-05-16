import  express   from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

const app=express();


import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subcategoryRouter from './routes/subcategory.router.js'
import productRouter from './routes/product.router.js';


//configuaration to accept cross site request 
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//configuaration to accept cross site request 
app.use(fileupload());

//test route
// app.get("/",(req,res,next)=>{
//     console.log("request from react");
//     res.send("its working");
// });

app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter);
app.use("/product",productRouter);

app.listen(3001);
console.log("server invoked at the link http://localhost:3001")