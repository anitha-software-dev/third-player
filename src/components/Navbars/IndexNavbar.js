/*!

=========================================================
* third_player - v1.0.0
=========================================================
* Coded by Ecrubit
*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "../../helper/index"
import { AnchorScroll } from "../../helper/index";
// reactstrap components
import {

  Collapse,
  NavbarBrand,
  Navbar,
  Container,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Button,
  Modal, ModalBody
} from "reactstrap";
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa'
import WalletDropdown from "components/ConnectWallet/WalletDropdown"
import ConnectWallet from "components/ConnectWallet";
import connectors from "../../helper/WalletConnector"
import activateInjectedProvider from "../../helper/WalletHelp"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { mintNFT } from "utils/interact";
import { useWeb3React } from '@web3-react/core'
import { useAlert } from "react-alert";
import Web3 from "web3"
import { Minus, MinusSquare, PlusSquare } from "react-feather";

export default function IndexNavbar() {
  const { account, active, activate } = useWeb3React();
  const [isOpen, setIsOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const alert = useAlert()
  let provider = localStorage.getItem('provider')

  const RpcHttpUrl = process.env.REACT_APP_RPC_HTTP_URL;

  const web3 = new Web3(new Web3.providers.HttpProvider(RpcHttpUrl));
  const [countModalOpen, setCountModalOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [typeSelected, setTypeSelected] = useState(null);
  const [payModalOpen, setPayModalOpen] = useState(false)

  useEffect(() => {
    if (active && account && typeSelected !== null) {
      getAssetData(typeSelected)
      setIsOpen(false)
    }

  }, [active, account])

  const getAssetData = (type) => {

    if (type === 'wallet' && !active && account === undefined && provider === null) {
      setIsOpen(true)
      return false
    } else if (type === 'wallet' && active && account !== undefined && provider !== null) {
      setCountModalOpen(!countModalOpen)
    }
    setTypeSelected(type)
    setPayModalOpen(!payModalOpen)
  }

  const walletMint = async () => {

    setCountModalOpen(!countModalOpen)

    if (account) {

      /*const chainId = await window.ethereum.request({ method: 'eth_chainId' })

      if (chainId !== '0x1') {
          const hexChainId = ethers.utils.hexValue(1)

          try {
              await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: hexChainId }]
              });

          } catch (switchError) {
              if (switchError.code === 4902) {
                  console.log("This network is not available in your metamask, please add it")
              }
              console.log("Failed to switch to the network")
          }
          return false
      }*/

      const proof = { body: [] } //await GetWhitelisted(account)

      const isPublic = true //await isPublicSale();
      if (proof && proof.body) {

        var proofArr = [...proof.body];
        if (!isPublic && proofArr.length === 0) {
          alert.error("You are not in the whitelist please wait for the public sale");
          return false
        }

        const response = await mintNFT(count, proof.body)

        if (response && response.success === true) {
          alert.info("In Progress", { timeout: 0 })
          const interval = setInterval(() => {
            web3.eth.getTransactionReceipt(response.hash, (err, res) => {
              if (res) {
                clearInterval(interval)
                alert.removeAll()
                if (res.status === true) {
                  alert.success("Successful!", { timeout: 5000 })
                } else {
                  alert.error("Failed!", { timeout: 5000 })
                }
              }
            });
          }, 4000);

        } else {
          alert.removeAll()
          alert.error("Failed!", { timeout: 5000 })
        }

      }
    }
    setCountModalOpen(!countModalOpen)
  }

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  useEffect(() => {
    const provider = localStorage.getItem("provider");
    if (provider) {
      if (provider === 'injected') {
        if (!isMobile() && !window.ethereum) {
          window.open('https://metamask.io/download/', '_blank');
        } else {
          activateInjectedProvider('MetaMask');
          activate(connectors.injected);
        }
      } else activate(connectors[provider]);
    }

  }, []);


  return (
    <Navbar expand="lg" id="home">
      <Container>
        <Row className="w-100">
          <Col lg="2">
            <div className="d-flex justify-content-between">
              <NavbarBrand to="/" tag={Link} id="navbar-brand" onClick={() => AnchorScroll()}>
                <img src={require('../../assets/img/logo.png').default} alt='logo' width={100} className='img-fluid brand-logo' />
              </NavbarBrand>
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={toggleCollapse}
              >
                <FiMenu className="text-white" size="24" />
              </button>
            </div>
          </Col>
          <Col lg="10" className="d-flex justify-content-end align-items-center pr-0">
            <Collapse
              className={"ml-4 justify-content-end align-items-center " + collapseOut}
              navbar
              isOpen={collapseOpen}
              onExiting={onCollapseExiting}
              onExited={onCollapseExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <img src={require('../../assets/img/logo.png').default} alt='third_player' className='img-fluid  ' />
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-expanded={collapseOpen}
                      className="navbar-toggler"
                      onClick={toggleCollapse}
                    >
                      <FaTimes className="pf-text-secondary" size="24" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar className="nav-text  mr-4">
                <NavItem className="p-2">
                  <NavLink
                    data-placement="bottom"
                    rel="noopener noreferrer"
                  >
                    <a href="#" rel='noreferrer' className="ff-med text-uppercase">NFT Collection</a>
                  </NavLink>
                </NavItem>
                {(!active) && <div>
                  <div>
                    {/* <WalletDropdown /> */}
                    <div>
                      <Button className="btn-style" onClick={() => setIsOpen(true)}>CONNECT WALLET</Button>
                    </div>
                  </div>
                </div>}
                {active && account && <div>
                  <div className="">
                    <WalletDropdown />
                  </div>
                </div>
                }
                <div className=''>

                  <Button className="btn-style" onClick={() => { getAssetData('wallet') }}>
                    Mint Now
                  </Button>
                </div>
              </Nav>
            </Collapse>
          </Col>
        </Row>
      </Container>
      <ConnectWallet setIsOpen={setIsOpen} isOpen={isOpen} />
      <Modal isOpen={countModalOpen} toggle={() => setCountModalOpen(!countModalOpen)} size="sm" >
        <ModalBody className="mt-30 mb-30 wallets-modal" style={{ background: "black" }}>
          <div className="closeButton float-right pb-5" onClick={() => setCountModalOpen(!countModalOpen)}><AiOutlineCloseCircle size={30} color="green" className='pointer' /></div>
          <Row>
            <Col md='12'>
              <div className='px-2 py-4 text-center'>
                <h5 className="mm-regular">How many would you like to mint?</h5>
                <div className="d-flex align-items-center justify-content-center text-center mb-3">
                  <div className="cursor-pointer" onClick={() => { setCount((n) => n > 1 ? n - 1 : 1); }}><MinusSquare size={35} color="green" /></div>
                  <input className="input-count form-control w-25 text-center" placeholder={1} min={1} max={10} value={count} />
                  <div className="cursor-pointer" onClick={() => { setCount((n) => n < 10 ? n + 1 : 10); }}><PlusSquare size={35} color="green" /></div>
                </div>

                <div className='wallet-item d-flex align-items-center justify-content-center wal-button mt-4'>
                  <Button className='btn-style' style={{ cursor: "pointer" }} onClick={() => { walletMint() }}>Submit</Button>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Navbar>

  );
}
