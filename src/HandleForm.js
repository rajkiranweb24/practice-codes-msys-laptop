import React from 'react'
import {useState} from 'react'

const HandleForm = () => {
    const [data,seData]=useState({

    })
   

   
    function HandleChange(value,name){
       let info={[name]:value}

        seData({...data,...info})

    }
   // console.log(data)

    function HandleSubmit(e){
        e.preventDefault()
        console.log("submitted data",data)
       
   
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type="text" name="username" onChange={(event)=>HandleChange(event.target.value,event.target.name)}/>
            <input type="number" name="phone" onChange={(event)=>HandleChange(event.target.value,event.target.name)}/>
            <input type="text " name="addresss" onChange={(event)=>HandleChange(event.target.value,event.target.name)}/>
            <input type="date" name="date" onChange={(event)=>HandleChange(event.target.value,event.target.name)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default HandleForm