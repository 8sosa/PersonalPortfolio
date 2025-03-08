import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import style from './index.module.css'



export default function Project ({project}) {

    const { link } = useParams();
    const [fetchedProject, setFetchedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const [WhatWeLearntComponent, setWhatWeLearntComponent] = useState(null);

    useEffect(() => {
        if (!project) {
            fetch('/Project.json')
                .then(response => response.json())
                .then(data => {
                    const foundProject = data.find(proj => proj.link === link);
                    setFetchedProject(foundProject);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching project:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [link, project]);

    useEffect(() => {
        if (project && project.whatWeLearnt) {
            import(`./${project.whatWeLearnt}`)
                .then(module => {
                    setWhatWeLearntComponent(() => module.default);
                })
                .catch(error => {
                    console.error("Error loading component:", error);
                });
        }
    }, [project]);

    const displayedProject = project || fetchedProject;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!displayedProject) {
        return <div>Project not found</div>;
    }

    const jobTags = displayedProject.job ? displayedProject.job.split(' & ') : [];
    const toolStyles = {
        'REACT': style.reactPill,
        'HTML': style.htmlPill,
        'CSS': style.cssPill,
        'NODE JS': style.nodePill,
        'MONGO DB': style.mongoPill,
        'JS': style.jsPill
    };

  return (
    <>
        <Container className={style.page}>
            <section className={style.whiteBg}>
                <div className={style.projectHero}>
                    <Row>
                        <Col className='d-flex flex-column'>
                            <img src={require(`../Components/Images/projects/${displayedProject.projectImg}`)} alt={displayedProject.projectName} className={style.heroPic}/>
                            <a href={displayedProject.projectLink} className={style.Txt4} target="_blank" rel="noreferrer">Visit {displayedProject.projectName}</a>
                        </Col>
                        <Col className={style.heroTxtBox}>
                            <h1 className={style.heroText1}>{displayedProject.projectName}</h1>
                            <p className={style.heroText2}>{displayedProject.projectTag}</p>
                            <Row className='d-flex flex-row mt-auto'>
                                {jobTags.includes('Design') && (
                                    <Col md={'auto'}>
                                        <div className={style.tag}>design</div>
                                    </Col>
                                )}
                                {jobTags.includes('Development') && (
                                    <Col md={'auto'}>
                                        <div className={style.tag}>development</div>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className={style.projectHeaderTxt}><span className={style.lighterPurple}>{displayedProject.projectName}</span> {displayedProject.projectSell}</h1>
                    <p className={style.projectBodyTxt}><span className={style.lighterPurple}>{displayedProject.projectName}</span>{displayedProject.projectDesc}</p>
                    <p className={style.projectBodyText} dangerouslySetInnerHTML={{ __html: displayedProject.projectDesc1 }}/>                
                </div>
                {/* <div className='d-flex justify-content-center'>
                    <Row className={style.fullWidth2}>
                        <Col className='d-flex justify-content-center'>
                            <img src={require(`../Components/Images/projects/${displayedProject.projectImg}`)} alt='Project' className={style.protoPic4}/>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <img src={require(`../Components/Images/projects/${displayedProject.projectImg}`)} alt='Project' className={style.protoPic1}/>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <img src={require(`../Components/Images/projects/${displayedProject.projectImg}`)} alt='Project' className={style.protoPic2}/>
                        </Col>
                    </Row>
                </div> */}
                <div className='d-flex justify-content-center mt-5'>
                    <Row sm={3} md={3} lg={3} className={style.skills}>
                        {displayedProject.tools.map((tool, index) => (
                            <Col key={index} className='d-flex justify-content-center'>
                                <div className={toolStyles[tool]}>
                                    <h1 className={style.skillPillTxt}>{tool}</h1>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            {displayedProject.whatWeLearnt && (
                <section className={style.blackBg}>
                    {WhatWeLearntComponent ? <WhatWeLearntComponent /> : <div>Loading What We Learnt...</div>}
                </section>
            )}
            <section className={style.whiteBg}>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className={style.wwlHeaderTxt}>WHAT WE LEARNT</h1>
                    <p className={style.wwlHeadersubTxt}>{displayedProject.reflection}</p>
                    <ul className={style.uList}>
                        {displayedProject.listItems.map((item, index) => (
                        <li key={index}>
                            <p className={style.wwlTxt}>
                            <span className={style.wwlTxt1}>{" "}{item.title}</span>{" "}
                            {item.content}
                            </p>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Container>
    </>
  )
}