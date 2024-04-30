import React from 'react'

const Counter = () => {
    const [value,setValue]=React.useState(0)
    const [amount,setAmount]=React.useState()
    function HandleIncrement(){
        console.log("cliecked",value+1)
        setValue(value+1)
    }
    function HandleDecrement(){
        console.log("cliecked",value+1)
        setValue(value-1)
    }
    function HandleReset(){
        setValue(0)
    }
    function HldeSetAmount(){
       setValue(value+(+amount))
    }
  return (
    <>
     <div>Counter</div>
     <span>{value}</span>
     <button onClick={HandleIncrement} >+</button>
     <button onClick={HandleDecrement}>-</button>
     <button onClick={HandleReset}>Reset</button>
     <input type="text"  onChange={(e)=>setAmount(e.target.value)} />
     <button onClick={HldeSetAmount}>Increment by amount</button>
    </>
   
  )
}

export default Counter