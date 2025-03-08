import React from 'react'
import { Col, Row } from 'react-bootstrap';
import style from './index.module.css';

// import Laptop from './Images/ast.png';
// import CFold from './Images/ast.png';
// import CFoldVid from './Videos/vid.mp4';
// import CNote from './Images/ast.png';
// import CNoteVid from './Videos/vid.mp4';
// import Login from './Images/ast.png';
// import LoginVid from './Videos/vid.mp4';
// import Navi from './Videos/vid.mp4'


function stickLearnt() {
  return (
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
                {/* <Col className='d-flex justify-content-center'>
                    <div className={style.projContainer}>
                        <div className={style.projBg}>
                            <img src={Login} alt='proj'  className={style.wwdPic}/>
                            <video src={LoginVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                        </div>
                    </div>
                </Col> */}
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
                {/* <Col className='d-flex justify-content-center'>
                    <div className={style.projContainer}>
                        <div className={style.projBg}>
                            <img src={CNote} alt='proj'  className={style.wwdPic}/>
                            <video src={CNoteVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                        </div>
                    </div>
                </Col> */}
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
                {/* <Col className='d-flex justify-content-center'>
                    <div className={style.projContainer}>
                        <div className={style.projBg}>
                            <img src={CFold} alt='proj'  className={style.wwdPic}/>
                            <video src={CFoldVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                        </div>
                    </div>
                </Col> */}
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
                {/* <Col className='d-flex justify-content-center'>
                    <div className={style.projContainer}>
                        <div className={style.projBg}>
                            <img src={Laptop} alt='proj'  className={style.wwdPic}/>
                            <video src={Navi} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                        </div>
                    </div>
                </Col> */}
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
  )
}

export default stickLearnt