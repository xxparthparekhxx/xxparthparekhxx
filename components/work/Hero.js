import React from 'react'
import { flex } from '../../styles/flex'
import useWindowDimensions from '../../utils/WindowDimensions.';
import Eye from '../eye/eye';
import styles  from  "./styles.module.css";

const Hero = () => {
    
    return (
        <div style={{
                ...flex(  "row" ) ,
                justifyContent:"center",
                width:"100vw",
                      
        }}>
            <div className={styles.gradientText}>

                Hi. I&apos;m Parth.
                <span style={{ display: "block" }}>

                    A Full-Stack Developer.
                </span>
            </div>
            <div className={styles.eyebox}>
                <Eye></Eye>
            </div>
        </div>
    )
}

export default Hero