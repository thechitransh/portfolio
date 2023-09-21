'use client'
import React from 'react'
import Image from 'next/image'
import img from "@/public/res.png"
import style from "./page.module.css"
import icon from "@/public/icon.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function page() {
  const notify = () =>{
    toast.success('Downloaded', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
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
        onClick={notify}
        />
        </a>
        <ToastContainer/>
        </div>
    </div>
  )
}
export default page