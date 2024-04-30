import React from 'react'
import {useState} from 'react'

const UseState = () => {
    const [city,setCity]=useState({
        cityName:"",
        id:""
    })
    const [data,setData]=useState([])
    const [editing,setEditing]=useState({
        id:'',
        isEditing:false

    })
   

    function handleCity(e){
       setCity({
        ...city,
        cityName:e.target.value
       
       })
       console.log(city)
    }
    function handleSubmit(e){
        e.preventDefault()
        let obj={
            cityName: city.cityName,
            id: new Date().getTime().toString()
        }
        console.log(obj)
         setData([...data,obj])
         setCity({cityName:"",id:""})
         console.log(data)
    }

    function handleDelete(ID){
        const filtered=data.filter((item)=>{
            return item.id !== ID
        })

        setData(filtered)

    }
    function handleEdit(id){
        setEditing({
            ...editing,
            id :id,
            isEditing:true
        })
        const findEditingObj=data.find((each)=> each.id === id)

        setCity({
            ...city,
            cityName:findEditingObj.cityName,
            id: findEditingObj.id
        })
        

    }

    function handleFinalEdit(e){
        e.preventDefault()
        console.log("prev",)

    }
    
   
    return(
 
        <>
        <form>
        <input type="text" placeholder="city" onChange={handleCity} value={city.cityName} />
        {editing.isEditing?  <button onClick={handleFinalEdit} >Edit</button>  :  <button onClick={handleSubmit}>Add</button>}
       
        </form>
        {data.length === 0 &&  <h1>No data found</h1> }
        
    
        {data.map((eachData)=>{
            return(
                <div>
                    <h1>{eachData.cityName}</h1>
                <button onClick={()=>handleDelete(eachData.id)}>delete</button>
                <button onClick={()=> handleEdit(eachData.id)}>edit</button>
                </div>
                
            )
        })}
        </>
        
    )
    
}

export default UseState



//Example3
// import React from 'react'
// import {useState} from 'react'

// const UseState = () => {
//     function onDeleteEmp(ID){
//         const filteredData=data.filter(item=>{
//             return item.id !== ID
//         })
//         setData(filteredData)
//     }
//     const tourists=[{
//         id:32,
//         name:"satish",
//         from:"UP"
//     },
//     {
//         id:22,
//         name:"prasad",
//         from:"AP"
//     },
//     {
//         id:12,
//         name:"Gopal",
//         from:"TS"
//     }]
//     const [data,setData]=useState(tourists)
//     function changeName(){
//         setData({
//             ...data,
//             name:"whatsaon"
//         })
//     }
  
//   return (
//     <div>
//         {
//             data.map((eachData)=>{
//                 return(
//                     <div key={eachData.id}>
//                          <h1>{eachData.name}</h1>
//                          <h2>{eachData.age}</h2>
//                          <button onClick={()=>onDeleteEmp(eachData.id)}>Delete</button>
//                          <h3>{eachData.from}</h3>
//                          <br/>
                         
//                     </div>
//                 )
//             })
//         }

       
//     </div>
//   )
// }

// export default UseState


//Example2
// import React from 'react'
// import {useState} from 'react'

// const UseState = () => {
//     const [data,setData]=useState({
//         name:"Emma",
//         age:23
//     })
//     function changeName(){
//         setData({
//             ...data,
//             name:"whatsaon"
//         })
//     }
  
//   return (
//     <div>
//        <div>{data.name}</div> <button onClick={changeName}>ChangeName</button>
//        <div>{data.age}</div>
//     </div>
//   )
// }

// export default UseState

//exmple1
// import React from 'react'
// import {useState} from 'react'

// const UseState = () => {
//     const [count,setCount]=useState(0)
//     const onIncrement=()=>{
//        setCount((prev)=>{
//         return prev+1
//        })
       
//     }
//     const onDencrement=()=>{
//         setCount((prev)=>{
//          return prev-1
//         })
        
//      }
  
//   return (
//     <div>
//         <button onClick={onIncrement}>+</button>
//         <p>{count}</p>
//         <button onClick={onDencrement}>-</button>
//     </div>
//   )
// }

// export default UseState