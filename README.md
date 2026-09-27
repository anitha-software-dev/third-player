# The 3rd Player — Web3 NFT Storytelling & Minting Platform

[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Web3](https://img.shields.io/badge/Web3-Alchemy%20%2F%20Ethers-F16822?logo=ethereum&logoColor=white)](https://ethereum.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/Styles-SCSS%20%2F%20SASS-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An immersive Web3 digital art and storytelling platform on Ethereum, featuring multi-wallet connectivity, smart contract minting, interactive 3D card showcases, and an inspiring philanthropic mission dedicating 10% of proceeds to combat child abuse.

---

## 📌 Overview

**The 3rd Player** (`#the_3rdplayer`) is a decentralized art and narrative platform bringing personal resilience and artistic expression onto the Ethereum blockchain. Rooted in real-life experiences, vivid dreams (notably *"The Girl on the Disk"*), and spiritual growth, the platform pairs digital collectible art with an impactful charitable cause.

Beyond digital art ownership, the project is dedicated to positive social change: **10% of all net sales** are pledged to charitable organizations actively fighting child abuse and pedophilia. The platform fosters a supportive community exploring dreams, psychology, mindfulness, and the universe.

---

## ✨ Key Features

- **👛 Multi-Wallet Web3 Connectivity**:
  - Direct integration with popular Ethereum wallets: **MetaMask**, **WalletConnect**, and **Coinbase Wallet** powered by `@web3-react/core`.
  - Automatic provider detection, account change listeners, truncated address formatting, and clean connection status indicators.

- **⚡ On-Chain NFT Minting & Smart Contract Architecture**:
  - Direct interaction with ERC-721 smart contracts via `@alch/alchemy-web3` and `ethers.js`.
  - Dynamic on-chain price fetching (`getCurrentPrice`), automated gas estimation, and real-time transaction submission.
  - Asynchronous transaction receipt polling on Etherscan with instant user feedback alerts (`react-alert`).
  - Multi-tier sale support (Whitelist pre-sale with Merkle proof verification and public sale phases).

- **🃏 Interactive 3D Card Shuffle Showcase**:
  - Custom perspective 3D card slider allowing users to interactively browse through artwork previews.
  - Smooth radio-toggled switching, depth transitions, and border glow effects.

- **📖 Deep Autobiographical Storytelling**:
  - Dedicated multi-chapter story page (`/story/page`) chronicling pivotal life moments—from childhood challenges and *"Lottery Therapy"* to ICU survival and spiritual renewal.
  - Interactive "Read More" navigation and mission/vision cards highlighting the values of abundance, compassion, and healing.

- **🎨 Modern Dark Cosmic UI/UX**:
  - Futuristic dark aesthetic styled with modular SCSS, vibrant gradient text accents, and custom typography (`Gilroy`, `BonVivant`).
  - Smooth on-scroll animations powered by **AOS** (Animate On Scroll) and responsive layout built with **Bootstrap 4** and **Reactstrap**.
  - Mobile-first responsive navigation with collapsing menus and back-to-top smooth scrolling.

- **🤝 Social Community & Charity Integration**:
  - Official community touchpoints connected via Twitter and Instagram (`@the_3rdplayer`).
  - Embedded fiat-ready payment support architecture (via **Winter** checkout).

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React 17 (`17.0.1`), ReactDOM 17 |
| **Blockchain & Web3** | `@web3-react/core` (6.1.9), `@alch/alchemy-web3`, `@ethersproject/providers`, `ethers` (6.1.0), `merkletreejs` |
| **Supported Wallets** | MetaMask (`InjectedConnector`), WalletConnect (`WalletConnectConnector`), Coinbase (`WalletLinkConnector`) |
| **Routing & Navigation** | React Router v5 (`react-router-dom` 5.2.0), `react-scroll` |
| **UI Components & Layout** | Bootstrap 4 (`4.5.3`), Reactstrap (`8.7.1`), Styled Components (`5.3.5`) |
| **Styling & Icons** | Modular SCSS/SASS (`node-sass`), Nucleo Icons, `react-feather`, `react-icons` |
| **Animations & Effects** | AOS (Animate On Scroll v3), CSS3 3D Transforms, `react-tsparticles` |
| **Feedback & Notifications** | `react-alert` |
| **Build & Tooling** | Create React App (`react-scripts` 4.0.1), Gulp 4 (`gulp`), AWS CodeBuild (`buildspec.yml`) |

---

## 📁 Project Structure

```plaintext
3rd_player/
├── public/
│   ├── favicon.ico             # App icon
│   ├── index.html              # HTML shell with Google Analytics & SEO metadata
│   └── manifest.json           # Web app manifest
├── src/
│   ├── assets/
│   │   ├── css/                # Compiled stylesheets & Nucleo icons
│   │   ├── fonts/              # Custom typography (Gilroy, BonVivant)
│   │   ├── img/
│   │   │   └── Landing-Page/   # Artworks, collection previews, wallet icons
│   │   └── scss/
│   │       └── third_player/   # Modular SCSS (cards, sections, utilities)
│   ├── components/
│   │   ├── ConnectWallet/      # Wallet selection modal & dropdown controls
│   │   ├── Footer/             # Footer with social links & payment badges
│   │   └── Navbars/            # Responsive navigation bar & minting modal triggers
│   ├── helper/
│   │   ├── WalletConnector.js  # Multi-chain Web3 wallet connectors configuration
│   │   ├── WalletHelp.js       # Injected provider switcher (MetaMask / Coinbase)
│   │   └── index.js            # Whitelist helpers, address truncation & helpers
│   ├── routes/
│   │   └── index.js            # Route definitions (Landing Page & Story Page)
│   ├── utils/
│   │   ├── contract-abi.json   # ERC-721 Smart Contract Application Binary Interface
│   │   └── interact.js         # Alchemy Web3 minting and transaction dispatchers
│   ├── views/
│   │   └── home/
│   │       └── landingPage/
│   │           ├── Banner.js       # Hero section with narrative intro & social links
│   │           ├── NFTShuffle.js   # NFT collection showcase container
│   │           ├── Shuffle.js      # 3D interactive card shuffle slider
│   │           ├── Story.js        # Mission, vision, and backstory preview
│   │           ├── ThirdPlayer.js  # Social gallery & community grid
│   │           ├── index.js        # Landing page composition
│   │           └── storyPage.js    # Detailed autobiographical narrative route
│   └── index.js                # App entry point with Web3React & Alert providers
├── .env.example                # Safe environment variables template
├── .gitignore                  # Git ignore rules for node_modules, .env, and caches
├── buildspec.yml               # AWS CodeBuild deployment specification
├── gulpfile.js                 # Production asset post-processing and banner injection
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: `v14.17.x` or compatible (Recommended via [nvm](https://github.com/nvm-sh/nvm))
- **npm**: `v8.x` or higher
- A Web3 wallet browser extension (e.g., [MetaMask](https://metamask.io/))

### 1. Clone the Repository

```bash
git clone https://github.com/anitha-software-dev/third-player.git
cd third-player
```

### 2. Configure Environment Variables

Create a local `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Configure your credentials inside `.env`:

```env
# Alchemy RPC Endpoint
REACT_APP_ALCHEMY_KEY=https://eth-goerli.g.alchemy.com/v2/YOUR_ALCHEMY_KEY

# Infura RPC & Project ID
REACT_APP_RPC_HTTP_URL=https://goerli.infura.io/v3/YOUR_INFURA_ID
REACT_APP_INFURA_ID=YOUR_INFURA_ID

# Smart Contract Address
REACT_APP_CONTRACT_ADDRESS=0xYourContractAddressHere

# Fiat Integration (Winter)
REACT_APP_WINTER_ENVIRONMENT=staging
REACT_APP_WINTER_PROJECT_ID=8962
```

> ⚠️ **Security Notice**: Never commit `.env` or expose private keys and live RPC credentials to version control.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 5. Build for Production

```bash
npm run build
```

Builds the application for production to the `build` directory with optimized bundles and injected license headers via Gulp.

---

## ⛓️ Smart Contract Architecture

The decentralized minting interface interacts directly with the deployed ERC-721 smart contract:

| Function | Type | Description |
|---|---|---|
| `getCurrentPrice()` | Read (`view`) | Fetches the current mint price in Wei |
| `saleType()` | Read (`view`) | Queries the active sale phase (Whitelist / Public) |
| `mint(uint256 count, address recipient)` | Write (`payable`) | Executes token minting transaction on Ethereum |

Transaction lifecycle:
1. User connects wallet (MetaMask / WalletConnect / Coinbase).
2. Client queries contract for current price tier and calculates required Wei.
3. Transaction payload is signed by the connected wallet via `eth_sendTransaction`.
4. Client polls Etherscan for receipt confirmation and renders real-time toast notifications.

---

## 📄 License

This project is licensed under the **MIT License** — see the [package.json](package.json) file for details.

---

## 👩‍💻 Author

**Anitha M**
- GitHub: [@anitha-software-dev](https://github.com/anitha-software-dev)
