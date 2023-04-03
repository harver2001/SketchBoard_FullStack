import React, { useContext, useState } from 'react'
import "./login.css"
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom' 
import { useRef } from 'react';
import axios from 'axios';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context)
  const [error1,setError1] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login", {
        username : userRef.current.value,
        password : passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data}); // this line we have used here so that we could change the value or state of "user" variable everywhere
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
      setError1(true);
    }
  };
  // console.log(user);
  return (
    <div className='login'>
    <span className='loginTitle'>LOGIN</span>
        <form className='loginForm ' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='loginInput' placeholder="Enter your email..." ref={userRef} />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder="Enter your password " ref={passwordRef} />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            {error1 && <span style={{color : "white", margin: "10px"}}>"Wrong Username or Password !!"</span>}
        </form>
            <button className="loginRegisterButton"><Link to='/register' className="link">Register</Link></button>
    </div>
  )
}
