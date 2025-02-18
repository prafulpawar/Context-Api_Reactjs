import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex mt-10  justify-between gap-5 screen '>
        <div className='rounded-xl w-[45%] bg-red-400 py-6 px-9  '>
              <h2 className='text-2xl font-semibold '>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl w-[45%] bg-blue-400 py-6 px-9  '>
              <h2 className='text-2xl font-semibold '>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
        </div>


        <div className='rounded-xl w-[45%] bg-green-400 py-6 px-9  '>
              <h2 className='text-2xl font-semibold '>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl w-[45%] bg-yellow-400 py-6 px-9  '>
              <h2 className='text-2xl font-semibold '>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
        </div>

       
    </div>
  )
}

export default TaskListNumber