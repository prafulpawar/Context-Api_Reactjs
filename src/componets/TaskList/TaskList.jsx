import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


function TaskList({data}) {
    console.log(data.tasks)
    return (
        <div id='tasklist' className='h-[55%] pl-20 overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        
        
          
          {
            data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask/>
                }  
                 if(elem.completed){
                    return <CompleteTask/>
                }

                 if(elem.new){
                    return <NewTask/>
                }
                if(elem.failed){
                    return <failedTasks/>
                }
            })
          }


        </div>
    )
}


export default TaskList