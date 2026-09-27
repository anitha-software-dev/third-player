import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Story = () => {
    return (
        <section>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="4">
                        <div className='text-center text-lg-left'>
                            <h2 className="ff-main text-white mb-3 gradient-header">My Story</h2>
                            <p className="text-white ff-med mb-4">The inspiration of this unique NFT collection is from natural
                                hallucinations, dreams and life experiences, I'm a woman that was neglected as
                                a child and was sexually abused, growing up in a toxic family environment, one day
                                I decided to stop being a victim and reconnected with god, I received many signs from
                                the universe and that's how NFTs came into my life.
                                We know how important is to help others, that's why we are donating 10% of the net
                                sales to a charity that fights child abuse and pedophilia.
                                You can be part of this great cause.</p>
                            <Link to="/story/page"><button className="btn-style mb-3">
                                <div className="d-flex align-items-center justify-content-center p-3">
                                    <p className="ff-semi mb-0">READ MORE</p>
                                    <img src={require('../../../assets/img/Landing-Page/green-dot.png').default} className="img-fluid ml-2" />
                                </div>
                            </button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="8" className='mt-5 mt-lg-0'>
                        <div className='bg-circle'>
                            <img src={require('../../../assets/img/Landing-Page/Circle.png').default} className="d-none d-sm-block" data-aos="zoom-out-up" />
                            <div className="d-flex flex-column align-items-center justify-content-center banner-box-active p-1 px-md-4 py-md-5" data-aos="fade-up"
                                data-aos-duration="3000">
                                <img src={require('../../../assets/img/Landing-Page/mission.png').default} className="img-fluid mt-4 mt-md-0" />
                                <h2 className="ff-main text-white my-3">My Mission</h2>
                                <p className="text-white text-center ff-med mb-5">Create a large community to study and research dreams, spirituality, human psychology and the universe.</p>
                                <img src={require('../../../assets/img/Landing-Page/vision.png').default} />
                                <h2 className="ff-main text-white my-3">My Vision</h2>
                                <p className="text-white text-center ff-med mb-4">Our brand to be the symbol of abundance to create positive change in humanity and awareness to fight against child abuse.</p>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Story