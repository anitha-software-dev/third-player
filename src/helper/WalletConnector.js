import { InjectedConnector } from "@web3-react/injected-connector"
import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const infuraId = process.env.REACT_APP_INFURA_ID || process.env.INFURA_ID || ""

/* Metamask */
const injected = new InjectedConnector({
    supportedChainIds: [1, 137, 56, 3, 80001, 97, 4, 5]
})

/* WalletConnect */
const walletConnect = new WalletConnectConnector({
    rpc: {
        1: `https://mainnet.infura.io/v3/${infuraId}`,
        137: `https://mainnet.infura.io/v3/${infuraId}`,
        56: `https://mainnet.infura.io/v3/${infuraId}`,
        5: `https://goerli.infura.io/v3/${infuraId}`
    },
    infuraId,
    qrcode: true,
    pollingInterval: 12000
})

// Coinbase
const coinbaseWallet = new WalletLinkConnector({
    // url: `https://mainnet.infura.io/v3/${Config.INFURA_ID}`,
    // url: `https://rinkeby.infura.io/v3/${infuraId}`,
    url: `https://goerli.infura.io/v3/${infuraId}`,
    appName: 'tripleup',
    supportedChainIds: [1, 137, 56, 3, 80001, 97, 4, 5]
});

// function resetWalletConnector(connector) {
//     if (connector && connector instanceof WalletConnectConnector) {
//         connector.walletConnectProvider = undefined
//     }
// }

const connectors = {
    injected,
    walletConnect,
    coinbaseWallet
}

export default connectors