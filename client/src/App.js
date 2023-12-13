import './App.css';
import StudentRegister from './Components/StudentRegister.js';
import {Routes,Route, Link} from 'react-router-dom';
import Home from './Components/Home.js';
import ShowStudents from './Components/ShowStudents.js'
import GetStudentbyId from './Components/GetStudentbyId.js';
import ManageStudents from './Components/ManageStudent.js';
import UpdateStudent from './Components/UpdateStudent.js';

function App() {
  return (
    <div className="App">
      
    <nav className='nav bg-warning justify-content-center'>
      <Link to='/' className='nav-item nav-link'>Home</Link>
      <Link to='/studRegister' className='nav-item nav-link'>Student Registration</Link>
      <Link to='/show' className='nav-item nav-link'>Show Students</Link>
      <Link to='/manage' className='nav-item nav-link'>Manage Students</Link>
      <Link to='/showbyid' className='nav-item nav-link'>Search student</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/studRegister' element={<StudentRegister/>}/>
        <Route path='/show' element={<ShowStudents/>}/>
        <Route path='/showbyid' element={<GetStudentbyId/>}/>
        <Route path='/manage' element={<ManageStudents/>}/>
        <Route path='/update/:sid' element={<UpdateStudent/>}/>
      </Routes>

    </div>
  );
}

export default App;
