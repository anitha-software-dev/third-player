
import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export default function Footer() {

  const AnchorScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <section data-aos="flip-up">
      <Container>
        <Row className="align-items-center justify-content-center border-bottom pb-2">
          <Col sm="3" md="3" className="my-3 my-md-0 my-lg-3 text-center text-sm-left">
            <img src={require('../../assets/img/logo.png').default} alt='logo' className='img-fluid' width={80} />
          </Col>
          <Col sm="3" md="3" className="text-center">
            <div className="text-white ff-med" >NFT Collection</div>
          </Col>
          <Col sm="2" md="2" className="text-center">
            <a href="https://twitter.com/the3rdplayer" target="_blank"><div className="text-white ff-med" >Twitter</div></a>
          </Col>
          <Col sm="2" md="2" className="text-center">
            <a href="https://www.instagram.com/the_3rdplayer/" target="_blank"> <div className="text-white ff-med" >Instagram</div></a>
          </Col>
          <Col sm="2" md="2" className="text-right">
            <div onClick={AnchorScroll}>
              <img src={require('../../assets/img/Landing-Page/back-to-top.png').default} alt='logo' className='img-fluid pointer' width={50} />
            </div>
          </Col>
        </Row>
        <div md="12" className="mt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <p className="text-white ff-med">© The3rdplayer, Inc. All Rights Reserved.</p>
          <div className="mt-4 mt-sm-0">
            <a href="#" target={"_blank"} rel="noreferrer" title="Master Card"><img src={require('../../assets/img/Landing-Page/mastercard.png').default} className="img-fluid ml-2" /></a>
            <a href="#" target={"_blank"} rel="noreferrer" title="Pay Pal"><img src={require('../../assets/img/Landing-Page/paypal.png').default} className="img-fluid ml-2" /></a>
            <a href="#" target={"_blank"} rel="noreferrer" title="Visa"><img src={require('../../assets/img/Landing-Page/visa.png').default} className="img-fluid ml-2" /></a>
          </div>
        </div>
      </Container >

    </section >
  );
}
