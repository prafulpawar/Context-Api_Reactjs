import React, { createContext, useState } from 'react'

export const AuthContext  = createContext()
  const [userData,setUserData] = useState(null)

function AuthProvider({children}) {
  return (
    <div>
         <AuthContext.Provider value={"Ajay"}>
               {children}
         </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider