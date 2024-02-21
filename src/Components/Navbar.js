import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

import style from './index.module.css'


export default function NavBar() {
  return (
    <>
      <Navbar expand="md" className={style.navbar}>
        <Container fluid>
            <Navbar.Brand href="/">
                <h1 className={style.logo}>SOSA</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav' className={style.navLinks}>
                <Nav>
                    <Nav.Link href='/works'>
                        <h1 className={style.link}>projects</h1>
                    </Nav.Link>
                    <Nav.Link href='/about-me'>
                        <h1 className={style.link}>me?</h1>
                    </Nav.Link>
                    <Nav.Link href='/contact-me'>
                        <h1 className={style.link}>reach out</h1>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
