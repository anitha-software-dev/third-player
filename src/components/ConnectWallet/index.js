import React, { useEffect } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap'
/* wallet imports */
import { useWeb3React } from '@web3-react/core'
import connectors from "../../helper/WalletConnector"
import activateInjectedProvider from "../../helper/WalletHelp"
import { AiOutlineCloseCircle } from "react-icons/ai"

import IconOne from '../../assets/img/Landing-Page/icon-1.png'
import IconTwo from '../../assets/img/Landing-Page/icon-2.png'
import IconThree from '../../assets/img/Landing-Page/icon-3.png'


function ConnectWallet({ isOpen, setIsOpen }) {

    const { account, activate, active } = useWeb3React();

    const connectWallet = (walletName) => {

        localStorage.setItem('provider', walletName)
        if (walletName === 'injected') {
            activateInjectedProvider('injected')
            activate(connectors.injected)
        } else if (walletName === 'walletConnect') {
            activate(connectors.walletConnect);
        } else if (walletName === 'coinbaseWallet') {
            activate(connectors.coinbaseWallet)
        }
    }

    useEffect(() => {
        if (active && account) {
            setIsOpen(false)
        }
    }, [active, account])

    return (
        <>
            <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} size="md" >
                <ModalBody className='mt-30 mb-30 wallets-modal' style={{ background: "black" }}>
                    <div className="closeButton float-right pb-5" onClick={() => setIsOpen(false)}><AiOutlineCloseCircle size={30} className='pointer' /></div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={IconOne} alt="" className='wallet-img' />
                                </div>
                                <h4 className="appie-title text-white">Metamask</h4>
                                <div className='pt-3'>
                                    <Button className='btn-style' type='submit' onClick={() => connectWallet('injected')}>Select</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <img src={IconThree} alt="" className='wallet-img p-2' />

                                </div>
                                <div>
                                    <h4 className="appie-title text-white pt-3">WalletConnect</h4>
                                </div>

                                <div className='pt-0'>
                                    <Button className='btn-style mt-3' type='submit' onClick={() => connectWallet('walletConnect')}>Select</Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </ModalBody>
            </Modal>
        </>
    );
}

export default ConnectWallet;
