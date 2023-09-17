"use client"
import React from 'react'
import styles from "./NavBar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function NavBar() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark" className={styles.head}>
        <Container>
          <strong><Navbar.Brand>Portfolio</Navbar.Brand></strong>
          <div>
          <Nav className={`justify-content-end" ${styles.links}`} >
          <Link href="/">Home</Link>
           <Link href="/Projects">Project</Link>
           <Link href="/Resume">Resume</Link>
           <Link href="/Contact">Contact me</Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar