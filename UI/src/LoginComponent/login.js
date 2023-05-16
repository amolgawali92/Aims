import './login.css';
import { useState } from 'react';
import axios from 'axios';
import {_apiurluser} from '../api_URLs';
import { useNavigate } from 'react-router-dom';


function Login(){

    const [output,setOutput]=useState();
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);

    const navigate=useNavigate();

    const handleSubmit=()=>{
        var userDetails={"email":email,"password":password};
        axios.post(_apiurluser+"login",userDetails).then((response)=>{
        //  console.log(response);
        if(response.data.token!=="error")
        {
            // setOutput("login success");  
            let user=response.data.userDetails;
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("name",user.name);
            localStorage.setItem("email",user.email);
            localStorage.setItem("mobile",user.mobile);
            localStorage.setItem("address",user.address);
            localStorage.setItem("city",user.city);
            localStorage.setItem("gender",user.gender);
            localStorage.setItem("role",user.role);
            localStorage.setItem("info",user.info);

            user.role==="admin"?navigate("/admin"):navigate("/user");
        }
        else
        {
            setOutput("Invalid user or verify your account....");
            setEmail("");
            setPassword("");
        }
       
        });
       
    }

return(
    <div>
     <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        
                        {/* <h1 class="mb-0">Welcome to eAuction</h1> */}
                        {/* <h4 class="mb-0">Login Page</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                        <h1 class="mb-0">Login Here!!!!!!</h1>
                               <br/>
                                <font style={{ "color": "blue" }}>{output}</font>
                                <form>
                                   
                                    <div class="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <br />
                                    <button type="button"  class="btn btn-success" onClick={handleSubmit}>Login</button>
                                </form>
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
 
   </div>
);
}
export default Login;