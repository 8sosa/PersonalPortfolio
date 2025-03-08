import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import style from './index.module.css';

import StickupPic from './Images/projects/stickuplogo.png';
import Laptop from './Images/projects/stickuplogo.png';
import Tablet from './Images/projects/stickuplogo.png';
import Mob from './Images/projects/stickuplogo.png';
import CFold from './Images/projects/stickuplogo.png';
import CFoldVid from './Videos/vid.mp4';
import CNote from './Images/projects/stickuplogo.png';
import CNoteVid from './Videos/vid.mp4';
import Login from './Images/projects/stickuplogo.png';
import LoginVid from './Videos/vid.mp4';
import Navi from './Videos/vid.mp4'


export default function Stickup() {
    return (
        <>
            <Container className={style.page}>
                <section className={style.whiteBg}>
                    <div className={style.projectHero}>
                        <Row>
                            <Col className='d-flex flex-column'>
                                <img src={StickupPic} alt='project' className={style.heroPic}/>
                                <a href='https://stick-up.onrender.com' className={style.Txt4} target="_blank" rel="noreferrer">Visit STICK UP</a>
                            </Col>
                            <Col className={style.heroTxtBox}>
                                <h1 className={style.heroText1}>STICK UP</h1>
                                <p className={style.heroText2}>A note making app with organization functionality for you to store your secrets... or any other thing you want.</p>
                                <Row className='d-flex flex-row mt-auto'>
                                    <Col md={'auto'}>
                                        <div className={style.tag}>design</div>
                                    </Col>
                                    <Col md={'auto'}>
                                        <div className={style.tag}>development</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className={style.projectHeaderTxt}><span className={style.lighterPurple}>Stick Up</span> </h1>
                        <p className={style.projectBodyTxt}>Get ready to experience a new level of note organization with <span className={style.lighterPurple}>Stick Up</span>. From seamless user registration to a user-friendly interface, <span className={style.lighterPurple}>Stick Up</span> is designed to simplify your note-taking journey. Create personalized folders effortlessly to keep your notes organized and easily accessible.</p>
                        <p className={style.projectBodyText}><span className={style.lighterPurple}>Stick Up</span> provides you with the perfect platform to create and manage your notes with ease. With a simple note creation feature, you can quickly capture your thoughts and ideas, ensuring that you never miss an important detail. Join the <span className={style.lighterPurple}>Stick Up</span> community today and discover the joy of organized note-taking in just a few clicks.</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <Row className={style.fullWidth2}>
                        <Col className='d-flex justify-content-center'>
                            <img src={Laptop} alt='Project' className={style.protoPic4}/>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <img src={Tablet} alt='Project' className={style.protoPic1}/>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <img src={Mob} alt='Project' className={style.protoPic2}/>
                        </Col>
                    </Row>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
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
                <section className={style.blackBg}>
                    <div className={style.fullWidth3}>
                        <h1 className={style.header}>WHAT WE DID</h1>
                        <p className={style.wwdHeaderTxt}>For "STICK UP" we had one goal, to make a simple CRUD (Create Read Update Delete) app, and we did it. More on the features below.</p>
                        <ol className={style.list2}>
                            <Row className={style.wwdRow}>
                                <Col>
                                    <div className='d-flex flex-column align-items-end p-4'>
                                        <li className={style.wwdli}> 
                                            <h1 className={style.wwdheader}>User-Friendly Registration</h1>
                                            <p className={style.wwdTxt}>Joining Stick Up is a breeze! Sign up with just a few clicks and become part of our vibrant note-taking community. Whether you're a student, professional, or avid note-taker, our user-friendly registration process ensures you can start organizing your thoughts in no time.</p>
                                        </li>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <div className={style.projContainer}>
                                        <div className={style.projBg}>
                                            <img src={Login} alt='proj'  className={style.wwdPic}/>
                                            <video src={LoginVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={style.wwdRow}>
                                <Col>
                                    <div className='d-flex flex-column align-items-end p-4'>
                                        <li className={style.wwdli}> 
                                            <h1 className={style.wwdheader}> Easy Note Creation and Editing</h1>
                                            <p className={style.wwdTxt}>Creating and editing notes has never been easier. With Stick Up, you can quickly jot down your thoughts or ideas. If you need to make changes, simply edit your notes and update them with new content or move them to a different folder. It's that simple!</p>
                                        </li>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <div className={style.projContainer}>
                                        <div className={style.projBg}>
                                            <img src={CNote} alt='proj'  className={style.wwdPic}/>
                                            <video src={CNoteVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={style.wwdRow}>
                                <Col>
                                    <div className='d-flex flex-column align-items-end p-4'>
                                        <li className={style.wwdli}> 
                                            <h1 className={style.wwdheader}>Organize with Folders</h1>
                                            <p className={style.wwdTxt}>Say goodbye to cluttered note-taking! Stick Up allows you to create folders to categorize your notes. Whether it's for personal, work, or educational purposes, our folder creation feature helps you stay organized and find your notes with ease.</p>
                                        </li>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <div className={style.projContainer}>
                                        <div className={style.projBg}>
                                            <img src={CFold} alt='proj'  className={style.wwdPic}/>
                                            <video src={CFoldVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={style.wwdRow}>
                                <Col>
                                    <div className='d-flex flex-column align-items-end p-4'>
                                        <li className={style.wwdli}> 
                                            <h1 className={style.wwdheader}>Easy Navigation</h1>
                                            <p className={style.wwdTxt}>We believe in simplicity and ease of use. Stick Up's intuitive design allows for effortless navigation, making it a pleasure to create, organize, and access your notes. Spend less time figuring out how to use the app and more time focusing on your thoughts.</p>
                                        </li>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <div className={style.projContainer}>
                                        <div className={style.projBg}>
                                            <img src={Laptop} alt='proj'  className={style.wwdPic}/>
                                            <video src={Navi} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={style.wwdRow}>
                                <div className='d-flex flex-column align-items-end p-4'>
                                    <li> 
                                        <h1 className={style.wwdheader}>Sync across Devices</h1>
                                        <p className={style.wwdTxt}>Access your notes anytime, anywhere! Stick Up's sync feature ensures that your notes are available across all your devices. Whether you're using your mobile phone, tablet, or computer, your notes are always synced and ready for you.</p>
                                    </li>
                                </div>
                            </div>
                            
                        </ol>
                    </div>
                </section>
                <section className={style.whiteBg}>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className={style.wwlHeaderTxt}>WHAT WE LEARNT</h1>
                        <p className={style.wwlHeadersubTxt}>Working on STICK-UP was scary because it was my first full-stack project but here we are. I'd like to thank myself for seeing this true and not dropping this at times where i did not know how to progress but that's not what we're here for. This is what we've learnt:</p>
                        <ul className={style.uList}>
                            <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>Controllers:</span> Writing controllers really tested my JS skills and knowlegde, i basically had to learn it all again so of course i ran into errors especially connecting these controllers to the front-end but i'm here right now which means i got through it.</p></li> 
                            <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>Styling:</span> I did not take any design courses before this so i had to learn on the fly. I suffered. I am not upset with how it turned out although the process was not the most exciting.</p></li> 
                            <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>Database Connection:</span> Connecting to databases is more than just adding the URI, i learnt that the slow and excrutiating way (not really but i want to vent). Uploading and retrieving data is fun though when you see all the things it allows you to do.</p></li>
                            <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>Token Handling:</span> Retrieving and working with tokens was a hassle to learn with how delicate it is but i was triumphant.</p></li>
                            <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>General Improvement:</span> I'm just going to list things i learnt now without context. Handling enviroment variables, Github, connecting front-end to back-end, design rule-of-thumbs, MongoDB, React vs React-Bootstrap, and many much more.</p></li>
                        </ul>
                    </div>
                </section>
            </Container>
        </>
    )
}