/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export const TopNav = () => {
  return (
    <>
      <nav style={{background: '#000'}} className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            <img src="logo.png" width={'100'}/>
          </a>
        </div>
        <div style={{margin: "auto 0"}}>
          <ConnectButton/>
        </div>
        <div style={{ margin: "auto 0" }}>
          <button className="text-md no-underline text-white hover:text-blue-dark"> <a href="https://evmexplorer.pwrlabs.io/address/0xa9BD070381aaf9D73f7D20390A297CA4F76c37ec/contracts#address-tabs">Verified Contract on Blockscout </a></button>
        </div>
      </nav>
    </>
  );
};
