import React, { useEffect, useState } from 'react'
import Login from './componets/Auth/Login'
import { useContext } from 'react'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

function App() {
     const [user, setUser] = useState(null);
     const [loggedInUserData, setLoggedInUserData] = useState(null);


     const authData = useContext(AuthContext)
     // console.log(authData)
     // console.log(authData?.employees);


     //    useEffect(()=>{
     //      if(authData){
     //         const loggedInUser  = localStorage.getItem("loggedInUser")
     //           if(loggedInUser){
     //                 setUser(loggedInUser.role);
     //           }

     //      }
     //  },[authData])

     // console.log(user)


     const handleLogin = (email, password) => {
          if (email == 'admin@example.com' && password == '123') {
               setUser({ role: 'admin' })
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
          }
          else if (authData) {
               const employee = authData.employees.find((e) => email == e.email && e.password)
               if (employee) {
                    setUser({ role: 'emaployee' })
                    setLoggedInUserData(employee)
                    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'emaployee' }))
               }

          }
          else {
               alert("InValid Credentials");
          }
     }


     return (
          <div className='' >
               {!user ? <Login handleLogin={handleLogin} /> : ''}

               { user === 'admin' ? ( <AdminDashboard /> ) : user === 'employee' ? (<EmployeeDashboard data={loggedInUserData} />) : null }


               {/* <Login/> */}
               {/* <EmployeeDashboard/>
          <AdminDashboard/> */}
          </div>
     )
}

export default App 