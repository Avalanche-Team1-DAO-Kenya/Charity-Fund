// App.jsx
import React from "react";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import NewWalletConnect from "./Connector";

function getLibrary(provider) {
    return new Web3(provider);
}

export default function AdminApp() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <NewWalletConnect />
        </Web3ReactProvider>
    );
}
