import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Nav, Tab} from 'react-bootstrap';

import style from './index.module.css'
import Steezed from './Images/steezedlogo.png'
import SteezedVid from './Videos/2vid.mp4'
import Stickup from './Images/stickuplogo.png';
import StickupVid from './Videos/home.mp4';



export default function Projects() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.whiteSection}>
                <p className={style.projTxt}>
                    BREATHING DIGITAL <span class={style.green}>LIFE</span> INTO <span class={style.purple}>IDEAS</span>.
                </p>
            </section>
            <section className={style.projectSection}>
                <div className={style.projects}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="first">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className={style.navLink}>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className={style.navLink}>design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className={style.navLink}>development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" className={style.navLink}>the morales</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <a href='/steezed'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Steezed} alt='project Steezed' className={style.projectImage}/>
                                                <video src={SteezedVid} alt="project Steezed Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stezzed.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STEEZED</a>
                                    </Col>
                                </Row>
                            </a> 
                            <a href='/Stick-up'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Stickup} alt='project Stickup' className={style.projectImage}/>
                                                <video src={StickupVid} alt="project Stickup Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>STICK UP</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                                    </Col>
                                </Row>
                            </a> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <a href='/steezed'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Steezed} alt='project Steezed' className={style.projectImage}/>
                                                <video src={SteezedVid} alt="project Steezed Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stezzed.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STEEZED</a>
                                    </Col>
                                </Row>
                            </a> 
                            <a href='/Stick-up'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Stickup} alt='project Stickup' className={style.projectImage}/>
                                                <video src={StickupVid} alt="project Stickup Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>STICK UP</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                                    </Col>
                                </Row>
                            </a> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <a href='/steezed'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Steezed} alt='project Steezed' className={style.projectImage}/>
                                                <video src={SteezedVid} alt="project Steezed Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stezzed.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STEEZED</a>
                                    </Col>
                                </Row>
                            </a> 
                            <a href='/Stick-up'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Stickup} alt='project Stickup' className={style.projectImage}/>
                                                <video src={StickupVid} alt="project Stickup Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>STICK UP</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                                    </Col>
                                </Row>
                            </a> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <a href='/steezed'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Steezed} alt='project Steezed' className={style.projectImage}/>
                                                <video src={SteezedVid} alt="project Steezed Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>steezed</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stezzed.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STEEZED</a>
                                    </Col>
                                </Row>
                            </a> 
                            <a href='/Stick-up'>
                                <Row className={style.project}>
                                    <Col>
                                        <div className={style.hoverContainer}>
                                            <div className={style.background}>
                                                <img src={Stickup} alt='project Stickup' className={style.projectImage}/>
                                                <video src={StickupVid} alt="project Stickup Background Video" className={style.video} loop muted autoPlay playsInline />
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col className='d-flex flex-column align-items-end'>
                                        <h1 className={style.Txt2}>STICK UP</h1>
                                        <h1 className={style.Txt3}>design & development</h1>
                                        <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                                    </Col>
                                </Row>
                            </a> 
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </Container>
    </>
  )
}