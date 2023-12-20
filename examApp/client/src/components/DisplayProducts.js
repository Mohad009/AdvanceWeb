import React from 'react'
import ProductData from './ProductData'
import './Style.css'
export default function DisplayProducts() {
       
  return (
    <div className="container  justify-content-center align-items-center">
      <h1>Product details</h1>
      <table className='style-table'>
        <thead>
          <tr className='style-row'><th>ProductId</th><th>Name</th><th>Brand</th><th>Cost</th></tr>
        </thead>
        <tbody>
          {
            ProductData.map((item,index)=>{
              return(
                <tr key={index} className='style-row'>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.cost}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        {
            /*---------------Answer Part-B - Q4--------------------------
	       -------------------------------------------------------------
		 -------------------------------------------------------------
            ------------------------------------------------------------*/
                
        }  
    </div>

  )
}
