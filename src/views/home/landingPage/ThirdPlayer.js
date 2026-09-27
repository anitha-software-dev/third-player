import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const ThirdPlayer = () => {
    return (
        <section>
            <Container>
                <div className='d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between mb-4 player-section' id='pictures'>
                    <h2 className="ff-main text-white mb-3 gradient-header">#the_3rdplayer</h2>
                    <button className="btn-style mb-3">
                        <div className="d-flex align-items-center justify-content-center p-3">
                            <p className="ff-semi mb-0">FOLLOW ME</p>
                            <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                        </div>
                    </button>
                </div>
                <Row className='justify-content-center align-items-center'>
                    <Col sm="6" md="4" lg="4" className='text-center'>
                        <div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part1.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="4" className='text-center mt-4 mt-sm-0'>
                        <div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part2.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="4" className='text-center mt-4 mt-md-0'>
                        <div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part3.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="4" className='text-center mt-4 '>
                        <div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part4.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="4" className='mt-4 text-center'>
                        <div div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part5.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                    <Col sm="6" md="4" lg="4" className='mt-4 text-center'>
                        <div className='position-rel' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={require('../../../assets/img/Landing-Page/part6.png').default} className="img-fluid part-image" />
                            <a href="#"><img src={require('../../../assets/img/Landing-Page/insta.png').default} className="img-fluid insta-abs" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ThirdPlayer