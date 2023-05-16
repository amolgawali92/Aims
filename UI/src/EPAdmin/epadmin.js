import './epadmin.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { _apiurluser } from '../api_URLs';

function EPAdmin(){

    const [userDetails,setUserDetails]=useState([]);

    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();

    useEffect(()=>{
          axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
        //   setUserDetails(response.data[0]);
          setName(response.data[0].name);
          setEmail(response.data[0].email);
          setMobile(response.data[0].mobile);
          setAddress(response.data[0].address);
          setCity(response.data[0].city);
        })
      },[]);

      
    const handleSubmit=()=>{
        
        let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
        setOutput("Profile Edited Sucessfully");
        }).catch((err)=>{
          console.log(err);
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
                        <h1 class="mb-0">Edit Profile Here!!!</h1>
                        {/* {userDetails.email} */}
                        <font style={{ "color": "blue" }}>{output}</font>
                                <form>
                                    <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <br />

                                    <div class="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <br />

                                    <div class="form-group">
                                        <label for="mobile">Mobile:</label>
                                        <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <br />

                                    <div class="form-group">
                                        <label for="address">Address:</label>
                                        <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                    </div>
                                    <br />

                                    <div class="form-group">
                                        <label for="city">City:</label>
                                        <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                                            <option>Select City</option>
                                            <option>Indore</option>
                                            <option>Ujjain</option>
                                            <option>Bhopal</option>
                                        </select>
                                    </div>
                                    <br />

                                    <div class="form-group">
                                        <label for="gender">Gender:</label>
                                        Male <input type="radio" checked value="male" name="gender"
                                            onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                        Female <input type="radio" value="female" name="gender"
                                            onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                    </div>
                                    <br />

                                    <button type="button" onClick={handleSubmit}  class="btn btn-success">Update</button>
                                </form>
                     
                        {/* <h4 class="mb-0">AdminHome</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                        
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
    {/* About End */}
    
   </div>
);
}
export default EPAdmin;