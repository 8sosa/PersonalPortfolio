import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Tabs, Tab} from 'react-bootstrap';

import style from './index.module.css'
import Laptop from './Images/laptop.png'
import Tablet from './Images/tablet.png'
import Mob from './Images/mobile.png'
import Steezedpic from './Images/steezedlogo.png'
import Reg from './Images/reg.png'
import RegVid from './Videos/regvid.mp4'
import Cteg from './Images/cteg.png'
import Vid from './Videos/2vid.mp4'
import Cart from './Images/cart.png'
import Cartv from './Videos/cart.mp4'
import Pay from './Images/pay.png'
import Payv from './Videos/pay.mp4'
import Order from './Images/orders.png'
import Orders from './Videos/orders.mp4'
import Np from './Images/np.png'
import Listing from './Videos/listing.mp4'
import Catego from './Images/catego.png'
import Categov from './Videos/catego.mp4'
import User from './Images/user.png'
import Userv from './Videos/user.mp4'



export default function Steezed() {
  return (
    <>
        <Container className={style.page}>
            <section className={style.whiteBg}>
                <div className={style.projectHero}>
                    <Row>
                        <Col>
                            <img src={Steezedpic} alt='project' className={style.heroPic}/>
                        </Col>
                        <Col className={style.heroTxtBox}>
                            <h1 className={style.heroText1}>STEEZED</h1>
                            <p className={style.heroText2}>An online marketplace where goods and services are sold making the human experience a tad bit easier while all the more appealing.</p>
                            <Row className='mt-5'>
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
                    <h1 className={style.projectHeaderTxt}><span className={style.lighterPurple}>STEEZED</span> - Where Buyers and Sellers Connect!</h1>
                    <p className={style.projectBodyTxt}><span className={style.lighterPurple}>STEEZED</span> the cutting-edge online marketplace designed and developed to transform the way buyers and sellers engage. This platform is a dynamic hub, bringing together quality products and enthusiastic consumers, crafting a seamless and enjoyable shopping experience for everyone involved.</p>
                    <p className={style.projectBodyText}>From intuitive user registration to a secure Paystack integrated payment system, <span className={style.lighterPurple}>STEEZED</span> stands as a testament to innovation in the online marketplace realm. Whether you're a buyer exploring unique finds or a seller seeking a platform to shine, <span className={style.lighterPurple}>STEEZED</span> is your gateway to a vibrant and connected community.</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Row>
                        <Col>
                            <img src={Laptop} alt='Project' className={style.heroPic}/>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <img src={Tablet} alt='Project' className={style.protoPic1}/>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <img src={Mob} alt='Project' className={style.protoPic2}/>
                        </Col>
                    </Row>
                </div>
                <div className={style.skittles}>
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
            <section className={style.blackBg}>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className={style.header}>WHAT WE DID</h1>
                    <p className={style.wwdHeaderTxt}>For the "Steezed" web application, we developed three distinct user interfaces tailored to different types of users: Adventurers (shoppers), Merchants (sellers), and Admins. Each face serves specific functions and provides unique features to enhance the user experience. Let's delve into what was implemented for each face:</p>
                    <Tabs defaultActiveKey="ADVENTURERS">
                        <Tab eventKey="ADVENTURERS" title="ADVENTURERS">
                            <ol className={style.list2}>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Reg} alt='proj'  className={style.wwdPic}/>
                                                <video src={RegVid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>User-Friendly Registration</h1>
                                                <p className={style.wwdTxt}>Joining STEEZED is a breeze! Whether you're a seller or a buyer, our user-friendly registration process ensures you're part of our vibrant community in no time.</p>
                                            </li>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}> Effortless Shopping Experience</h1>
                                                <p className={style.wwdTxt}>Say goodbye to complicated interfaces! Our intuitive design makes browsing and discovering products a joy. With categories right in sight alongside shops, navigating the marketplace is made easier.</p>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Cteg} alt='proj'  className={style.wwdPic}/>
                                                <video src={Vid} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Cart} alt='proj'  className={style.wwdPic}/>
                                                <video src={Cartv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>MINI CART</h1>
                                                <p className={style.wwdTxt}>Adding products to your cart is really the essence of shopping but having to always check your cart could be ruining the experience so we implemented a mini cart system. Now anytime you add a product to your cart a mini-cart slides out with everything in your cart and your total.</p>
                                            </li>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>SIMPLE PAYMENT SYSTEM</h1>
                                                <p className={style.wwdTxt}>Understanding that receiving payments is a very delicate matter we elected to use a trusted external payment gateway. PAYSTACK. Using paystack, shoppers can have a hassle free experience shopping with us.</p>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Pay} alt='proj'  className={style.wwdPic}/>
                                                <video src={Payv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ol>
                        </Tab>
                        <Tab eventKey="MERCHANTS" title="MERCHANTS">
                            <ol className={style.list2}>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Np} alt='proj'  className={style.wwdPic}/>
                                                <video src={Listing} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>PRODUCT MANAGEMENT</h1>
                                                <p className={style.wwdTxt}>Product managing is where most of being a seller happens. We decided to keep things simple with an almost bare-boned product creation page and a straight-to-the-point product listing page.</p>
                                            </li>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>ORDER MANAGEMENT</h1>
                                                <p className={style.wwdTxt}>We decided to follow to simplistic route we started with putting all the orders in one tab. Order status can be changed in the order keeping everything seamless and simple.</p>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Order} alt='proj'  className={style.wwdPic}/>
                                                <video src={Orders} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ol>
                        </Tab>
                        <Tab eventKey="ADMIN" title="ADMIN">
                            <ol className={style.list2}>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={User} alt='proj'  className={style.wwdPic}/>
                                                <video src={Userv} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>User MANAGEMENT</h1>
                                                <p className={style.wwdTxt}>Quite self-evident but we decided to give the admin a page to manage the entire marketplace. Here is the tab to see all the users of the marketplace, both the shoppers and sellers.</p>
                                            </li>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={style.wwdRow}>
                                    <Col>
                                        <div className='d-flex flex-column align-items-end p-5'>
                                            <li> 
                                                <h1 className={style.wwdheader}>SITE MANAGEMENT</h1>
                                                <p className={style.wwdTxt}>Here the admin can manage the entire site although majority of it is in the works, the admin can manage the categories available in the marketplace.</p>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={style.projContainer}>
                                            <div className={style.projBg}>
                                                <img src={Catego} alt='proj'  className={style.wwdPic}/>
                                                <video src={Categov} alt="Registration Video" className={style.wwdVideo} loop muted autoPlay playsInline playbackRate={10}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </ol>
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className={style.whiteBg}>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className={style.wwlHeaderTxt}>WHAT WE LEARNT</h1>
                    <p className={style.wwlHeadersubTxt}>Working on STEEZED opened my eyes to many issues I had overlooked in my learning journey. "One of the basic rules of the universe is that NOTHING IS PERFECT. Perfection simply doesn't exist... without imperfection, neither you nor I would exist." This quote is what I have been using to pacify myself as not all my ideas were brought to light lol, some were killed by bugs or lack of knowledge/resources still here we are. This is what we've learnt:</p>
                    <ul className={style.uList}>
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>image handling:</span> Image handling is something I did not expect to be an issue but taking into account this is a marketplace, server-side-storage is not the most appropriate but it is what we went with, storing the image name on the database rather than the image itself so it could just call the image. I do understand that this would not be a feasible solution if this was an actual product to be delivered but as this is a personal project, "Nothing is PERFECT".</p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>PAYMENT INTEGRATION:</span> Stripeeee, I put my all into making stripe work just to finally give up and ask a friend for advice then finding out stripe was not supported in my region rather they had an affiliation of some sorts with Paystack which I could use. That was an experience.</p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>Order management:</span> Having to link the orders the shoppers make to sellers so sellers could change the status of shoppers orders was another ordeal I had to overcome but luckily I was able to work around it using the unique ids. MongoDB is still superior!!! </p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>design choices:</span> I initially loved the design I went with but the further I went I started to dislike it. I sacrificed a lot of space for aesthetics which in my opinion was not worth it, I will not be doing that again.</p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>CSS:</span> I wrote so much css for this project that at some point git thought it was a css project. I learnt to stop re-writing styles I already have, just reusing them. This was able to cut down a lot of code for me so that's a win.</p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>RESPONSIVENESS:</span> Multiple screen widths is the sauce. I figured I could just design for two screen widths (mobile and desktop) as everything between that can be repurposed and refined easily rather that doggedly doing each screen width one by one.</p></li> 
                        <li><p className={style.wwlTxt}><span className={style.wwlTxt1}>controllers:</span> Asides testing your controllers after writing them i've learnt to add comments into the code to keep myself informed and in the loop so I don't become a stranger in my own work.</p></li> 
                    </ul>
                </div>
            </section>
        </Container>
    </>
  )
}