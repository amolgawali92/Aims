import './banner.css';
import {useState,useEffect} from 'react';

function Banner(){
    const [BannerContent,setBannerContent]=useState();

    useEffect(()=>{
        setInterval(()=>{

        if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
        {
            setBannerContent();
        }
        
        else
        {
            setBannerContent(<div>
             {/* Carousel start*/}
      <div class="container-fluid position-relative p-0">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img class="w-100" src="assets/img/b1.jpg" height="600" width="1920" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "900px"}}>
                            
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Bid Your Dream Product</h1>
                            
                            <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/b2.jpg" height="600" width="1920" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "900px"}}>
                            
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">We are Trusted For Your Auction</h1>
                            
                            <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Carousel End */}
            </div>);
        }
    },10);
},[]);
return(
   
    <div>
      {BannerContent}
    </div>
);
}
export default Banner;