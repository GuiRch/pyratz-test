import { Alchemy, Network } from "alchemy-sdk";

interface Token {
  name: string;
  balance: number | null;
  symbol: string;
  image: string;
}

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export const getBalance = async (address: string): Promise<Token[]> => {
  try {
    const balances = await alchemy.core.getTokenBalances(address);

    // let i = 1;
    const tokens: Token[] = [];

    for (const token of balances.tokenBalances) {
      // Get balance of token
      let balance: number | null = token.tokenBalance !== null ? Number(token.tokenBalance) : null;

      // Get metadata of token
      const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
      // console.log(metadata);

      // Compute token balance in human-readable format
      if (balance !== null && metadata.decimals) {
        balance = balance / Math.pow(10, metadata.decimals);
        balance = parseFloat(balance.toFixed(2));
      }

      // Print name, balance, and symbol of token
      // console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`);
      tokens.push({
        name: metadata.name !== null ? metadata.name : "",
        balance: balance,
        symbol: metadata.symbol !== null ? metadata.symbol : "",
        image: metadata.logo !== null ? metadata.logo: "",
      });
    }

    return tokens;
  } catch (error) {
    console.log(error);
    return [];
  }
};
