import './ViewCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory,_apiurlcategory } from '../api_URLs';
import {Link} from 'react-router-dom';

function ViewCategory(){
  const [cList , setCatList] = useState([]);

  useEffect(()=>{
   

    axios.get(_apiurlcategory+"fetch").then((response)=>{
        setCatList(response.data); 
    });
  });
return(
    <div> 
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                {/* <div class="col-lg-4">
                <h1 class="mb-0">Category ==</h1>
                  </div> */}
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        {/* <h5 class="fw-bold text-primary text-uppercase">About Us</h5> */}
                        <h1 class="mb-0">Auction List == Category</h1>
                        {/* <h4 class="mb-0"> Userhome</h4> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                       <br/>
                       {/* <br/> */}
                        <center>
        
                            <div id="catmain">
                              {
                                cList.map((row)=>(
                                  <div class="catpart">
                                    <Link to={"viewsubcategory/"+(row.catnm)}>
                                      <br/>
                                      <br/>
                                  <img src={"assets/uploads/caticons/"+(row.caticonnm)} height="100" width="150"></img>
                                  <br/>
                                  <b>{row.catnm}</b>
                                  </Link>
                                  </div> 
                                ))
                              }
                            
                              
                              {/* <div class="catpart">
                                <img src="" height="100" width="150"></img>
                                <br/>
                                <b>Category Name</b>
                              </div>

                              <div class="catpart">
                                <img src="" height="100" width="150"></img>
                                <br/>
                                <b>Category Name</b>
                              </div>

                              <div class="catpart">
                                <img src="" height="100" width="150"></img>
                                <br/>
                                <b>Category Name</b>
                              </div>

                              <div class="catpart">
                                <img src="" height="100" width="150"></img>
                                <br/>
                                <b>Category Name</b>
                              </div> */}
                            </div>
                        </center>

                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
    {/* About End */}
    
   </div>
);
}
export default ViewCategory;