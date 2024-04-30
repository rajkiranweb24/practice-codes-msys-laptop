import React from 'react'
import { useEffect } from 'react'

const PromiseExample = () => {
    const PromiseFunction=()=>{

        const Friend= new Promise((resolve,reject)=>{

            let isChocolate=false

            if(isChocolate){
                resolve("Promise Resolved")
            }else{
                reject("Promise Rejected")
            }

        })

        Friend.then((resolve)=>{
            console.log(resolve)
        }).catch((err)=>{
            console.log(err)
        })

    }
    useEffect(()=>{
        PromiseFunction()

    },[])
  return (
    <div>PromiseExample</div>
  )
}

export default PromiseExample