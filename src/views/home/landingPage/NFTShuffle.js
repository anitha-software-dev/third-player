import React, { useState, useEffect } from 'react'
import { Button, Col, Row, Modal, ModalBody } from "reactstrap"
import CardShuffle from './Shuffle'

const NFTShuffle = () => {

    return (
        <section className='position-rel' id="collection">
            <h2 className="ff-main gradient-header text-center">3Rd Player NFT Collection</h2>
            <h2 className="ff-main gradient-header text-center">Launching Soon</h2>
            <div>
                <section className="container">
                    <Row>
                        <Col md={{ size: 9, offset: 3 }} lg={{ size: 8, offset: 4 }} xs="12" sm={{ size: 10, offset: 2 }}>
                            <CardShuffle />
                        </Col>
                    </Row>
                </section>
                <div className='bg-circle text-center ml-lg-5'>
                    <h2 className="ff-main text-white my-3">Mint Now!</h2>
                </div>
            </div>
        </section>
    )
}

export default NFTShuffle