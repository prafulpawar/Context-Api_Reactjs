import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import Alltask from '../Other/Alltask'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full p-7 '>
      
       <Header changeUser ={props.changeUser} />
       <CreateTask/>
       <Alltask/>

    </div>
  )
}

export default AdminDashboard


