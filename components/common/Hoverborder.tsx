import React, { useState } from 'react'

function Hoverborder(props:any) {
    const [beingHovered, setbeingHovered] = useState(false)
    let bs
    if (beingHovered){
        bs  ="0px 0px 5px #00ff41"
    }else{
        bs = "0px 0px 15px #00ff41"
    }
    
  return (

    <div
    onMouseEnter={(e)=>{
        console.log("enter")
        setbeingHovered(true)
    }}
    onMouseLeave={(e)=>{
        setbeingHovered(false)
    }}
    style={{
        boxShadow: bs,
        transition: "box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    }}
    >
        {props.children}
    </div>
  )
}

export default Hoverborder