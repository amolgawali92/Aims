import './nav.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

function Nav(){
    const [NavContent,setNavContent]=useState();

    useEffect(()=>{
        if(localStorage.getItem("role")=="admin")
        {
            setNavContent(
                <div>
  {/* Navbar Start */}
  <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>eAuction</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link active"><Link to={"/admin"}>Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/manageusers"}>Manage Users</Link></a>
                     {/* <a class="nav-item nav-link"><Link to={"/About"}>About</Link></a>
                    <a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a>
                     <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                    */}
                       <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#06A3DA"}}>Category</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/addcategory"}>Add Category</Link></a>
                            <a class="dropdown-item"><Link to={"/addsubcategory"}>Add Subcategory</Link></a>
                        </div> 
                        
                    </div> 

                     <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#06A3DA"}}>Settings</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/cpadmin"}>Change Password</Link></a>
                            <a class="dropdown-item"><Link to={"/epadmin"}>Edit Profile</Link></a>
                        </div> 
                        
                    </div> 
                 
                   
                </div>
                {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
                <a class="btn btn-primary py-2 px-4 ms-3"><Link to={"/logout"}>Logout</Link></a>
            </div>
        </nav>
        </div>

   </div>
            );
        }
        else if(localStorage.getItem("role")=="user")
        {
            setNavContent(
                <div>
  {/* Navbar Start */}
  <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>eAuction</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link active"><Link to={"/user"}>User Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/viewcategory"}>Search Auction</Link></a>
                     {/*<a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a>
                     <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>*/}
                   

                     <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style={{"color":"#06A3DA"}} data-bs-toggle="dropdown">Manage Product</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/apuser"}>Add Product</Link></a>
                            <a class="dropdown-item"><Link to={"/vpuser"}>View Product</Link></a>
                        </div> 
                        
                    </div>  
                    
                   
                </div>
                {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
                <a class="btn btn-primary py-2 px-4 ms-3"><Link to={"/logout"}>Logout</Link></a>
            </div>
        </nav>
        </div>

   </div>
            );
        }
        else
        {
            setNavContent(
                <div>
  {/* Navbar Start */}
  <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>eAuction</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link active"><Link to={"/"}>Home</Link></a>
                    <a class="nav-item nav-link"><Link to={"/About"}>About</Link></a>
                    <a class="nav-item nav-link"><Link to={"/contact"}>Contact</Link></a>
                     <a class="nav-item nav-link"><Link to={"/register"}>Register</Link></a>
                     {/* <a class="nav-item nav-link"><Link to={"/Service"}>Service</Link></a> */}

                     <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#05eeff"}}>Service</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to={"/blog"}>Blog</Link></a>
                            <a class="dropdown-item"><Link to={"/porfolio"}>Porfolio</Link></a>
                        </div> 
                        
                    </div>
                    
                   
                </div>
                {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
                <a class="btn btn-primary py-2 px-4 ms-3"><Link style={{"color":"white"}} to={"/login"}>Login</Link></a>
            </div>
        </nav>
        </div>

   </div>
            )
        }
        });

return(
    <div>
       {NavContent}
   </div>
);
}
export default Nav;