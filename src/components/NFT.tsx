import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
// import nfts from "nfts.json";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const NFT = () => {
    // const settings = {
    //   apiKey: process.env.ALCHEMY_API_KEY,
    //   network: Network.ETH_MAINNET,
    // };

    // const alchemy = new Alchemy(settings);

    // const [nfts, setNFTs] = useState([]);
    // const contractAddress = "0xC03Cc2a63F2CCC3C14b224Bdd6EF9E3c5b368F10";
    // const limit = 4;
  
    // useEffect(() => {
    //   const fetchNFTs = async () => {
    //     const settings = {
    //     apiKey: process.env.ALCHEMY_API_KEY,
    //       network: Network.ETH_MAINNET,
    //     };
    //     const alchemy = new Alchemy(settings);
  
    //     try {
    //       const response = await alchemy.nft.getNftsForContract(contractAddress, {
    //         limit: limit,
    //       });
  
    //       setNFTs(response.data);
    //     } catch (error) {
    //       console.error("Error fetching NFTs:", error);
    //     }
    //   };

    //   fetchNFTs();
    // }, []);

  const apiKey = process.env.ALCHEMY_API_KEY;

  const { data: nfts, error } = useSWR(
    `https://eth-mainnet.g.alchemy.com/nft/v3/qwOb1hi4gwhhhZWfzOv6YMdqWbuQkBKs/getNFTsForContract?contractAddress=0xC03Cc2a63F2CCC3C14b224Bdd6EF9E3c5b368F10&withMetadata=true&limit=4`,
    fetcher
  );

  const NFTCard = ({ name, image, collection }) => {
    return (
      <div className="flex flex-col items-center gap-3">
        <img src={image} className="mt-4 h-10 w-10 rounded-full" alt={name} />
        <span className="text-xs font-semibold">{name}</span>
        <span className="text-xs/[10px] font-normal">{collection}</span>
      </div>
    );
  };

  const renderNFTCards = () => {
    if (!nfts) {
      return (
        <span className="mt-2 text-base font-semibold text-gray-400">
          Une erreur s'est produite lors du chargement des données.
        </span>
      );
    } else {
      if (error) {
        return <div>Loading...</div>;
      } else {
        return nfts.nfts.map((nft, key) => (
          <NFTCard
            key={nft.tokenId}
            name={nft.name}
            collection={nft.contract.name}
            image={nft.image.thumbnailUrl}
          />
        ));
      }
    }
  };

  return (
    <div>
      <div className="align-center flex flex-row gap-2">
        <span role="img" aria-label="clock">
          🕔
        </span>
        <h1 className="text-base font-bold">NFT in my wallet</h1>
      </div>
      <div className="flex gap-2">{renderNFTCards()}</div>
    </div>
  );
};

export default NFT;