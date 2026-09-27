import React, { Fragment } from "react"
import IndexNavbar from "components/Navbars/IndexNavbar"
import { Col, Container, Row } from "reactstrap"
import { Link } from 'react-router-dom'


const BannerSection = () => {
    return (
        <Fragment>
            <div className="banner-section">
                <Container>
                    <IndexNavbar />
                    <section>
                        <Row>
                            <Col lg="1"></Col>
                            <Col lg="10">
                                <h1 className="ff-main gradient-header text-center">Everything Happens for a Reason Follow the Signs the Universe Gives You</h1>
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md="4" lg="4">
                                <div className="d-flex flex-column align-items-center justify-content-center banner-box-active p-2 p-lg-4" data-aos="zoom-in-up">
                                    <h3 className="ff-main text-white mb-3">My Dreams</h3>
                                    <p className="text-white text-center ff-med mb-4 px-lg-4">There are 3 dreams that are a reflexion of my life, the first one is the girl on the disk, here are some of my other dreams, more to come.</p>
                                    <Link to="/story/page"><button className="btn-style-active mb-3">
                                        <div className="d-flex align-items-center justify-content-center p-3 px-sm-1 py-sm-2 p-lg-3">
                                            <p className="ff-semi mb-0">READ MORE</p>
                                            <img src={require('../../../assets/img/Landing-Page/black-dot.png').default} className="img-fluid ml-2" />
                                        </div>
                                    </button></Link>
                                    <div className="text-center">
                                        <a href="https://www.instagram.com/the_3rdplayer/" target="_blank"><img src={require('../../../assets/img/Landing-Page/instagram.png').default} className="img-fluid" /></a>
                                        <a href="https://twitter.com/the3rdplayer" target="_blank"><img src={require('../../../assets/img/Landing-Page/twitter.png').default} className="img-fluid ml-3" /></a>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" lg="4" className="mt-3 mt-md-0">
                                <div className="d-flex flex-column align-items-center justify-content-center banner-box p-2 p-lg-4" data-aos="zoom-in-up">
                                    <h3 className="ff-main text-white mb-3">Hallucinations</h3>
                                    <p className="text-white text-center ff-med mb-4 px-lg-4">Occasionally some wind force wake me up around 3:30 and I hallucinate, this happen to me since I was a little kid, here are some of my hallucinations, more to come.</p>
                                    <Link to="/story/page"><button className="btn-style mb-3">
                                        <div className="d-flex align-items-center justify-content-center p-3 px-sm-1 py-sm-2 p-lg-3">
                                            <p className="ff-semi mb-0">READ MORE</p>
                                            <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                                        </div>
                                    </button></Link>
                                    <div className="text-center">
                                        <a href="https://www.instagram.com/the_3rdplayer/" target="_blank"><img src={require('../../../assets/img/Landing-Page/instagram.png').default} className="img-fluid" /></a>
                                        <a href="https://twitter.com/the3rdplayer" target="_blank"><img src={require('../../../assets/img/Landing-Page/twitter.png').default} className="img-fluid ml-3" /></a>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" lg="4" className="mt-3 mt-md-0">
                                <div className="d-flex flex-column align-items-center justify-content-center banner-box p-2 p-lg-4" data-aos="zoom-in-up">
                                    <h3 className="ff-main text-white mb-3">Life Experiences</h3>
                                    <p className="text-white text-center ff-med mb-4 px-lg-4">I have lived some paranormal life experiences throughout my life, here are some of them, more to come.</p>
                                    <Link to="/story/page"> <button className="btn-style mb-3">
                                        <div className="d-flex align-items-center justify-content-center p-3 px-sm-1 py-sm-2 p-lg-3">
                                            <p className="ff-semi mb-0">READ MORE</p>
                                            <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                                        </div>
                                    </button></Link>
                                    <div className="text-center">
                                        <a href="https://www.instagram.com/the_3rdplayer/" target="_blank"><img src={require('../../../assets/img/Landing-Page/instagram.png').default} className="img-fluid" /></a>
                                        <a href="https://twitter.com/the3rdplayer" target="_blank"><img src={require('../../../assets/img/Landing-Page/twitter.png').default} className="img-fluid ml-3" /></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button className="btn-style mb-3" data-aos="zoom-in-up">
                                <a href="https://twitter.com/the3rdplayer" target="_blank">
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <p className="ff-semi mb-0">TWITTER</p>
                                        <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                                    </div>
                                </a>
                            </button><button className="btn-style mb-3 ml-4" data-aos="zoom-in-up">
                                <a href="https://www.instagram.com/the_3rdplayer/" target="_blank">
                                    <div className="d-flex align-items-center justify-content-center p-3">
                                        <p className="ff-semi mb-0">INSTAGRAM</p>
                                        <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                                    </div>
                                </a>
                            </button>
                        </div>
                    </section>
                </Container>
            </div>
        </Fragment >
    )
}
export default BannerSection