import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import validate from '../utils/validate'  
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {
  const [isSignIn, setisSignIn]=useState(true)
  const [errorMessage, setErrorMessage]=useState("");
  const handleToggle = ()=>{
    setisSignIn(!isSignIn);
  }

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
     const message =  validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return
    if(!isSignIn){
      //sign-up logic
      createUserWithEmailAndPassword(auth, 
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " - " + errorMessage)
    // ..
  });

    }else{
      //sign-up logic
    }

  }
  return (
    <div className="relative h-screen w-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/SE-en-20250721-TRIFECTA-perspective_6433145a-f507-469a-bf31-29c659178044_small.jpg"
          alt="background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> 
      </div>
    <form onSubmit={(e)=>e.preventDefault()} className="absolute z-10 p-12  bg-[rgba(0,0,0,0.5)] w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-md">

        <h2 className="font-bold text-3xl pb-6">{isSignIn?"Sign In":"Sign-up"}</h2>
         {!isSignIn&&(
          <input ref={userName} type="text" placeholder='Enter your Full Name' className='w-full p-3 my-2 bg-[#333] text-white rounded' ></input>
        )}
        <input
          ref={email}
          type="text" 
          placeholder="Email Address"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
          <p className='font-bold text-red-700'>{errorMessage}</p>
        <button onClick={handleButtonClick} className=" cursor-pointer w-full p-3 my-4 bg-red-600 hover:bg-red-700 rounded font-semibold">
          {isSignIn?"Sign In":"Sign-up"}
        </button>
      <p className="cursor-pointer"onClick={handleToggle}>{!isSignIn?"Already Registered? Sign In":"New to Netflix? Sign up now."}</p>
      </form>
    </div>
  )
}

export default Login
