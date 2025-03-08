import React from 'react'
import { Col, Row, Tabs, Tab} from 'react-bootstrap';
import style from './index.module.css'

// import Reg from './Images/ast.png'
// import RegVid from './Videos/vid.mp4'
// import Cteg from './Images/ast.png'
// import Vid from './Videos/vid.mp4'
// import Cart from './Images/ast.png'
// import Cartv from './Videos/vid.mp4'
// import Pay from './Images/ast.png'
// import Payv from './Videos/vid.mp4'
// import Order from './Images/ast.png'
// import Orders from './Videos/vid.mp4'
// import Np from './Images/ast.png'
// import Listing from './Videos/vid.mp4'
// import Catego from './Images/ast.png'
// import Categov from './Videos/vid.mp4'
// import User from './Images/ast.png'
// import Userv from './Videos/vid.mp4'

function steezedLearnt() {
  return (
    <div className={style.fullWidth3}>
        <h1 className={style.header}>WHAT WE DID</h1>
        <p className={style.wwdHeaderTxt}>For the "Steezed" web application, we developed three distinct user interfaces tailored to different types of users: Adventurers (shoppers), Merchants (sellers), and Admins. Each face serves specific functions and provides unique features to enhance the user experience. Let's delve into what was implemented for each face:</p>
        <Tabs defaultActiveKey="ADVENTURERS" >
            <Tab eventKey="ADVENTURERS" title="ADVENTURERS">
                <ol className={style.list2}>
                    <Row className={style.wwdRow}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>User-Friendly Registration</h1>
                                    <p className={style.wwdTxt}>Joining Steezed is a breeze! Whether you're a seller or a buyer, our user-friendly registration process ensures you're part of our vibrant community in no time.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Reg} alt='proj'  className={style.wwdPic}/>
                                    <video src={RegVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    <Row className={style.wwdRow1}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>Effortless Shopping Experience</h1>
                                    <p className={style.wwdTxt}>Say bye to complicated interfaces! Our intuitive design makes browsing and discovering products a joy. With categories right in sight alongside shops, navigating the marketplace is made easier.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Cteg} alt='proj'  className={style.wwdPic}/>
                                    <video src={Vid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    <Row className={style.wwdRow}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>MINI CART</h1>
                                    <p className={style.wwdTxt}>Adding products to your cart is really the essence of shopping but having to always check your cart could be ruining the experience so we implemented a mini cart system. Now anytime you add a product to your cart a mini-cart slides out with everything in your cart and your total.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Cart} alt='proj'  className={style.wwdPic}/>
                                    <video src={Cartv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    <Row className={style.wwdRow1}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>SIMPLE PAYMENT SYSTEM</h1>
                                    <p className={style.wwdTxt}>Understanding that receiving payments is a very delicate matter we elected to use a trusted external payment gateway. PAYSTACK. Using paystack, shoppers can have a hassle free experience shopping with us.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Pay} alt='proj'  className={style.wwdPic}/>
                                    <video src={Payv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </ol>
            </Tab>
            <Tab eventKey="MERCHANTS" title="MERCHANTS">
                <ol className={style.list2}>
                    <Row className={style.wwdRow}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>PRODUCT MANAGEMENT</h1>
                                    <p className={style.wwdTxt}>Product managing is where most of being a seller happens. We decided to keep things simple with an almost bare-boned product creation page and a straight-to-the-point product listing page.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Np} alt='proj'  className={style.wwdPic}/>
                                    <video src={Listing} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    <Row className={style.wwdRow1}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>ORDER MANAGEMENT</h1>
                                    <p className={style.wwdTxt}>We decided to follow to simplistic route we started with putting all the orders in one tab. Order status can be changed in the order keeping everything seamless and simple.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Order} alt='proj'  className={style.wwdPic}/>
                                    <video src={Orders} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </ol>
            </Tab>
            <Tab eventKey="ADMIN" title="ADMIN">
                <ol className={style.list2}>
                    <Row className={style.wwdRow}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>User MANAGEMENT</h1>
                                    <p className={style.wwdTxt}>Quite self-evident but we decided to give the admin a page to manage the entire marketplace. Here is the tab to see all the users of the marketplace, both the shoppers and sellers.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={User} alt='proj'  className={style.wwdPic}/>
                                    <video src={Userv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                    <Row className={style.wwdRow1}>
                        <Col>
                            <div className='d-flex flex-column align-items-end p-4'>
                                <li className={style.wwdli}> 
                                    <h1 className={style.wwdheader}>SITE MANAGEMENT</h1>
                                    <p className={style.wwdTxt}>Here the admin can manage the entire site although majority of it is in the works, the admin can manage the categories available in the marketplace.</p>
                                </li>
                            </div>
                        </Col>
                        {/* <Col className='d-flex justify-content-center'>
                            <div className={style.projContainer}>
                                <div className={style.projBg}>
                                    <img src={Catego} alt='proj'  className={style.wwdPic}/>
                                    <video src={Categov} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </ol>
            </Tab>
        </Tabs>
    </div>
  )
}

export default steezedLearnt