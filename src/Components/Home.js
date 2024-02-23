import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row} from 'react-bootstrap';

import style from './index.module.css';
import Me from './Images/me.png';
import Steezed from './Images/steezedlogo.png';
import SteezedVid from './Videos/2vid.mp4';
import Stickup from './Images/stickuplogo.png';
import StickupVid from './Videos/home.mp4';


export default function Home() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.hero}>
                <h1 className={style.heroTxt1}>full stack</h1>
                <h1 className={style.heroTxt2}>Developer.</h1>
                <h1 className={style.heroTxt3}>amos emmanuel</h1>
                <img src={Me} alt='me' className={style.me}/>
            </section>
            <section className={style.meSection}>
                <Row className='d-flex flex-row justify-content-space-between'>
                    <Col xs={7}>
                        <h1 className={style.meText1}>Facilitating brands to distinguish themselves in the digital age. Setting a fresh status quo collaboratively.</h1>
                    </Col>
                    <Col xs={4}>
                        <div className='d-flex flex-column align-items-center'>
                            <h1 className={style.meText2}>A passionate MERN stack full stack developer with a flair for innovative solutions and continuous learning.</h1>
                            <a href='/about-me'><Button className={style.meBtn}>about me.</Button></a>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className={style.projectSection}>
                <h1 className={style.Txt1}>Recent Works</h1>
                <div className={style.projects}>
                <a href='/steezed'>
                    <Row className={style.project}>
                        <Col className='d-flex justify-content-center'>
                            <div className={style.hoverContainer}>
                                <div className={style.background}>
                                    <img src={Steezed} alt='project Steezed' className={style.projectImage}/>
                                    <video src={SteezedVid} alt="project Steezed Background Video" className={style.video} loop muted autoPlay playsInline />
                                </div>
                            </div>   
                        </Col>
                        <Col className={style.projectAttribute}>
                            <h1 className={style.Txt2}>steezed</h1>
                            <h1 className={style.Txt3}>design & development</h1>
                            <a href='https://stezzed.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STEEZED</a>
                        </Col>
                    </Row>
                </a> 
                <a href='/Stick-up'>
                    <Row className={style.project}>
                        <Col className='d-flex justify-content-center'>
                            <div className={style.hoverContainer}>
                                <div className={style.background}>
                                    <img src={Stickup} alt='project Stickup' className={style.projectImage}/>
                                    <video src={StickupVid} alt="project Stickup Background Video" className={style.video} loop muted autoPlay playsInline />
                                </div>
                            </div>   
                        </Col>
                        <Col className={style.projectAttribute}>
                            <h1 className={style.Txt2}>STICK UP</h1>
                            <h1 className={style.Txt3}>design & development</h1>
                            <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                        </Col>
                    </Row>
                </a> 
                </div>
            </section>
        </Container>
    </>
  )
}