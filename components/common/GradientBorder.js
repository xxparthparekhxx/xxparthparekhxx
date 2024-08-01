import React,{useState} from 'react'
import styles from "./styles.module.css";

export const GradientBorder = (props,spinny) => {
  const [digg, setdigg] = useState(210)
  setTimeout(() => {
    if (digg < 360){
      setdigg( digg+10)
    }else {
      setdigg(0)
    }
  }, 60);
  
  return (
    spinny? 
    <div style={{
      /* border: double 1em transparent; */
      borderRadius: "4px",
      backgroundImage: "linear-gradient("+digg+"deg,#0d0208 30%,#003b00 50%,#008f11 70%,#4ade80 94%)",
      height:"max-content",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box"
    }}>{props.children}</div>
    
    :
    <div className={styles.gradientBorder}>{props.children}</div>
  )
}
