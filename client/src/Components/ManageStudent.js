import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'


function ManageStudents() {
    const [listOfStudents, setlistOfStudents] = useState([]);
    const [countRecords, setcountRecords] = useState(0);
    const [msg, setResponseMsg] = useState('');
    useEffect(() => {
        Axios.get("http://localhost:3001/getAllStudents")
            .then((response) => {
                setlistOfStudents(response.data.students);
                setcountRecords(response.data.count);
                })
            .catch((err) => {
                console.log(err);
                });
    }, []);
   
const deleteStudent=async(id)=>{
    Axios.get(`http://localhost:3001/delete/${id}`)
        .then((res)=>{
            setlistOfStudents(listOfStudents.filter((val)=>{
                return val._id !==id
            }))
        setcountRecords(res.data.count)
        setResponseMsg(res.data.msg)
        })
    
    }   
    
  return (
     <div className="containter w-50 mx-auto">
          <table className="table table-striped mt-5">
              <thead>
                    <tr><th>Object Id</th><th>Student Id</th><th>Name</th><th>Email</th><th>Department</th></tr>
             </thead>
              <tbody>
                  {
                      listOfStudents.map((s) => {
                        return (
                            <tr key={s._id}>
                                    <td>{s._id}</td>
                                    <td>{s.studId}</td>
                                    <td>{s.studName}</td>
                                    <td>{s.email}</td>
                                    <td>{s.dept}</td>
                                    <td><button type='button' className='btn btn-success' onClick={()=>deleteStudent(s._id)}>Delete</button></td>
                                    <Link to={`/update/${s._id}`}>
                                    <td><button type='button' className='btn btn-success'>Update</button></td>
                                    </Link>
                             </tr>
                                )
                                }
                                )
                  }
              </tbody>
          </table>
          <div>
              <h3> {msg}</h3>
              <h3>Available Documents: {countRecords}</h3>
          </div> 
    </div>
  )
}

export default ManageStudents