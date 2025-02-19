import React, { useContext, useState } from 'react'

function Login({handleLogin}) {


        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("");
  
        const submitHandler = (e)=>{
            e.preventDefault()
             handleLogin(email,password)
            setEmail("");
            setPassword("")
        }


  

  return (
    <div className='flex h-screen w-screen items-center justify-center '>


         <div className='border-2 border-emerald-600 border-emerald-600 p-20 '>

             <form onSubmit={(e)=>{
                submitHandler(e)
             }} action="" className='flex flex-col items-center justify-center'>
                   <input value={email}  onChange={(e)=>setEmail(e.target.value)}              required className='border-2 border-emerald-600 py-4 px-5 text-black w-72 text-center outline-none bg-transparent placeholder:text-white   rounded-full ' type="email" placeholder='Enter Your Email' />
                   <input value={password}  onChange={(e)=>setPassword(e.target.value)}           required className='border-2 border-emerald-600 py-4 px-5 text-black w-72 text-center outline-none bg-transparent placeholder:text-white   rounded-full mt-3 ' type="password" placeholder='Enter Your Password' />  
                   <button className='mt-5 rounded-full text-white border-2 pr-12 pl-12 w-48 bg-emerald-500 py-1   outline-none  '>Log in</button>
             </form>


         </div>
    </div>
  )
}

export default Login;