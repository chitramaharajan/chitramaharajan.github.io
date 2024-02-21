import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';

function App() {
const navigate=useNavigate();


  return (
    <div className="register"> 
    <h1>Welcome to Homepage</h1>
   <button className="btn" onClick={()=>{navigate('/login')}}>login</button>
   <button className="btn" onClick={()=>{navigate('/register')}}>Register</button>
    </div>

  )

}

export default App;
