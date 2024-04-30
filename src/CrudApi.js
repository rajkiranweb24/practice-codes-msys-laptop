 import React, { useEffect,useState } from 'react'
 import axios from 'axios'
const CrudApi = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const postData = () => {
        axios.post('https://6623bfbf3e17a3ac84701893.mockapi.io/users', {
            name: name,
            age: 25,
            hobbies: ["cricket", "poetry", "Dancing"]
        })
        .then((res) => {
            console.log(res);
            GetData(); // Refresh user data after successful post
        })
        .catch(err => setError(err.message));
    };

    const GetData = () => {
        axios.get("https://6623bfbf3e17a3ac84701893.mockapi.io/users")
        .then((res) => {
            console.log(res.data);
            setUsers(res.data);
        })
        .catch(err => setError(err.message));
    };

    useEffect(() => {
        GetData();
    }, []);

    const handleUpdate = (id) => {
        axios.put(`https://6623bfbf3e17a3ac84701893.mockapi.io/users/${id}`, {
            name: name,
            age: 18,
            hobbies: ["cricket", "poetry", "plucking"]
        })
        .then((res) => {
            console.log(res);
            GetData(); // Refresh user data after successful update
        })
        .catch(err => setError(err.message));
    };

    const handleDelete = (id) => {
        axios.delete(`https://6623bfbf3e17a3ac84701893.mockapi.io/users/${id}`)
        .then((res) => {
            console.log(res.data);
            GetData(); // Refresh user data after successful delete
        })
        .catch(err => setError(err.message));
    };

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={postData}>Post</button>
            {error && <p>{error}</p>}
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <button onClick={() => handleUpdate(user.id)}>Update</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CrudApi;



// import React, { useEffect } from 'react'
// import axios from 'axios'

// const CrudApi = () => {
//     const [name,setName]=React.useState('')
//     const [users,setUsers]=React.useState([])
//     const postData=()=>{
//         axios.post('https://6623bfbf3e17a3ac84701893.mockapi.io/users',{
//             name:name,
//             age:25,
//             hobbies:["cricket","poetry","Dancing"]
//         }).then((res)=>{
//             console.log(res)
//             setUsers(res.data)
//         }).catch(err=>{
//             console.log(err.message)
//         })

//     }

//     function GetData(){
//         axios.get("https://6623bfbf3e17a3ac84701893.mockapi.io/users")
//         .then((res)=>{
//             console.log(res.data)
//             setUsers(res.data)
//         }).catch(err=>{
//             console.log(err.message)
//         })
//     }

//     useEffect(()=>{
//         GetData()
       

//     },[])

//     function handleUpdate(id){
//        axios.put(`https://6623bfbf3e17a3ac84701893.mockapi.io/users/${id}`,{
//         name:name,
//             age:18,
//             hobbies:["cricket","poetry","plucking"]

//        }).then((res)=>{
//         console.log(res)
//         GetData()
//     }).catch(err=>{
//         console.log(err.message)
//     })
//     }

//     function HandleDelete(id){
//         axios.delete(`https://6623bfbf3e17a3ac84701893.mockapi.io/users/${id}`)
//         .then((res)=>{
//             console.log(res.data)
//             setUsers(res.data)
//         }).catch(err=>{
//             console.log(err.message)
//         })

//     }
//   return (
//     <div>
//         <input type="text" onChange={(e)=>setName(e.target.value)}/>
//         <button onClick={postData}>Post</button>
//         {
           
//             users.map((user)=>{
//                 console.log("users",users)
//                 return(
//                     <div  key={user.id}>
//                     <h2 >{user.name}</h2>
//                     <button onClick={()=>handleUpdate(user.id)}>update</button>
//                     <button onClick={()=>HandleDelete(user.id)}>Delete</button>
                    
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default CrudApi