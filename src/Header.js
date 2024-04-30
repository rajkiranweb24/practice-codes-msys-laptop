import React from 'react'
import "./index.css"
import {useState} from 'react'
const Header = () => {
    const [toggle,setToggle]=useState(true)
    function onModeChange(){
        setToggle(!toggle)
        console.log("toggle",toggle)

    }
 
  return (
    <div className={toggle? "dark-mode":"day-mode"}>
        <h1 className={toggle? "dark-mode":"day-mode"}>Logo</h1>
      {toggle ? <p  onClick={onModeChange}>Dark Mode</p>: <p  onClick={onModeChange}  >DayMode</p>}  
            <li className='list-container'>
              <ul style={{color:"white",padding:"3px",margin :"2px"}} >Posts</ul>
              <ul style={{color:"white",padding:"3px",margin :"2px"}}>About</ul>
              <ul style={{color:"white",padding:"3px",margin :"2px"}}>contact</ul>
              <ul style={{ color:"white",padding:"3px",margin :"2px"}}>getInTouch</ul>
            </li>

          
    </div>
  )
}

export default Header
