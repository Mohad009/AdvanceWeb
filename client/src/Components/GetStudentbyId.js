import React,{useState} from 'react'
import Axios  from 'axios'

function GetStudentbyId() {
    const [id,setId]=useState('')
    const [student,setStudent]=useState([])
    const getStudent=()=>{
        Axios.get(`http://localhost:3001/getStudent/${id}`)
        .then((res)=>
        {
            setStudent(res.data.student)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div className="containter w-50">
    <table className="table table-striped">
        <thead>
            <tr>
                <td colSpan="2"><h1 className="display-6">Search Student</h1> </td>
            </tr>
        </thead>
        <tbody>        
                    <tr>
                        <td>Student ID</td>
                        <td><input type="text" onChange={(e) => setId(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="button" onClick={getStudent} value="Search Student" /></td>
                    </tr>  
                    </tbody>
          </table>
        
            {
                student.map((d)=>{
                    return(
                       <div>
                        <h4>{d._id}</h4>
                        <h4>{d.studId}</h4>
                        <h4>{d.studName}</h4>
                        <h4>{d.email}</h4>
                        <h4>{d.dept}</h4>
                       </div> 
                    )
                })
            }
        
    </div>
  )
}

export default GetStudentbyId