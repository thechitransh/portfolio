"use client"
import Box from '@/components/Box'
import React from 'react'
import styles from "./page.module.css"
import Button from 'react-bootstrap/Button';
import Link from 'next/link';


function page() {
  return (
    <div className={styles.header}>
        <h1>See My Code</h1>
        <Box
        heading= {<Link href="https://weather-app.cyclic.app/"target="_blank">Weather Website</Link>}
        text="September 2022"
        text2="A website which help user to find the weather of different cities and countries"
        />
        <Link href="https://github.com/thechitransh/weather" target="_blank"><Button variant="outline-primary">View Source</Button>{' '}</Link>
        <Box
        color={{backgroundColor: "white"}}
        heading ={<Link href="https://thechitransh.github.io/gym-website/"target="_blank">Gym Landing Page</Link>}
        text="November 2022"
        text2="A landing page which can help gym owners to collect the data of there potential cutomers"
        />
       <Link href="https://github.com/thechitransh/gym-website" target="_blank"><Button variant="outline-primary">View Source</Button>{' '}</Link> 
        <Box
        heading ={<Link href="https://my1expense.netlify.app/"target="_blank">Expence Tracker</Link>}
        text="December 2022"
        text2="A website which help user to track there expences"
        />
        <Link href="https://github.com/thechitransh/personal-expeces/blob/master/index.html" target="_blank"><Button variant="outline-primary" >View Source</Button>{' '}</Link>
    </div>
  )
}

export default page