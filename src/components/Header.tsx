import { React } from 'react';

const Header = () => {
    return(
        <div style={{display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '100%'}}>
            <img src="./images/Coinmarketcap.png" style={{widht: 50, height: 50}}/>
            <span>Crypto-Monnaies</span>
            <span>Plateforme d'échanges</span>
            <span>Communauté</span>
            <span>Produits</span>
            <span>Apprendre</span>
            <button>Connect your wallet</button>
        </div>
    )
}

export default Header;