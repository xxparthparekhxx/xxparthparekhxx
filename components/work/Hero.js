import React from 'react'
import { flex } from '../../styles/flex'
import Eye from '../eye/eye';

import styles from "./styles.module.css";

const Hero = () => {

    return (
        <div className={styles.herogrid}>
            <div className={styles.gradientText}>

                Hi. I&apos;m Parth.
                <span style={{ display: "block" }}>

                    A Full-Stack Developer.
                </span>
            </div>
      
        </div >
    )
}

export default Hero