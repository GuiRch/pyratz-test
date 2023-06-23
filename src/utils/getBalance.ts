// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export const getBalance = async (address) => {
  try {
    const balances = await alchemy.core.getTokenBalances(address);
  
    let i = 1;
    let tokens = []
  
    for (let token of balances.tokenBalances) {
      // Get balance of token
      let balance = token.tokenBalance;
  
      // Get metadata of token
      const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
      console.log(metadata)
  
      // Compute token balance in human-readable format
      balance = balance / Math.pow(10, metadata.decimals);
      balance = balance.toFixed(2);
  
      // Print name, balance, and symbol of token
      console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`);
      tokens.push({
        name: metadata.name,
        balance: balance,
        symbol: metadata.symbol,
        image: metadata.logo,
      })
    }

    return tokens;
  } catch (error) {
    console.log(error);
  }

};
