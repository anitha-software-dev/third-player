
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('./contract-abi.json')
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

export const mintNFT = async (count, proof) => {

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    const price = await window.contract.methods.getCurrentPrice().call();

    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress,
        from: window.ethereum.selectedAddress,
        value: `0x${web3.utils.toBN(price * count).toString(16)}`,
        gas: web3.utils.toHex(500000),
        gasLimit: (price * count),
        data: window.contract.methods.mint(count, window.ethereum.selectedAddress).encodeABI()
    }

    try {
        const hash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            })

        if (hash) {

            return {
                success: true,
                hash: hash,
                status: "Check out your transaction on Etherscan: " + hash
            }
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}

export const getSaleType = async () => {
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    const finish = await window.contract.methods.saleType().call();
    return finish
}

