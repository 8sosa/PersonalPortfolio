import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import style from './index.module.css'
import MyProjects from './Projects.json'




export default function Projects() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.whiteSection}>
                <p className={style.projTxt}>BREATHING DIGITAL <span class={style.green}>LIFE</span> INTO <span class={style.purple}>IDEAS</span>.</p>
            </section>
            <section className={style.projectSection}>
                <div className={style.projects}>
                    
                    {MyProjects.map((project, index) => (
                        <a href={`/works${project.link}`} key={index}>
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