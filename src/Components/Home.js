import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row} from 'react-bootstrap';
import Projects from './Projects.json'
// Media
import style from './index.module.css';
import Me from './Images/me/me.PNG';



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
                    {Projects.map((project, index) => (
                        <a href={project.link} key={index}>
                            <Row className={style.project}>
                                <Col className='d-flex justify-content-center'>
                                    <div className={style.hoverContainer}>
                                        <div className={style.background}>
                                            <img src={require(`../Components/Images/projects/${project.projectImg}`)} alt={project.projectName} className={style.projectImage}/>
                                            <video src={require(`../Components/Images/projects/${project.projectVid}`)} alt={project.projectName} className={style.video} loop muted autoPlay playsInline />
                                        </div>
                                    </div>   
                                </Col>
                                <Col className={style.projectAttribute}>
                                    <h1 className={style.Txt2}>{project.projectName}</h1>
                                    <h1 className={style.Txt3}>{project.job}</h1>
                                    <a href={project.projectLink} className={style.Txt4} target="_blank" rel="noreferrer">Visit {project.projectName}</a>
                                </Col>
                            </Row>
                        </a> 
                    ))}
                </div>
            </section>
        </Container>
    </>
  )
}