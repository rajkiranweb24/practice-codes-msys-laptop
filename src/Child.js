import React from 'react'
import {useState} from 'react'
const Child = ({name,chnageName}) => {
  const [value,setValue]=useState("taking state in child")
  
 
  return (
    <div>
       <button onClick={()=>chnageName(value)}>Change</button>
    <h1>{name}</h1>
   
    </div>
  )
}

export default Child