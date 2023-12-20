import Axios from "axios"; 
import { useState } from "react";


function StudentRegister(){
//state variables
const [id, setId] = useState(""); 
const [name, setName] = useState(""); 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [dept, setDept] = useState("IT"); 
const [responseMsg, setresponseMsg] = useState("");

const addStudent=()=>{
    Axios.post('http://localhost:3001/addStudent', {
        studId:id,
        studName:name,
        email:email,
        password:password,
        dept:dept
    })
        .then((res)=>{
            setresponseMsg(res.data);
    
    })

    .catch((e)=>{
            console.log(e)
        })
        
}  

return (
<div className="containter w-50 justify-content-center">
    <table className="table table-striped">
        <thead>
            <tr>
                <td colSpan="2"><h1 className="display-6">Student Registration</h1> </td>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student ID:</td>
            <td><input type="text" className="form-control" onChange={(e) => setId(e.target.value)} /> </td>
          </tr>
          <tr>
            <td>Student Name:</td>
            <td><input type="text" className="form-control" onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/></td>
         </tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} /></td>
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
                <button className="btn btn-info" onClick={addStudent}> Add Student</button>
            </td>
        </tr>
        <tr>
            <td colSpan="2">{ responseMsg}</td>
        </tr>        
        </tbody>
        </table>
</div>
);
};
export default StudentRegister;



