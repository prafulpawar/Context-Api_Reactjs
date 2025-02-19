import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage,setLocalStorage } from '../utils/localstorage'

export const AuthContext  = createContext()

function AuthProvider({children}) {
  const [userData,setUserData] = useState(null)

//   useEffect(() => {
//     const localData = getLocalStorage();

//     // Agar localStorage me data nahi hai, to pehle save kar do
//     if (!localData.employees || !localData.admin) {
//         console.warn("LocalStorage empty, initializing...");
//         setLocalStorage(); // First time storage setup
//     }

//     // Get fresh data after setting it
//     const updatedData = getLocalStorage();
//     console.log("Updated Auth Data:", updatedData);

//     setUserData(updatedData);
// }, []);

  useEffect(()=>{
    setLocalStorage()
    const {employees,admin} = getLocalStorage();
       setUserData({employees,admin})
  },[])



  return (
    <div>
         <AuthContext.Provider value={userData}>
               {children}
         </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider