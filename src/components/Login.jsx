import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name,setName]=useState("");
    const navigate=useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }


  return (
    <div>
        <button onClick={handleClick}>Log In</button>
    </div>
  )
}

export default Login
