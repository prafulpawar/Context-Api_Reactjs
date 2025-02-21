import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthProvider'


function Alltask({data}) {
   const authData =   useContext(AuthContext)
    console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto '>

        {
          authData.employees.map(()=>{
            return (
               <div className='bg-green-400 py-2 mb-2 px-4 flex justify-between rounded'>
               <h2>Rahul </h2>
               <h3>Make A UI Design</h3>
               <h5>Status</h5>
               </div>
            )
          })
        }


    </div>
  )
}

export default Alltask