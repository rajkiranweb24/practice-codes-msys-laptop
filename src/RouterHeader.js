import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styling.css"
import { useNavigate } from 'react-router-dom'
const RouterHeader = () => {
    const navigate=useNavigate()
    function HandleGoToBack(){
        navigate('/')

    }
  return (
    <div>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">about</NavLink>
            <button onClick={HandleGoToBack}>Go to back</button>
            
        </ul>
    </div>
  )
}

export default RouterHeader