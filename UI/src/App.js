import './App.css';
import {Routes,Route} from 'react-router-dom';

import Header from './HeaderComponent/header';
import Nav from './NavComponent/nav';

import Banner from './BannerComponent/banner';
import Footer from './FooterComponent/footer';
import Content from './ContentComponent/content';
import About from './AboutComponent/about';
import Contact from './ContactComponent/contact';
import Service from './ServiceComponent/service';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';
import Adminhome from './AdminhomeComponent/adminhome';
import Userhome from './UserhomeComponent/userhome';
import Logout from './LogoutComponet/Logout';
import ManageUsers from './ManageusersComponent/manageusers';
import CPAdmin from './CPAdmin/cpadmin';
import EPAdmin from './EPAdmin/epadmin';
import AddCategory from './AddCategoryComponent/addcategory';
import AddSubCategory from './AddSubCategoryComponent/addsubcategory';
import ViewCategory from './ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './ViewSubCategoryComponent/ViewSubCategory';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import APUser from './APUserComponent/APUser';
import ViewProduct from './ViewProductComponent/ViewProduct';
import BidProduct from './BidProductComponent/BidProduct';
import ShowBid from './ShowBidComponent/ShowBid';

function App(){
return(
 <div>
   
   <Header />
   <Nav />
   <Banner/>
   {/* <Content/> */}
    <Routes>
        <Route path="/" element={<Content/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/verifyuser/:vemail" element={<Verifyuser/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/admin" element={<Adminhome/>}></Route>
        <Route path="/manageusers" element={<ManageUsers/>}></Route>
        <Route path="/cpadmin" element={<CPAdmin/>}></Route>
        <Route path="/epadmin" element={<EPAdmin/>}></Route>
        <Route path="/addcategory" element={<AddCategory/>}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory/>}></Route>
        <Route path="/user" element={<Userhome/>}></Route>
        <Route path="/apuser" element={<APUser/>}></Route>
        <Route path="/viewcategory" element={<ViewCategory/>}></Route>
        <Route path="/viewcategory/viewsubcategory/:catnm" element={<ViewSubCategory/>}></Route>
        <Route path="/viewproduct/:catnm/:subcatnm" element={<ViewProduct />} ></Route>
        <Route path="/Showbid/:pid" element={<ShowBid />} ></Route>
        <Route path="/bidproduct/:pid" element={<BidProduct />} ></Route>
      </Routes>
   <Footer/>
    <div class="container-fluid text-white" style={{"background":"#061429"}}>
        <div class="container text-center">
            <div class="row justify-content-end">
                <div class="col-lg-8 col-md-6">
                    <div class="d-flex align-items-center justify-content-center" style={{"height":"75px"}}>
                        <p class="mb-0">&copy; <a class="text-white border-bottom" href="">eAuction</a>. All Rights Reserved. 
						
						{/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
						Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">React batch</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer End */}


    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>

 </div>
);
}
export default App;


