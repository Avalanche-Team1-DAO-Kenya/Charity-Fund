import React,{createContext, useState} from "react";

const AuthContext=React.createContext()
export default function AuthProvider({children}){
    const [token,setToken]=useState(localStorage.getItem("newChatiryFund"))
     const Login=(token)=>{
        localStorage.setItem("newChatiryFund",token)
        setToken(token)
     }

     const Logout=()=>{
        localStorage.removeItem("newChatiryFund")
        setToken(null)
     } 
     
     return (
        <AuthContext.Provider value={{
            token,Login,Logout
        }}>
            {children}
        </AuthContext.Provider>
     )

}
