"use client";
import React from "react";
import Image from "next/image";
import img from "../public/pic.jpeg";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";
import Box from "@/components/Box";
import Link from "next/link";
function page() {
  return (
    <>
      <div className={styles.header}>
        <Image className={styles.image} src={img} width={250} height={250} />
        <h1>Chitransh Srivastava....</h1>
        <h2>Front-End Devloper</h2>
        <p>
          To work an environment which encourage me to succeed and grow
          professionally where i can utilize my skills and knowledge
          appropriately
        </p>
        <Box
          heading="Technologies"
          text="I am familiar with HTML5, CSS, Git, JavaScript, NodeJS, ReactJS, NextJs, WorldPress, Bootstarp and Web Hosting"
        />
        <div className={styles.Projects}>
          <h3>Projects</h3>
          <p>
            I like to shocase my work and you can see my projects hosted online
          </p>
          <Link href="/Projects"><Button variant="primary">BROWSE PROJECTS</Button>{" "}</Link>
        </div>
        <Box
        heading="Achievements"
          text="Co-Ordinator in college fest TATVA"
          text2="Promotion member of hackathon, RKGIT"
          text3="Chess district level player"
        />
      </div>
    </>
  );
}

export default page;
