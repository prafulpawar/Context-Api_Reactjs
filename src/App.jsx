import React, { useEffect, useState } from 'react'
import Login from './componets/Auth/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
function App() {
   const [user,setUser] = useState(null);
   const handleLogin = (email,password) =>{
        if(email == 'admin@example.com' && password == '123' ){
             setUser('admin')
        }
        else if(email ='user@me.com' && password =='123'  ){
             setUser('emaployee')
        }
        else{
            alert("InValid Credentials");
        }
   }




  return (
    <div className='' >
           {!user ? <Login handleLogin={handleLogin}/> : '' }

           {
              user  === 'admin'? <AdminDashboard/> : <EmployeeDashboard/>
           }

           {/* <Login/> */}
           {/* <EmployeeDashboard/>
          <AdminDashboard/> */}
    </div>
  )
}

export default App 