import './BidProduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory,_apiurlcategory,_apiurlproduct } from '../api_URLs';
import { Link,useParams} from 'react-router-dom';

function BidProduct(){

    const params=useParams();
    const [pDetails,setPDetails]=useState([]);

    useEffect(()=>{
        axios.get(_apiurlproduct+"fetch?pid="+params.pid).then((response)=>{
          setPDetails(response.data[0]); 
      })
    
      
      });

return(
    <div> 
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        
                        <h1 class="mb-0">Bid Product Here!!!</h1>
                        <p>{pDetails._id}</p>
                        
                        
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
    {/* About End */}
    
   </div>
);
}
export default BidProduct;