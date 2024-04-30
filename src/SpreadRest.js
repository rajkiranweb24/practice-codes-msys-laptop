import React from 'react'

const SpreadRest = () => {

    function sum(...rest){
        // console.log(x)
        // console.log(y)
        console.log(rest)
    }
    sum(1,2,344,55,34,22,33,99)
    let object={
        name:"Kiran",
        age:26
    }

    let object2={
        ...object,

       city:"hyd"
    }
    //let result={...object }
    console.log(object2)
  return (
    <div>SpreadRest</div>
  )
}

export default SpreadRest