import React,{useState,useEffect} from "react"
import Web3 from "web3"
import {Link, Outlet } from "react-router-dom"

export default function  AdminMainDashboard(){
    // States to get account
      const [account,setAccount]=useState()
      const [balance,setBalance]=useState()
      const [networks,setNetworks]=useState()
      // const [transaction,setTransactions]=useState([])
    
    //   Useffect to fetch accounts
    useEffect(()=>{
      const web3=new Web3(Web3.givenProvider)
        async function getAccounts(){           
            const accounts=await web3.eth.requestAccounts()
            console.log("accounts",accounts)
            setAccount(accounts)
         }       
         async function loadBalance(){
        const network= await web3.eth.net.getNetworkType()
        const balance=web3.eth.getBalance()
        setNetworks(network)
        setBalance(balance)
         }
         getAccounts()
         loadBalance()
    },[])

    return (
      <div>
        <Link to="causes" className=" hover:text-blue-500">Causes</Link>
        <Outlet/>
       </div>
    )
}