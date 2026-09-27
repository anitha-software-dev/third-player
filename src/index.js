/*!

=========================================================
* third_player - v1.0.0
=========================================================
* Coded by Ecrubit
*/
import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { positions, Provider } from "react-alert"
import { AlertCircle, CheckCircle, Info, X } from "react-feather"

import "assets/css/nucleo-icons.css";
import "assets/scss/third_player.scss?v=1.2.0";
import "assets/demo/demo.css";

const AlertTemplate = ({ style, options, message, close }) => (
  <div className="react-alert-card">
    <div className="d-flex align-items-start">
      {options.type === 'info' && <AlertCircle className="text-info mx-2 " />}
      {options.type === 'success' && <CheckCircle className="text-success mx-2 " />}
      {options.type === 'error' && <Info className="text-danger mx-2 " />}
      <div>
        <h5>Transaction</h5>
        {message}
      </div>
    </div>
    <button onClick={close}><X size="14" /></button>
  </div>
)

const options = {
  position: positions.BOTTOM_RIGHT
}

const getLibrary = (provider) => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider template={AlertTemplate} {...options}>
      <Routes />
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
