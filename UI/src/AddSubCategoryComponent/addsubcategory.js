import './addsubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiurlsubcategory,_apiurlcategory } from '../api_URLs';

function AddSubCategory(){
    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();

    const [cList , setCatList] = useState([]);

    const [output , setOutput] = useState();

    useEffect(()=>{
        axios.get(_apiurlcategory+"fetch").then((response)=>{
            setCatList(response.data); 
        })
      });

    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }
      
      const handleSubmit=(event)=>{
        event.preventDefault();
        var formData = new FormData();
        formData.append('catnm', catName);
        // formData.append('caticon', file);
        formData.append('subcatnm', subCatName);
        formData.append('subcaticon', file);

        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlsubcategory+"save", formData, config).then((response) => {
          setCatName("");
          setSubCatName("");
          setOutput("SubCategory Added Successfully....");
        //   setOutput("Category Added Successfully....");
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
                        <h1 class="mb-0">Add Sub Category Here!!!</h1>
                        <font style={{"color":"blue"}} >{output}</font>
                         <form>
                         <div class="form-group">
                         <label for="catnm">Category Name:</label>
                         <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                            <option>Select Category</option>
        
                            {
                          cList.map((row)=>(
                          <option>{row.catnm}</option>
                          ))
                        // cList[0].catnm
                        }
                        
                        </select>
                       
                         </div>
                         <br/>
                         <div class="form-group">
                         <label for="subcatnm">Sub Category Name:</label>
                         <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                         </div>
                         <br/>
                        <div class="form-group">
                         <label for="file">Category Icon:</label>
                         <input type="file" class="form-control" onChange={handleChange} />
                        </div>
                        <br/>
                        <button onClick={handleSubmit} type="button" class="btn btn-warning">Add Sub Category</button>
                        </form>
                        
                    </div>
                </div> 
                    
                    
            </div>
        </div>
    </div>
   
   </div>
);
}
export default AddSubCategory;