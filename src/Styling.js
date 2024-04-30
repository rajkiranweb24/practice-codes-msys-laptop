import React from 'react'
//inline
//internal
//external

import './styling.css'
const Styling = () => {
    const [toggle,setToggle]=React.useState(false)

    const styles={
        internal:{
            color:"red",
        
        },
        dark:{
            backgroundColor:"black",
            color:"white"
        },
        light:{
           
                backgroundColor:"white",
                color:"black"
            
        }
    }
  return (
    <div style={toggle? styles.dark:styles.light}>
        <h1 style={styles.internal}>Internal styles</h1>
        <h1 style={{color:"green"}}>Inline styles</h1>
        <h1 className='cap'>External Styles</h1>
        <button onClick={()=>{setToggle(!toggle)}}>Theme</button>
    </div>
  )
}

export default Styling