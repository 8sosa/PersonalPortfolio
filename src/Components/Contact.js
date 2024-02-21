import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import style from './index.module.css'
import Picolo from './Images/picolo.jpeg'
import { PiPaperPlaneRightThin } from "react-icons/pi";


export default function Contact (){
  return (
    <>
        <Container className={style.blackBg}>
            <section className={style.projectSection}>
                <Row className={style.contactHero}>
                    <Col className={style.contactTxtBox}>
                        <h1 className={style.contactTxt1}>Let’s Make Wonders Happen</h1>
                        <h1 className={style.contactTxt2}>contact details</h1>
                        <h1 className={style.contactTxt3}>Eaaisosa@gmail.com</h1>
                        <h1 className={style.contactTxt3}>+ 234 91 37 000 331</h1>
                    </Col>
                    <Col xs={'auto'} className={style.contactPicBox}><img src={Picolo} alt='me' className={style.contactPic}/></Col>
                </Row>
            </section>
            <section className={style.reachOutSection}>
                <h1 className={style.reachOutSectionHeader}>reach out</h1>
                <Form className='d-flex flex-column align-items-center'>
                    <ol className={style.list}>
                        <li className={style.input}>
                            <Form.Label htmlFor="name1" className={style.inputLabel}>Your Name?</Form.Label>
                            <Form.Control
                                type="text"
                                id="name1"
                                placeholder='Amos Emmanuel *'
                                aria-describedby="inputName"
                                className={style.inputField}
                            />
                        </li>
                        <li className={style.input}>
                            <Form.Label htmlFor="email1" className={style.inputLabel}>Your Email?</Form.Label>
                            <Form.Control
                                type="email"
                                id="email1"
                                placeholder='eaaisosa@gmail.com *'
                                aria-describedby="inputEmail"
                                className={style.inputField}
                            />
                        </li>
                        <li className={style.input}>
                            <Form.Label htmlFor="organization" className={style.inputLabel}>The name of your organization or company?</Form.Label>
                            <Form.Control
                                type="text"
                                id="organization"
                                placeholder='Sosa Inc'
                                aria-describedby="inputOrganization"
                                className={style.inputField}
                            />
                        </li>
                        <li className={style.input}>
                            <Form.Label htmlFor="service" className={style.inputLabel}>What services are you looking for?</Form.Label>
                            <Form.Control
                                type="text"
                                id="service"
                                placeholder='web design, web development ...'
                                aria-describedby="inputService"
                                className={style.inputField}
                            />
                        </li>
                        <li className={style.input}>
                            <Form.Label htmlFor="message" className={style.inputLabel}>your message?</Form.Label>
                            <Form.Control
                                type="text"
                                id="message"
                                placeholder='Hello Sosa, i would like a ...'
                                aria-describedby="inputMessage"
                                className={style.inputField}
                            />
                        </li>
                    </ol>
                        <Button className={style.sendBtn}>send message <PiPaperPlaneRightThin /></Button>
                </Form>
            </section>
        </Container>
    </>
    )
}
