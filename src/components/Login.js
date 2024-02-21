import React from "react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./login.css";


function Login() {
 const navigate= useNavigate();
const [username,setUsername]=useState('');
 const [password,setPassword]=useState('');
 const[flag,setflag]=useState(false);
 const changeUserName=(e)=>{
   setUsername(e.target.value);
 };

 const changePassword=(e)=>{
   setPassword(e.target.value);
 };
function validateUserLogin(){
  alert(details.username)
  if (details.username===username){
    if(details.password===password){
         alert('Login successful!')
    }
   else{
          alert('Incorrect password') 
       }
  }
  else{
      alert('Invalid username')
  }
}



const details=useSelector((state)=>state.keytoAccess);


// function Login() {
  return (

    <div className="loginDiv">
        
         <div className="loginContainer">
          <h1>Login Page</h1>
        <label>Username</label>
        <input value={username} onChange={(e)=>changeUserName(e)}
        type="text" placeholder="username" />
        <label>Password</label>
        <input value={password} onChange={(e)=>changePassword(e)} 
        type="password" placeholder="password" />
        <button className="loginButton" onClick={()=>{validateUserLogin()}}>Login</button>
        <button className="gobackButton" onChange={()=>{navigate('/')}}>Go Back</button> 
        
      </div>
     
      </div> 
   );
}
export default Login;
