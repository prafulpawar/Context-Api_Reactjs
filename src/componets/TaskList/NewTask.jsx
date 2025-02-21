import React from 'react'

function NewTask({data}) {
  return (
    <div>
      <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5  '>

        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>
          {data.category}
          </h3>

          <h4 className='text-sm'>
          {data.date}
          </h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.task}</h2>

        <p className='text-sm mt-2 '>
        {data.description}
        </p>

        <div className='flex justify-between mt-4 '>
               <button className='bg-green-500  w-full py-1 px-2 text-sm'> Accept Task </button>
         </div>

      </div>
    </div>
  )
}

export default NewTask