import React from 'react'
import Header from './Header'
import { useState } from 'react'
import SignUp from './SignUp'

const Login = () => {
  const [isSignIn, setisSignIn]=useState("isSignIn")
  const handleToggle = ()=>{
    setisSignIn(!isSignIn);
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
    <form className="absolute z-10 p-12  bg-[rgba(0,0,0,0.5)] w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-md">

        <h2 className="font-bold text-3xl pb-6">{isSignIn?"Sign In":"Sign-up"}</h2>
         {!isSignIn&&(
          <input type="text" placeholder='Enter your Full Name' className='w-full p-3 my-2 bg-[#333] text-white rounded' ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
        <button className=" cursor-pointer w-full p-3 my-4 bg-red-600 hover:bg-red-700 rounded font-semibold">
          {isSignIn?"Sign In":"Sign-up"}
        </button>
      <p className="cursor-pointer"onClick={handleToggle}>{!isSignIn?"Already Registered? Sign In":"New to Netflix? Sign up now."}</p>
      </form>
    </div>
  )
}

export default Login
