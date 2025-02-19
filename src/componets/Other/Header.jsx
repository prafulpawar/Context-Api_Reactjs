import React from 'react'

function Header({data}) {
  return (
    <div className='flex items-end justify-between'>
          <h1 className='text-2xl font-medium '> Hello  <br />  <span className='text-3xl font-semibold'>{data.firstName} 👋 </span>  </h1>
          <button className='bg-red-500 text-white text-lg font-medimum px-5 py-2 rounded-small '>Log Out</button>
    </div>
  )
}

export default Header