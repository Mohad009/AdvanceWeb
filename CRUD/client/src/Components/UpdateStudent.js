import React,{useState} from 'react'
import  Axios  from 'axios';
import { useLocation } from 'react-router-dom';

function UpdateStudent() {
let {state}=useLocation()
let primeId=state.students._id;
const [id, setId] = useState(state.students.studId); 
const [name, setName] = useState(state.students.studName); 
const [email, setEmail] = useState(state.students.email);
const [password, setPassword] = useState(state.students.password);
const [dept, setDept] = useState(state.students.dept); 
const [responseMsg, setresponseMsg] = useState("");


const updateStudent = () => {
    Axios.put(`http://localhost:3001/updateStudent/${primeId}`, {
        studId: id,
        studName: name, 
        email: email,
        password: password,
        dept: dept
    })
    .then((res) => {
        setresponseMsg(res.data.msg);
    })
  .catch((err) => { console.log(err);});
};


  return (
    <div className="containter w-50 justify-content-center">
    <table className="table table-striped">
        <thead>
            <tr>
                <td colSpan="2"><h1 className="display-6">Update Student</h1> </td>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student ID:</td>
            <td><input type="text" value={id} className="form-control" onChange={(e) => setId(e.target.value)} /> </td>
          </tr>
          <tr>
            <td>Student Name:</td>
            <td><input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)}/></td>
         </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Department: </td>
            <td><select value={dept} onChange={(e) => setDept(e.target.value)}>
                    <option value="IT">IT</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Foundation">Foundation</option>
                </select>
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                <button type='button' className="btn btn-info" onClick={updateStudent}> Update Student</button>
            </td>

        </tr>
        <tr>
            <td colSpan="2">{ responseMsg}</td>
        </tr>        
        </tbody>
        </table>
</div>
  )
}

export default UpdateStudent