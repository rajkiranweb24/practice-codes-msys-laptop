import React from 'react'

const HandleEvents = () => {
    function handleChnage(e){
        console.log(e.target.name)

    }
    function handleClick(num1,num2){
        console.log(num1+num2)
    }
  return (
    <div>
        <button onClick={()=>handleClick(1, 5)}>Click</button>
        <input type="text" placeholder='enter' onChange={handleChnage} name="kiran"/>
    </div>
  )
}

export default HandleEvents