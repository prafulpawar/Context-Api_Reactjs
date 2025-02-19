import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


function TaskList() {
    return (
        <div id='tasklist' className='h-[55%] pl-20 overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        
        
          
            <AcceptTask/>
            <CompleteTask/>
            <FailedTask/>
            <NewTask/>


        </div>
    )
}

export default TaskList