import React from 'react'
import ProfileContext from './ProfileContet'
import HomeContext from "./HomeContext"
import {UserContext} from "./Context/GlobalContext"


const ContextExample = () => {
    const [name,setName]=React.useState("Jitesh")
  return (
    <div>
        <UserContext.Provider  value={{name,setName}}>
        <ProfileContext />
        <HomeContext  />
        </UserContext.Provider>
        
    </div>
  )
}

export default ContextExample