import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "100%",
        fontWeight: 600,
        fontSize: 15,
        padding: 10
      }}
    >
      <div className="flex items-center">
        <img src="./images/Coinmarketcap.png" className="w-45 mr-7 h-14" />
        <div className="flex gap-5">
          <span>Crypto-Monnaies</span>
          <span>Plateforme d'échanges</span>
          <span>Communauté</span>
          <span>Produits</span>
          <span>Apprendre</span>
        </div>
      </div>
      <ConnectButton label="Connect your wallet" />
    </div>
  );
};

export default Header;
