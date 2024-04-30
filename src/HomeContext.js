import React from 'react'
import { UserContext } from './Context/GlobalContext'
import { useContext } from 'react'

const HomeContext = () => {
    const {setName}=useContext(UserContext)
  return (
    <div>
        <button onClick={()=>setName("Chnaged the name successfully")}>change Name</button>
    </div>
  )
}

export default HomeContext