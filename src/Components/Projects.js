import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Nav, Tab} from 'react-bootstrap';

import style from './index.module.css'
import Picolo from './Images/picolo.jpeg'
import Vid from './Videos/vid.mp4'



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
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
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
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </Container>
    </>
  )
}