import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../api_URLs';

function Register() {

    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();

    const handleSubmit=()=>{
        var userDetailes={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
        axios.post(_apiurluser +"save",userDetailes).then((response)=>{
        //   console.log(response);
        //   setOutput(name);
          setOutput("User Register Sucessfully.....");
          setName("");
          setEmail("");
          setPassword("");
          setMobile("");
          setAddress("");
          setCity("");
        }).catch((err)=>{
          console.log(err);
        })
        // alert("welcome");
        // setOutput(name);
    }
    return (
        <div>


            <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-12">
                            <div class="section-title position-relative pb-3 mb-5">

                                <h1 class="mb-0">Register Here!!!!!!</h1>
                                {/* <h4 class="mb-0">Register Here!!!!!!</h4> */}
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
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
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
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
                                        Male <input type="radio" value="male" name="gender"
                                            onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                        Female <input type="radio" value="female" name="gender"
                                            onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                    </div>
                                    <br />
                                    <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}
export default Register;