import React,{useState} from 'react'
import Axios from 'axios'
import banner from './banner.jpg'

export default function RegisterProduct() {
    const [pid,setPid]=useState('')
    const [pname,setPname]=useState('')
    const [pbrand,setPbrand]=useState('')
    const [pcost,setPcost]=useState(0)
    const [msg,setMsg]=useState('')
   

   

    const addProduct = () => {
   Axios.post("http://localhost:3001/add",{
    pid:pid,
    pname:pname,
    pbrand:pbrand,
    pcost:pcost
   })
   .then((res)=>{setMsg(res.data.msg)})
   .catch((e)=>{console.log(e)})
    }
return (
    <div className="container">
        <div className='row'>   {/*-Answer Part-B - Q2---------*/}      
          <div className='col-md-6'> {/*-Answer Part-B - Q2---------*/} 
            <table className="table table-striped">
                <tbody>
                        <tr><td colSpan={2 }><h3>Add a New Product</h3></td></tr>        
                <tr>
                    <td>Product Id</td>
                    <td><input className="form-control" type='text'  onChange={(e)=>{setPid(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td><input className="form-control"  type='text' onChange={(e)=>{setPname(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td>Brand</td>
                        <td>
                            <input type='radio' value="Samsung" name="brand"  onChange={(e)=>{setPbrand(e.target.value)}}/>
                            Samsung
                            <input type='radio' value="Huawei" name="brand" onChange={(e)=>{setPbrand(e.target.value)}}/>
                            Huawei
                            <input type='radio' value="Apple" name="brand" onChange={(e)=>{setPbrand(e.target.value)}}/>
                            Apple
                        </td>
                </tr>
                <tr>
                    <td>Product Cost</td>
                    <td><input  className="form-control" type='text'onChange={(e)=>{setPcost(e.target.value)}} /></td>
                </tr>
            
                <tr>
                    <td colSpan={2}><button type='button'  className="btn btn-secondary" onClick={addProduct}>Register Product</button></td>
                </tr>
                </tbody>
                    </table>
             </div>
             <div className='col-md-6'>{/*-Answer Part-B - Q2---------*/} 
               <img src={banner}  alt="Missing" className='rounded img-fluid'/> {/*-Answer Part-B - Q2---------*/} 
             </div>
        </div>  
         <div className='row'> {/*-Answer Part-B - Q2---------*/} 
            <div className='col-md-12'> {/*-Answer Part-B - Q2---------*/} 
            
                        <tr><td><h3>Product Summary</h3></td></tr>   
                        <h4>Product Id: {pid}</h4>
                        <h4>Product Name: {pname}</h4>
                        <h4>Product Brand: {pbrand}</h4>
                        <h4>Product Cost: {pcost}</h4>
            </div>
        </div>
        <div className='row'>{/*-Answer Part-B - Q2---------*/}
            <div className='col-md-12'> {/*-Answer Part-B - Q2---------*/}
                <h1>{msg}</h1>
            </div>
         </div>
    </div>
  )
}
