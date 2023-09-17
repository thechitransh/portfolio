"use client"
import Box from '@/components/Box'
import React from 'react'
import style from "./page.module.css"
import Link from 'next/link'
import Button from 'react-bootstrap/Button';

function page() {
  return (
    <div className={style.main}>
        <Box
        heading=" Contact me"
        text="Email: thechitranshsrivastava@gmail.com"
        text2="Contact Number: 8077438620"
        />
        <Link href="https://github.com/thechitransh" target="_blank"><Button variant="outline-primary" >GitHub</Button>{' '}</Link>
        <Link href="https://www.linkedin.com/in/thechitransh/" target="_blank"><Button variant="outline-primary" >Linkdin</Button>{' '}</Link>
        </div>
  )
}

export default page