import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row} from 'react-bootstrap';

import style from './index.module.css'
import Me from './Images/me.png'
import Picolo from './Images/picolo.jpeg'
import Vid from './Videos/vid.mp4'


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
                <Row className='d-flex justify-content-space-between'>
                    <Col xs={7}>
                        <div>
                            <h1 className={style.meText1}>Facilitating brands to distinguish themselves in the digital age. Setting a fresh status quo collaboratively.</h1>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className='d-flex flex-column align-items-center'>
                            <h1 className={style.meText2}>A passionate MERN stack full stack developer with a flair for innovative solutions and continuous learning.</h1>
                            <Button className={style.meBtn}>about me.</Button>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className={style.projectSection}>
                <h1 className={style.Txt1}>Recent Works</h1>
                <div className={style.projects}>
                    <a href='/work1'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Picolo} alt='project' className={style.projectImage}/>
                                                <video src={Vid} alt="Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                    </Col>
                                </Row>
                            </a> 
                    <a href='/work1'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Picolo} alt='project' className={style.projectImage}/>
                                                <video src={Vid} alt="Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                    </Col>
                                </Row>
                            </a> 
                </div>
            </section>
        </Container>
    </>
  )
}