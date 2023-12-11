import React,{useState,useEffect} from 'react'
import Axios from 'axios';
function ShowStudents() {
    //use state variables
    const [studentlist,setStudentList]=useState([])
    const [countofstud,setCountOfStud]=useState(0)

    //use effect
    useEffect(()=>{
        Axios.get("http://localhost:3001/getAllStudents")
        .then((res)=>{
            setStudentList(res.data.students)
            setCountOfStud(res.data.count)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])


  return (
    <div>
        <table className='table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
            </tr>
            </thead>
        {studentlist.map((s)=>{
            return(
                <tbody>
                <tr>
                    <td>{s.studId}</td>
                    <td>{s.studName}</td>
                    <td>{s.email}</td>
                    <td>{s.dept}</td>
                </tr>
                </tbody>
            )
        })}
        </table>
        <div><h3>Number of records {countofstud}</h3></div>
    </div>
  )
}

export default ShowStudents