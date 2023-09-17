"use client"
import React from 'react'
import styles from "./Box.module.css"


function Box(props ) {
  return (
    <div className={styles.box} style={props.color}>
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
    <p>{props.text2}</p>
    <p>{props.text3}</p>
    </div>
  )
}

export default Box