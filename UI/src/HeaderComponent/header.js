import './header.css';
import { useState, useEffect } from 'react';
import Auth from '../AuthComponent/auth';

function Header() {
    const [HeaderContent, setHeaderContent] = useState();

    useEffect(()=>{
        if(localStorage.getItem("role")=="admin")
        {
            setHeaderContent(
                <div>
               
                <div class="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div class="row gx-0">
                        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center" style={{ "height": "45px;" }}>
                                <small class="me-3 text-light">Welcome Admin</small>
                                
                                <small class="me-3 text-light">{localStorage.getItem("email")}</small>
                                
                            </div>
                        </div>

                    </div>
                </div>
               
            </div>
            );
        }
        else if(localStorage.getItem("role")=="user")
        {
           setHeaderContent(
            <div>
                 
                <div class="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div class="row gx-0">
                        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center" style={{ "height": "45px;" }}>
                               <small class="me-3 text-light">Welcome User</small>
                               <small class="me-3 text-light">{localStorage.getItem("email")}</small>
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
             
            </div>
           );
        }
        else{
            setHeaderContent(
            <div>
                 
                <div class="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div class="row gx-0">
                        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center" style={{ "height": "45px;" }}>
                                <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>XXX Street,Indore,India</small>
                                <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>XXX XXX XXXX</small>
                                <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@example.com</small>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center text-lg-end">
                            <div class="d-inline-flex align-items-center" style={{ "height": "45px;" }}>
                                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
            </div>
            );
        }
    });
    return (
        <div>
          
          <Auth/>

          {HeaderContent}
        </div>
    );
}
export default Header;