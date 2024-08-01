import React from 'react'
import { GradientBorder } from '../common/GradientBorder';


import styles from "./style.module.css";

const Hero = () => {

    return (
        <div className={styles.herogrid}>


            <div className={styles.gradientText}>
                Hi. I&apos;m Parth.
                <span style={{ display: "block" }}>
                    A Full-Stack Developer.
                </span>
            </div>


            <GradientBorder>
                <img src="/parth.png" className={styles.parthimg} alt="" srcset="" />
            </GradientBorder>
        </div >
    )
}

export { Hero }