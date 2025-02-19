import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


function TaskList({data}) {
    return (
        <div id='tasklist' className='h-[55%] pl-20 overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        
        
          
          {
            data.tasks.map((elem,index)=>{
                if(elem.active){
                    return <AcceptTask key={index}/>
                }  
                 if(elem.completed){
                    return <CompleteTask key={index} />
                }

                 if(elem.new){
                    return <NewTask key={index}/>
                }
                if(elem.failed){
                    return <failedTasks key={index}/>
                }
            })
          }


        </div>
    )
}


export default TaskList