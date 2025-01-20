import React,{useState,useEffect} from "react"
// import { useWeb3React } from "@web3-react/core"
//import {Web3} from "@web3-react/core"
import {Link, Outlet } from "react-router-dom"

export default function  AdminMainDashboard(){
 let wallet="0xcB1C1FdE09f811B294172696404e88E658659905"
  useEffect(()=>{
    adminFetchTrans()
  },[])
  const adminFetchTrans=async()=>{
    try{
      const res=await fetch(`https://deep-index.moralis.io/api/v2.2/wallets/${wallet}/history`,{
       headers:{
         "API KEY":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlMzc4ZDBmLWYxNGEtNGVkOC1hNjA1LTA4Y2FkZDExNGUwZSIsIm9yZ0lkIjoiNDI2NTQzIiwidXNlcklkIjoiNDM4NzM0IiwidHlwZUlkIjoiMTA1Y2U4M2YtNjdmZS00ODdmLWI4MDYtYjk2OTFhMzVmNzI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzczMDk3MDQsImV4cCI6NDg5MzA2OTcwNH0.rWecOy9jfb8-WGWiMZkKtkLzsrPGQytsValUj8wUcqg"
       }
      })
      console.log("Response",res)
      const data=await res.json("configured response",res)
      console.log("fetched data",data)
    }
    catch(error){
      console.error(`An error ocuurred fetching trnsaction`,error)
    }
  }
    // States to get account
      const [account,setAccount]=useState()
      const [balance,setBalance]=useState()
      const [networks,setNetworks]=useState()
      // const [transaction,setTransactions]=useState([])
    
    //   Useffect to fetch accounts
    // useEffect(()=>{
    //   const web3=new Web3(Web3.givenProvider)
    //     async function getAccounts(){           
    //         const accounts=await web3.eth.requestAccounts()
    //         console.log("accounts",accounts)
    //         setAccount(accounts)
    //      }       
    //      async function loadBalance(){
    //     const network= await web3.eth.net.getNetworkType()
    //     const balance=web3.eth.getBalance()
    //     setNetworks(network)
    //     setBalance(balance)
    //      }
    //      getAccounts()
    //      loadBalance()
    // },[])

    return (
      <div>
        <div className=" flex flex-row space-x-4">
          <Link to="causes">Causes</Link>
          <Link to="connect">Connect</Link>
          <Link to="transactions">Transactions</Link>
        </div>
        <Outlet/>
       </div>
    )
}