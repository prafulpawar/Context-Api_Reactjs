import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localstorage'

function Header(props) {
   console.log(props)
  
    const logoutUser = () =>{
        localStorage.setItem("loggedInUser",' ')
        props.changeUser(" ")
        // window.location.reload()
    }
  return (
    <div className='flex items-end justify-between'>
          <h1 className='text-2xl font-medium '> Hello  <br />  <span className='text-3xl font-semibold'>username 👋 </span>  </h1>
          <button
             onClick={logoutUser}
          className='cursor-pointer  bg-red-500 text-white text-lg font-medimum px-5 py-2 rounded-small '>Log Out</button>
    </div>
  )
}

export default Header

