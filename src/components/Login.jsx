import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
          <Header />
        <div className='absolute'>       
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/SE-en-20250721-TRIFECTA-perspective_6433145a-f507-469a-bf31-29c659178044_small.jpg" alt="background" className="bg-gradient-to-b from-white" />
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0'>
        <input type="text" placeholder="EmailAddress" className='p-2 m-2 bg-amber-50' />
        <input type="password" placeholder="Password" className='p-2 m-2 bg-amber-50' />
        <button className='p-4 m-4 bg-red-600'>Sign In </button>


    </form>
       
    </div>
  )
}

export default Login