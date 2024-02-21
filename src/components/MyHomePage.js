

import React, { useEffect, useMemo, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";import { IoMdRefresh } from "react-icons/io";

import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";


function MyHomePage(){
    const count=useRef();

    function setCount(){
        count.current=count.current+1;
        console.log(count.current)
    }

    const navigate =useNavigate();

    function logout(){

        dispatch({type:"Register",payload:{loggedIn:false}})
                      
    }
    const [value,setValue]=useState("male");

    const[num,setNum]=useState(0);

    const [count1,setCount1]=useState(0);

    const calculatedValue=useMemo(()=>calculation(num),[count1]);

    function calculation(num){
     console.log("called");
        for(let i=0;i<10;i++){
            num=num+1;
        }
        return num;
    }
    const values=useSelector((state)=>state.keytoAccess);
    const dispatch=useDispatch();

    var courses=["react","angular","html","css","javascript","java..etc"]



return(
    <div className="homepageDiv">
            <div className="linksDiv">
                <Link className="link" to="/homepage">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/quiz">Quiz</Link>

            {values.loggedIn ? <div><h4>Hi {values.username}</h4>
            <FiLogOut style={{cursor:"pointer", width:"30%",height:"20%"}}
            onClick={()=>logout()}
            ></FiLogOut>
            </div> : 
                <Link className="link" to="/register">SignUp</Link>
            }
            </div>
            <div className="blogDiv">
                <h1>Besant Technologies</h1>
            </div>
            <div className="coursesDiv">
                <div className="homeContainer">
            
                </div>
                
                
                <div className="homeContainer">
                        <h2>Avilable Courses</h2>
                        {courses.map((e,i)=>{
                            return <h4>{e}</h4>
                        })}
                </div>
            </div>
        </div>




)



}
export default MyHomePage;