import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import Alltask from '../Other/Alltask'

function AdminDashboard(props) {
  console.log("hello")
  return (
    <div className='h-screen w-full p-7 '>
      
       <Header chnageUser ={props.chnageUser} />
       <CreateTask/>
       <Alltask/>

    </div>
  )
}

export default AdminDashboard