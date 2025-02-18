import React, { createContext } from 'react'

export const AuthContext  = createContext()




function AuthProvider({children}) {
  return (
    <div>
         <AuthProvider.Provider value={"Ajay"}>
               {children}
         </AuthProvider.Provider>
    </div>
  )
}

export default AuthProvider