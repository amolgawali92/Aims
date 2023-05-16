import './ViewProduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory, _apiurlproduct } from '../api_URLs';
import { Link, useParams } from 'react-router-dom';

function ViewProduct() {
  const params = useParams();
  const [pList, setPList] = useState([]);

  useEffect(() => {
    axios.get(_apiurlproduct + "fetch?catnm=" + params.catnm + "&subcatnm=" + params.subcatnm).then((response) => {
      setPList(response.data);
    });
    // ?catnm=" + params.catnm + "&subcatnm=" + params.subcatnm
  });
  return (
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
                <h1 class="mb-0">Auction List  == { params.catnm } == { params.subcatnm }</h1>
                {/* <h4 class="mb-0"> Userhome</h4> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, itaque dolore harum officiis cupiditate unde adipisci praesentium. Veritatis, expedita! Consectetur eaque, sed molestias quasi eveniet iure temporibus earum veritatis eos velit. Dignissimos reprehenderit cum doloribus amet quam minima. Dolor aliquam deleniti unde consectetur eos suscipit quisquam ratione nihil, asperiores voluptates illum, corporis sint architecto inventore tenetur culpa consequuntur dolorem. Cumque non quos porro explicabo molestiae tenetur tempora autem beatae impedit, quibusdam ratione asperiores eius! Veritatis, impedit dolorum cum sunt earum praesentium nostrum labore doloremque nulla, vero eligendi hic pariatur a expedita tenetur rem iusto repellendus voluptatum aperiam tempore nam! Quod omnis cum, eaque iste distinctio numquam. Inventore perspiciatis porro velit eum quod, distinctio aliquam minus voluptatem dolorum quis? Repellat, culpa!</p> */}
                <br />
                {/* <br/> */}
                <center>
                  <div id="catmain">
                    {
                      pList.map((row) => (
                        <div>
                          <table border="1" height="150px" width="100%">
                            <tr>
                              <td width="35%" rowspan="3">
                                <center>
                                  <img src={"../../assets/uploads/producticons/" + (row.piconnm)} height="100" width="150" />
                                </center>
                              </td>
                              <td><b>Product Title : {row.ptitle}</b></td>
                            </tr>
                            <tr>
                              <td><b>Product Description : {row.description}</b></td>
                            </tr>
                            <tr>
                              <td>
                                <b>Base Price : &#8377;{row.baseprice}</b>
                                <br />
                                {Date.now() - row.info < 172800000 && <a><Link  style={{ "color": "orange" }} to={"/bidproduct/"+(row._id)}>Bid Running</Link> </a>}
                                {Date.now() - row.info > 172800000 && <a><Link  style={{ "color": "green" }} to={"/showproduct/"+(row._id)}>Bid Completed</Link></a>}

                              </td>
                            </tr>
                          </table>
                          <br /><br />
                        </div>
                      ))
                    }
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
export default ViewProduct;
