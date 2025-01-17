import React from "react";
import  CleverYougDoctor from "./Assets/CleverYougDoctor.jpg" 
import codingBlockChain from "./Assets/codingBlockChain.jpg"
import LadyUsingBlockchain from "./Assets/LadyUsingBlockchain.jpg"
import ManUsingBlockchain from "./Assets/ManUsingBlockchain.jpg"

export default function AdminHome(){
     
    return (
        <div className=" flex flex-col space-y-4 p-4">
           <section className=" grid grid-cols-1  md:grid-cols-2 place-items-center flex-auto">
            <p className="text-center md:text-left text-lf font-semibold ">
                Ready to use Technology to bring change to the world 
                ,charity fund is here to smoothen tyour process</p>
            <img src={CleverYougDoctor} className="rounded-full  w-60 mx-auto md:mx-0"/>
           </section>
            <div className=" grid grid-cols-1  md:grid-cols-2 place-items-center"> 
              <img src={codingBlockChain}  className="  rounded-full  w-60  mx-auto md:mx-0"/>
               <p className="text-center md:text-left  font-semibold">
                Ready to use technology to create a better tomorrow,
                for the needy charity funding is here to make your day
               
               </p> 
           </div>
           
           <sector className="grid grid-cols-1  md:grid-cols-2 place-items-center flex-auto"> 
               <p className=" ext-center md:text-left text-lf font-semibold">
                Ready to elevate businesses to make a change in the world
               by helping the needy people, charity funding is here tom help you
               </p>
                <img src={LadyUsingBlockchain}  className="rounded-full  w-60 mx-auto md:mx-0"/>              
           </sector>

           <div className="grid grid-cols-1  md:grid-cols-2 place-items-center"> 
           <img src={ManUsingBlockchain}  className=" rounded-full w-72 mx-auto md:mx-0"/>
               <h4 className="text-center md:text-left text-lf font-semibold ">
                Ready to elevate businesses to make a change in the world by
                feeding the needy people, charity funding is here tom help you
           
               </h4> 
           </div>

        </div>
    )
}