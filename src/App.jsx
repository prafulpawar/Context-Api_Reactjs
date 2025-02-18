import React, { useEffect, useState } from 'react'
import Login from './componets/Auth/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
function App() {
   const [user,setUser] = useState(null);
   const handleLogin = () =>{

   }


   
  return (
    <div className='' >
           {!user ? <Login/> :" " }
           {/* <Login/> */}
           {/* <EmployeeDashboard/>
          <AdminDashboard/> */}
    </div>
  )
}

export default App 