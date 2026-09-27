import braveImg from "../assets/img/Landing-Page/brave-icon.png"
import coinbaseImg from "../assets/img/Landing-Page/coinbase-icon.png"
import metamaskImg from "../assets/img/Landing-Page/metamask-icon.png"
import walletImg from "../assets/img/Landing-Page/walletconnect-icon.png"
import { getSaleType } from "utils/interact"
// import { ethers } from 'ethers'
// import { MerkleTree } from 'merkletreejs'

export const AnchorScroll = () => {
    setTimeout(() => {
        let currentLocation = window.location.href;
        const hasAnchor = currentLocation.includes("/#");
        if (hasAnchor) {
            const anchorId = `${currentLocation.substring(currentLocation.indexOf("#") + 1)}`;
            const anchorElement = document.getElementById(anchorId);
            if (anchorElement) {
                setTimeout(() => {
                    anchorElement.scrollIntoView({ behavior: "smooth" });
                }, 200);
            }
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }, 200);
}

export const truncateAddress = (address) => {
    const a = String(address)
    if (a && a.length > 5) {
        return `${a.substring(0, 5)}...${a.slice(a.length - 5)}`
    }
    return a
}

export const GetWhitelisted = async (address) => {

    let proof = [];

    const saleType = await getSaleType()

    // Parse params passed to server and get user wallet address
    const userWalletAddress = address;

    if (saleType && saleType === "1") {

        const response = {
            statusCode: 200,
            body: proof,
            price: '0.04'
        };

        return response;

    } else if (saleType && saleType === "2") {

        const response = {
            statusCode: 200,
            body: proof,
            price: '0.05'
        };

        return response;

    } else {

        const response = {
            statusCode: 200,
            body: proof,
            price: '0.06'
        };

        return response;

    }
}

export const isPublicSale = async () => {

    const saleType = await getSaleType()

    return (saleType && saleType === "3") ? true : false
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const getWalletLogo = (walletName) => {
    let wallet = walletName
    if (wallet === null) wallet = localStorage.getItem('provider')
    if (wallet === 'coinbase' || wallet === 'coinbaseWallet') return coinbaseImg
    if (wallet === 'walletconnect' || wallet === 'walletConnect') return walletImg
    if (wallet === 'brave') return braveImg
    return metamaskImg
}