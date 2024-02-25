import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row} from 'react-bootstrap';

import style from './index.module.css'
import Myself from './Images/meeee.png'
import Design from './Images/des.png'
import Dev from './Images/dev.png'
import Morales from './Images/cteg.png'
import Planet from './Images/comet.png'


export default function Me() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.heroSection}>
                <p className={style.projTxt}>GIVING BRANDS A FIGHTING CHANCE IN THIS DIGITAL AGE.</p>
                <img src={Planet} alt='placeholder hero' className={style.planet}/>
            </section>
            <section>
                <Row className={style.fullWidth}>
                    <Col className='d-flex justify-content-center'>
                        <div class={style.paragraph}>
                            <p class={style.paragraphTxt}>
                                I'm a passionate and driven full-stack developer with a love for crafting meaningful digital experiences. With a foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on the dynamic interplay between design and development. From pixel-perfect UI/UX design to robust backend architecture, I bring a holistic approach to every project I undertake. My journey in web development began with a curiosity-driven exploration of code, and since then, I've honed my skills to deliver innovative solutions that exceed expectations. Beyond coding, I'm a problem solver at heart, constantly seeking new challenges and pushing the boundaries of what's possible. Let's collaborate to turn your ideas into reality and make a lasting impact in the digital realm.
                                <br/>
                                <br/>
                                <span class={style.purple}>Always exploring...</span>
                            </p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <img src={Myself} alt='placeholder hero' className={style.mePic}/>
                    </Col>
                </Row>
            </section>
            <section className='d-flex flex-column' class={style.section}>
                <h1 class={style.sectionHeader}>w<span class={style.green}>h</span>a<span class={style.orangishColor}>t</span> i <span class={style.bluishColor}>d</span>o</h1>
                <Row className={style.fullWidth2}>
                    <Col>
                        <h1 class={style.sectionTxt1}>i</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>design</h1>
                        <p class={style.sectionTxt3}>I bring your vision to life through meticulous product design. Whether you need a sleek user interface, engaging user experience, or captivating visual elements, I focus on crafting designs that resonate with your target audience. From wireframes to high-fidelity mockups, I ensure every detail is thoughtfully considered to enhance your brand identity and elevate your digital presence.</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Design} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
                <Row className={style.fullWidth2}>
                    <Col>
                        <h1 class={style.sectionTxt1}>ii</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>development</h1>
                        <p class={style.sectionTxt3}>With expertise in development, I transform design concepts into fully functional websites that drive results. Leveraging the latest technologies and best practices, I code responsive and scalable websites tailored to your specific requirements. From frontend to backend development, I handle everything seamlessly, ensuring smooth navigation, robust functionality, and optimal performance across devices. Your website isn't just a digital asset; it's a powerful tool for growth, and I'm dedicated to building it right.</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Dev} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
                <Row className={style.fullWidth2}>
                    <Col>
                        <h1 class={style.sectionTxt1}>iii</h1>
                        <div class={style.blackLine}></div>
                        <h1 class={style.sectionTxt2}>the morales</h1>
                        <p class={style.sectionTxt3}>The Morales service encapsulates the synergy of design and development, offering a comprehensive solution for your digital needs. Combining my expertise in both domains, I take your project from inception to execution with precision and flair. From conceptualizing the design aesthetic to coding the backend functionality, I ensure a cohesive and compelling online presence. With The Morales, you not only get a visually stunning website but also a seamless user experience that captivates and converts. Let's collaborate to bring your vision to life, seamlessly blending design and development for unparalleled digital success.</p>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <img src={Morales} alt='placeholder hero' className={style.servicePic}/>
                    </Col>
                </Row>
            </section>
            <section class={style.section}>
                <h1 class={style.sectionHeader}><span class={style.orangishColor}>s</span>k<span class={style.green}>i</span>l<span class={style.bluishColor}>l</span>s</h1>
                <div className='d-flex justify-content-center'>
                    <Row sm={3} md={3} lg={3} className={style.skills}>
                        <Col className='d-flex justify-content-center'>
                            <div class={style.jsPill} >
                                <h1 class={style.skillPillTxt}>js</h1>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <div class={style.mongoPill} >
                                <h1 class={style.skillPillTxt}>MONGO DB</h1>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <div class={style.htmlPill} >
                                <h1 class={style.skillPillTxt}>HTML</h1>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <div class={style.cssPill} >
                                <h1 class={style.skillPillTxt}>CSS</h1>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <div class={style.reactPill} >
                                <h1 class={style.skillPillTxt}>REACT JS</h1>
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
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