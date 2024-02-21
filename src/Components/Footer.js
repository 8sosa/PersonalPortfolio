import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import style from './index.module.css'

export default function Footer() {
    const location = useLocation();

    const isContactPage = location.pathname.includes('/contact');

    if (isContactPage) {
        return null;
      }
  return (
    <>
        <div className={style.footer}>
            <div className={style.footerBox}>
                <Row className={style.footerRow}>
                    <Col>
                        <h1 className={style.footerText}>Let's Collaborate</h1>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button href='/contact-me' className={style.footerBtn}>Reach Out</Button>
                    </Col>
                </Row>
                <div className={style.whiteLine}></div>
                <Row className={style.footerRow}>
                    <Col>
                        <h1 className={style.footerBoxedText}>EAAISOSA@GMAIL.COM</h1>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <h1 className={style.footerBoxedText}>+234 9 137 000 331</h1>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}
