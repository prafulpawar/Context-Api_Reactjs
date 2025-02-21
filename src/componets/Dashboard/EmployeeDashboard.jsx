import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
 
  return (
   
      
            <div className='p-10 bg-[#1C1C1C] h-screen'>
            
                 <Header data changeUser = {props.data}/>
                 <TaskListNumber data = {props.data} />
                 <TaskList data = {props.data} />

                 
            </div>

  )
}

export default EmployeeDashboard