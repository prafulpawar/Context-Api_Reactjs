import React from 'react'

function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center '>


         <div className='border-2 border-red-600  '>


             <form action="" className='flex flex-col items-center justify-center'>
                   <input type="email" placeholder='Enter Your Email' />
                   <input type="password" placeholder='Enter Password' />
                   <button>Log in</button>
             </form>


         </div>
    </div>
  )
}

export default Login