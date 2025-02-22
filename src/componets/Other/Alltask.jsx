import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthProvider'


function Alltask({data}) {
   const [userData,setUserData] =   useContext(AuthContext)
   
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded   '>
      <div className='bg--400 py-2 mb-2 px-4 flex justify-between rounded'>
               <h2 className='w-1/5  text-center' >EmployeeName </h2>
               <h3 className='w-1/5 text-center '>New Task</h3>
               <h5 className='w-1/5 text-center'>Active Task</h5>
               <h5 className='w-1/5 text-center'>Completed</h5>
               <h5 className='w-1/5 text-center'>Failed</h5>
               </div>
        <div className='h-[80%] overflow-auto'>
        {
          userData.map((elem,index)=>{
            return (
               <div key={index} className='  border-2  py-2 mb-2 px-4 flex justify-between rounded'>
               <h2 className='w-1/5 text-center ' >{elem.firstName} </h2>
               <h3 className='w-1/5 text-center'>{elem.taskCounts.taskCounts }</h3>
               <h5 className='w-1/5 text-center'>{elem.taskCounts.newTasks }</h5>
               <h5 className='w-1/5 text-center'>{elem.taskCounts.completedTasks }</h5>
               <h5 className='w-1/5 text-center'>{elem.taskCounts.failedTasks }</h5>
               </div>
            )
          })
        }
        </div>

    </div>
  )
}

export default Alltask