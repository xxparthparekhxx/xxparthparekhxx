import React from 'react'
import { flex } from '../../styles/flex'

const Hero = () => {
    return (
        <div style={{
                ...flex("row") ,
                justifyContent:"center",
                width:"100vw",
                      
        }}>
            <div style={{
                color: "#fff",
                background: "linear-gradient(271deg,#a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%)",
                backgroundClip: "border-box",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "font-size": "6.5em",
                fontFamily: "Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif"
            }}>

                Hi. I&apos;m Parth.
                <span style={{ display: "block" }}>

                    A Full-Stack Developer.
                </span>
            </div>
            <div style={{
                  "height": "555px",
                  "max-width": "555px",
                  width: "555px",
                  "background": "#191919"
            }}>
                
            </div>
        </div>
    )
}

export default Hero