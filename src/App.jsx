import React, { useEffect, useState } from 'react'
import Login from './componets/Auth/Login'
import { useContext } from 'react'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

function App() {
     const [user, setUser] = useState("");
     const [loggedInUserData, setLoggedInUserData] = useState("");

     const authData = useContext(AuthContext)
      

     // useEffect(() => {
     //      if (authData && authData.employees) {
     //          const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
     //          if (storedUser) {
     //              setUser(storedUser);
     //              const loggedEmployee = authData.employees.find(e => e.email === storedUser.email);
     //              if (loggedEmployee) setLoggedInUserData(loggedEmployee);
     //          }
     //      }
     //  }, [authData]);  
      
     


     const handleLogin = (email, password) => {
          if (email == 'admin@example.com' && password == '123') {
               setUser({ role: 'admin' })
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
          }
          else if (authData) {

               if (!authData || !authData.employees) {
                    alert("Employees data not found. Please check localStorage or refresh.");
                    return;
                }
                
               
               const employee = authData.employees.find((e) => email == e.email && e.password == password)
               
               if (employee) {
                    console.log(employee)
                    setUser({ role: 'employee' })
                    setLoggedInUserData(employee)
                    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
                    console.log("saved in localstorager",localStorage.getItem("loggedInUser"))
                  
               }
               else{
                    alert("Invalid Credentials");
               }

          }
          else {
               alert("InValid Credentials");
          }

          // console.log(loggedInUserData)
     }

    


     return (
          <div className='' >
               {!user ? <Login handleLogin={handleLogin} /> : ''}

              {
                user == 'admin' ? <AdminDashboard/> : (user?.role == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> :"" )
              }

          </div>
     )
}

export default App 