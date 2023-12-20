import React,{useState} from 'react'
import Axios from 'axios'
import banner from './banner.jpg'

export default function RegisterProduct() {
   
   /*---------------Answer Part-B - Q3a--------------------------
    -------------------------------------------------------------
    -------------------------------------------------------------
    ------------------------------------------------------------*/
   

    const addProduct = () => {
     
       /*---------------Answer Part-B - Q3d--------------------------
       -------------------------------------------------------------
       -------------------------------------------------------------
       ------------------------------------------------------------*/
    }
return (
    <div className="container">
        <div>   {/*-Answer Part-B - Q2---------*/}      
          <div> {/*-Answer Part-B - Q2---------*/} 
            <table className="table table-striped">
                <tbody>
                        <tr><td colSpan={2 }><h3>Add a New Product</h3></td></tr>        
                <tr>
                    <td>Product Id</td>
                    <td><input className="form-control" type='text'  /></td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td><input className="form-control"  type='text'  /></td>
                </tr>
                <tr>
                    <td>Brand</td>
                        <td>
                            <input type='radio' value="Samsung" name="brand"  />
                            Samsung
                            <input type='radio' value="Huawei" name="brand" />
                            Huawei
                            <input type='radio' value="Apple" name="brand" />
                            Apple
                        </td>
                </tr>
                <tr>
                    <td>Product Cost</td>
                    <td><input  className="form-control" type='text' /></td>
                </tr>
            
                <tr>
                    <td colSpan={2}><button type='button'  className="btn btn-secondary">Register Product</button></td>
                </tr>
                </tbody>
                    </table>
             </div>
             <div>{/*-Answer Part-B - Q2---------*/} 
               <img src={banner}  alt="Missing"/> {/*-Answer Part-B - Q2---------*/} 
             </div>
        </div>  
         <div> {/*-Answer Part-B - Q2---------*/} 
            <div> {/*-Answer Part-B - Q2---------*/} 
                <table className="table">
                    <tbody>
                        <tr><td><h3>Product Summary</h3></td></tr>   
                        {/*---------------Answer Part-B - Q3c--------------------------
                         -------------------------------------------------------------
                         -------------------------------------------------------------
                         ------------------------------------------------------------*/}
                    </tbody>    
                </table>
            </div>
        </div>
        <div>{/*-Answer Part-B - Q2---------*/}
            <div> {/*-Answer Part-B - Q2---------*/}
                {/*---------------Answer Part-B - Q3c--------------------------*/}
            </div>
         </div>
    </div>
  )
}
