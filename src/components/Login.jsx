import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className="relative h-screen w-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/SE-en-20250721-TRIFECTA-perspective_6433145a-f507-469a-bf31-29c659178044_small.jpg"
          alt="background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> 
      </div>
      <form className="absolute z-10 p-12 bg-black bg-opacity-75 w-3/12 my-36 mx-auto left-0 right-0 text-white">
        <h2 className="font-bold text-3xl pb-6">Sign In</h2>
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 bg-[#333] text-white rounded"
        />
        <button className="w-full p-3 my-4 bg-red-600 hover:bg-red-700 rounded font-semibold">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
