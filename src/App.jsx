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


          useEffect(()=>{
               const loggedInUser = localStorage.getItem('loggedInUser');
               
               if(loggedInUser){
                   const userData = JSON.parse(loggedInUser);
                   setUser(userData.role);
                   setLoggedInUserData(userData.data)
                  
               }
          },[])
     


     const handleLogin = (email, password) => {
          if (email == 'admin@example.com' && password == '123') {
               setUser('admin')
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
          }
          else if (authData) {                
               
               const employee = authData.employees.find((e) => email == e.email && e.password == password)
               
               if (employee) {
                  
                    setUser('employee')
                    setLoggedInUserData(employee)
                    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data:employee }))
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
               {!user ? <Login handleLogin={handleLogin} /> : ' '}

              {
               
                user == 'admin' ? <AdminDashboard  changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard  data={loggedInUserData}/> :"" )
              }
             
              

          </div>
     )
}

export default App 