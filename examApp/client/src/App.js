//import Home from './components/Home';
import RegisterProduct from './components/RegisterProduct';
import DisplayProducts from './components/DisplayProducts';
import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
       <div className="container justify-content-center">
        <nav className='nav bg-info justify-content-center '>
          <Link to='/' className='nav-item nav-link text-dark'>Home</Link>
          <Link to='/addproduct' className='nav-item nav-link text-dark'>Add Product</Link>
          <Link to='/displayproduct' className='nav-item nav-link text-dark'>Display</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<RegisterProduct/>}/>
        <Route path='/displayproduct' element={<DisplayProducts/>}/>
      </Routes>
        
        
     </div>
    </div>
  );
}

export default App;
