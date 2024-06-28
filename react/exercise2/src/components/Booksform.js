import React from 'react'
import './Booksform.css'
function Booksform() {
  return (
    <div><h2> Book Information </h2>
    <form className='form-style'>
          <input className='field-style' type="text" name="field1"  placeholder="Book ID" />
          <input className='field-style' type="text" name="field2" placeholder="Book Title" />
          <input className='field-style' type="text" name="field3"  placeholder="Author Name" />
          <input className='field-style' type="number" name="field4"  placeholder="Price" />
          <input className='field-style' type="text" name="field3" placeholder="Book Subject" />
          <textarea className='field-style' name="field5" placeholder="Book Description"></textarea>
          <input type="submit" value="Save Book" />
     </form></div>
  )
}

export default Booksform