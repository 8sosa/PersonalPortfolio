import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row} from 'react-bootstrap';

import style from './index.module.css'
import Picolo from './Images/picolo.jpeg'
import Planet from './Images/planet.jpeg'


export default function Me() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.heroSection}>
                <p className={style.projTxt}>GIVING BRANDS A FIGHTING CHANCE IN THIS DIGITAL AGE.</p>
                <img src={Planet} alt='placeholder hero' className={style.planet}/>
            </section>
            <section>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div class={style.paragraph}>
                            <p class={style.paragraphTxt}>
                                world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first. world with tailor-made solutions.
                                <br/>
                                <br/>
                                <span class={style.purple}>Always exploring...</span>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <img src={Picolo} alt='placeholder hero' className={style.mePic}/>
                    </Col>
                </Row>
            </section>
            <section className='d-flex flex-column' class={style.section}>
                <h1 class={style.sectionHeader}>w<span class={style.green}>h</span>a<span class={style.orangishColor}>t</span> i <span class={style.bluishColor}>d</span>o</h1>
                <Row className='mb-5'>
                    <Col>
                        <h1 class={style.sectionTxt1}>i</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>design</h1>
                        <p class={style.sectionTxt3}>Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Picolo} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <h1 class={style.sectionTxt1}>ii</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>development</h1>
                        <p class={style.sectionTxt3}>Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Picolo} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <h1 class={style.sectionTxt1}>iii</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>the morales</h1>
                        <p class={style.sectionTxt3}>Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’ Armed with an ‘ appearance is everything’</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Picolo} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
            </section>
            <section class={style.section}>
                <h1 class={style.sectionHeader}><span class={style.orangishColor}>s</span>k<span class={style.green}>i</span>l<span class={style.bluishColor}>l</span>s</h1>
                <div className='d-flex justify-content-center'>
                    <Row sm={3} md={3} lg={3} className={style.skills}>
                        <Col>
                            <div class={style.jsPill} >
                                <h1 class={style.skillPillTxt}>js</h1>
                            </div>
                        </Col>
                        <Col>
                            <div class={style.mongoPill} >
                                <h1 class={style.skillPillTxt}>MONGO DB</h1>
                            </div>
                        </Col>
                        <Col>
                            <div class={style.htmlPill} >
                                <h1 class={style.skillPillTxt}>HTML</h1>
                            </div>
                        </Col>
                        <Col>
                            <div class={style.cssPill} >
                                <h1 class={style.skillPillTxt}>CSS</h1>
                            </div>
                        </Col>
                        <Col>
                            <div class={style.reactPill} >
                                <h1 class={style.skillPillTxt}>REACT JS</h1>
                            </div>
                        </Col>
                        <Col>
                            <div class={style.nodePill} >
                                <h1 class={style.skillPillTxt}>NODE JS</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    </>
  )
}