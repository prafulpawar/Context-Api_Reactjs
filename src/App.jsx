import React, { useEffect } from 'react'
import Login from './componets/Auth/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'

function App() {

     useEffect(()=>{
           setLocalStorage()
     })

  return (
    <div className='' >
        
           <Login/>
           {/* <EmployeeDashboard/>
          <AdminDashboard/> */}
    </div>
  )
}

export default App 