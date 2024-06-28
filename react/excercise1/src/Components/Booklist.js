import React from 'react'
import './Booklist.css'
function Booklist() {
  return (
    <div>
        <table className='style-table'>
         <thead className='style-thead'>
            <tr className='style-row'><th>Book ID</th><th>Book Title</th><th>Author</th></tr>
         </thead>
         <tbody>
            <tr className='style-row'><td>E1</td><td>I Love You to the Moon and Back</td><td>Amelia Hepworth</td></tr>
            <tr className='style-row'><td>E2</td><td>Ugly Love: A Novel</td><td>Colleen Hoover</td></tr>
            <tr className='style-row'><td>E3</td><td>Goodnight Moon</td><td>Margaret Wise Brown</td></tr>
            <tr className='style-row'><td>E4</td><td>A Thousand Boy Kisses</td><td>Tillie Cole</td></tr>
         </tbody>
</table>
    </div>
  )
}

export default Booklist