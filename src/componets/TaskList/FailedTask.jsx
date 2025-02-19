import React from 'react'

function FailedTask() {
  return (
    <div>
      <div className=' flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5  '>

        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>
            High
          </h3>

          <h4 className='text-sm'>
            20 feb 2024
          </h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Vedio</h2>

        <p className='text-sm mt-2 '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe impedit nostrum consequuntur nam corporis facilis.

        </p>


        <div className='flex justify-between mt-4 '>
    
               <button className=' w-full bg-blue-500 py-1 px-2 text-sm'>Mark as Failed</button>
         </div>


      </div>

    </div>
  )
}

export default FailedTask