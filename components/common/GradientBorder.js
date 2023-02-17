import React from 'react'
import styles from "./styles.module.css";

export const GradientBorder = (props) => {
  return (
    <div className={styles.gradientBorder}>{props.children}</div>
  )
}
