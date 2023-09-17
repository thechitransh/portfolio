import React from 'react'
import Image from 'next/image'
import img from "@/public/res.png"
import style from "./page.module.css"
import icon from "@/public/icon.svg"

function page() {
  return (
    <div>
        <Image
        className={style.img}
        src={img}
        width={500}
        height={700}
        />
        <div className={style.text}>
        <h5>Download Resume</h5>
        <a href="/Chitransh-Resume.pdf" download="Chitransh-Resume">
        <Image
        src={icon}
        width={60}
        height={60}
        />
        </a>
        </div>
    </div>
  )
}
export default page