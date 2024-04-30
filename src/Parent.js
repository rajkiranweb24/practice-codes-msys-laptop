import React from 'react'
import Child from './Child'
import {useState} from 'react'

const Parent = () => {
  const [name,setName]=useState("KIRAN")
 // console.log(props)
  ///const {name}=props
  function chnageName(value){
    setName(value)

  }
   //passing function as a prop
    //const obj="KIRAN"
  return (
    <div>
        <Child  name={name} chnageName={chnageName}/>
      <h1>{name}</h1>
    </div>
  )
}

export default Parent