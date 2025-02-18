import React from 'react'

function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center '>


         <div className='border-2 border-red-600 border-emerald-600 p-20 '>

             <form action="" className='flex flex-col items-center justify-center'>
                   <input className='border-2 border-emerald-600 py-4 px-5 text-black outline-none bg-transparent placeholder:text-white   rounded-full ' type="email" placeholder='Enter Your Email' />
                   <input className='border-2 border-emerald-600 py-4 px-5 text-black outline-none bg-transparent placeholder:text-white   rounded-full mt-3 ' type="password" placeholder='Enter Your Password' />  
                   <button className='mt-5 rounded-full text-white border-2 bg-emerald-600 py-4 px-5 py-3   outline-none bg-transparent '>Log in</button>
             </form>


         </div>
    </div>
  )
}

export default Login