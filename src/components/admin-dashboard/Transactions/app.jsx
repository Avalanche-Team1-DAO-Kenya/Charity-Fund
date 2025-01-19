import React, { useEffect, useState } from "react";
import Moralis from "moralis";

export default function MoralisTransactions(){
 let moralisBaseUrl="https://deep-index.moralis.io/api/v2.2/wallets/0xcB1C1FdE09f811B294172696404e88E658659905/history"
 let moralisApikey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNlMzc4ZDBmLWYxNGEtNGVkOC1hNjA1LTA4Y2FkZDExNGUwZSIsIm9yZ0lkIjoiNDI2NTQzIiwidXNlcklkIjoiNDM4NzM0IiwidHlwZUlkIjoiMTA1Y2U4M2YtNjdmZS00ODdmLWI4MDYtYjk2OTFhMzVmNzI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzczMDk3MDQsImV4cCI6NDg5MzA2OTcwNH0.rWecOy9jfb8-WGWiMZkKtkLzsrPGQytsValUj8wUcqg"
 useEffect(()=>{
    fetchTransactions()
 })
 const fetchTransactions=async()=>{
    const [transactons,setTransactions]=useState()
    try {
        await Moralis.start({
            apiKey:moralisApikey
        })

        const response=await Moralis.EvmApi.wallets.getWalletHistory({
            "chain":"0x1",
            "order":"DESC",
            "address":"0xcB1C1FdE09f811B294172696404e88E658659905"
        })
        const data=await response.raw()
        console.log("data fetched",data)
        setTransactions(data)
    console.log("response data returned from Moralis fetch api", response.raw())
    } catch (error) {
        
    }
 }

 return (
    <div>
        <h1>Transactions page</h1>
    </div>
 )
    
}