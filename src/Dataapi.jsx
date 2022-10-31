import React, { useEffect, useState } from "react";
import AllData from "./AllData";

export default function Dataapi(){

const[details,setdetails]=useState([])


async function getdetails(){

var rawdata=await fetch("https://jsonplaceholder.typicode.com/posts")

var data=await rawdata.json()

setdetails(data)

}

useEffect(()=>{getdetails()})



return(

    <>
    
   
    <div className='container'>
    <div className='row'>
    
    {
        details.map((item,index)=>{
    return <AllData

        title={item.title}
        body={item.body}
        
       />
    
        })
    }
    

</div>
</div>

</>




)






}

