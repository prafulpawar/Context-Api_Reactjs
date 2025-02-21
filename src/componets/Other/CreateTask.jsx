import React from 'react'
import { useState } from 'react';
function CreateTask({ data }) {
  const [tasktitle, setTaskTitle] = useState("T");
  const [taskdescription, setTaskDescription] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [Task,setTask] = useState(" ")


  const submitHandler = (e) => {
    e.preventDefault();

    
    setTask({taskdate,taskdescription,tasktitle,category,active:false,new:true,failed:true,completed:false})

    console.log(Task)

    // setAsignTo(" ")
    // setCategory(" ")
    // setTaskDate(" ");
    // setTaskDescription(" ")
    // setTaskTitle(" ")
    // setAsignTo(" ")
  

  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form action='' onSubmit={(e) => {
        submitHandler(e)
      }} className=' flex flex-wrap w-full items-start justify-between  '>

     
     
        <div className='w-1/2 '>
          <div >
            <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
            <input  value={tasktitle} onChange={(e)=>setTaskTitle(e.target.value)}
             className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make A UI Design' />
          </div>


          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
            <input value={taskdate} onChange={(e)=>setTaskDate(e.target.value)}
            
            className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Asign to</h3>
            <input value={asignTo} onChange={(e)=>setAsignTo(e.target.value)}
            
            className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>Category</h3>
            <input  value={category} onChange={(e)=>setCategory(e.target.value)}
             
            className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,dev,etc' />

          </div>

        </div>


        <div className='w-2/4 flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>

          <textarea value={taskdescription} onChange={(e)=>setTaskDescription(e.target.value)}
          
          className=' w-full h-44 text-sm  py-2  px-4  rounded   outline-none bg-transparent  border-[1px]   border-gray-400' name="" cols="30" rows="10" id="" >  </textarea>

          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>





      </form>


    </div>
  )
}

export default CreateTask