import React from 'react'
import { useState } from 'react'
import IpAddressComponent from './IpAddressComponent'

//port, nodename,ip

const FormComponent = () => {
    const [Data,setData]=useState([])

    const [typing,setTyping]=useState(false)

    const [counter,setCounter]=useState(0)
    const [portname, setPortname] = useState("")
    const [nodename, setNodename] = useState("")
    const [ipaddress, setIpaddress] = useState("")

    function handlePortName(e) {
        setPortname(e.target.value)
        console.log(portname)
    }
    function handleNodename(e) {
        setNodename(e.target.value)
        console.log(portname)
    }

    function handleIpAddress(e) {
        setIpaddress(e.target.value)
        console.log(portname)
    }

    function onHandleSubmit(e) {
        e.preventDefault()
        setData([portname,nodename,ipaddress])
        setCounter((prevCount)=>{
            return prevCount+1

        })

        console.log(counter)

        console.log(Data)

    }

    function onHandlePortNumber(e){
        setPortname(e.target.value)
        setTyping(true)

    }


    return (
         <>

        
<div>


<form onSubmit={onHandleSubmit}>

   
    


    <div>
        <label>PortNumber</label>
        <input type="text" placeholder='portname' name="portnumber" value={portname} onChange={onHandlePortNumber} />
    </div>

    {
        typing?<div>typing...</div>:null
    }
    <div>
        <label>nodename</label>
        <input type="text" placeholder='Enter Nodename' name="nodename" value={nodename} onChange={(e) => { setNodename(e.target.value) }} />

    </div>
    <div>
        <label>Ip Address</label>
        <input type="text" placeholder='enter Ip Address' name="ipaddress" value={ipaddress} onChange={(e) => setIpaddress(e.target.value)} />

    </div>




    <button type='submit'>Submit</button>
</form>




</div>
         </>

       
    )



}

export default FormComponent