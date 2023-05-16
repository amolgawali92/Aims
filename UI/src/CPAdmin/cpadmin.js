import './cpadmin.css';
import { useState } from 'react';
import axios from 'axios';
import {_apiurluser} from '../api_URLs';

function CPAdmin(){

    const [opass , setOldPassword]=useState();
    const [npass , setNewPassword]=useState();
    const [cnpass , setConfirmedNewPassword]=useState();
    const [output , setOutput]=useState();

    const handleSubmit=()=>{
    //    alert("sss");
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then((response)=>{
    
        if(response.data.length!=0)
        {
            if(npass==cnpass)
              {
                let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":cnpass}}
                axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
                setOutput("Password Changes Sucessfully");
                setOldPassword("");
                setNewPassword("");
                setConfirmedNewPassword("");
              }).catch((err)=>{
              console.log(err);
            });
        }
            // setOutput("success");
            else
            {
                setOutput("New & Confirmed New password mismatch");
                setConfirmedNewPassword("");
            }
            
        }
        else{
            setOutput("Invalid Old Password");
            setOldPassword("");
        }
    });
}

return(
    <div> 
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        {/* <h5 class="fw-bold text-primary text-uppercase">About Us</h5> */}
                        <h1 class="mb-0">Change Password Here!!!</h1>
                        <br/>
                        {/* <h4 class="mb-0">AdminHome</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                        <font style={{ "color": "blue" }}>{output}</font>
                                <form>
                                 
                                    <div class="form-group">
                                        <label for="pwd">Old Password</label>
                                        <input type="password" class="form-control" value={opass} onChange={e => setOldPassword(e.target.value)} />
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="newpwd">New Password</label>
                                        <input type="password" class="form-control" value={npass} onChange={e => setNewPassword(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="cpwd">Confirmed New Password</label>
                                        <input type="password" class="form-control" value={cnpass} onChange={e => setConfirmedNewPassword(e.target.value)} />
                                    </div>
                                    <br />
                                    <button type="button"  class="btn btn-success" onClick={handleSubmit}>Change Password</button>
                                </form>
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
    {/* About End */}
    
   </div>
);
}
export default CPAdmin;