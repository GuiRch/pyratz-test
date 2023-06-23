// import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
// import nfts from "nfts.json";
import { ImCross } from "react-icons/im";
import { AiFillStar, AiFillPieChart } from "react-icons/ai";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const NFT = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [nft, setNft] = useState(null);
  const apiKey = process.env.ALCHEMY_API_KEY;

  const { data: nfts, error } = useSWR(
    `https://eth-mainnet.g.alchemy.com/nft/v3/qwOb1hi4gwhhhZWfzOv6YMdqWbuQkBKs/getNFTsForContract?contractAddress=0xC03Cc2a63F2CCC3C14b224Bdd6EF9E3c5b368F10&withMetadata=true&limit=4`,
    fetcher
  );

  const handleNFTDetails = (nft) => {
    if (!showDetails) {
      setNft(nft);
      setShowDetails(true);
    } else {
      setShowDetails(false);
      setNft(null);
    }
  };

  const NFTCard = ({ name, image, collection, address, contractDeployer }) => {
    return (
      <div
        className="flex cursor-pointer flex-col items-center gap-3 rounded p-1  hover:bg-blue-200"
        onClick={() =>
          handleNFTDetails({
            name: name,
            image: image,
            collection: collection,
            address: address,
            contractDeployer: contractDeployer,
          })
        }
      >
        <img
          src={image}
          className="mt-4 flex h-12 w-12 rounded-full"
          alt={name}
        />
        <div className="flex flex-col items-center gap-2">
          <span className="text-center text-xs font-semibold">{name}</span>
          <span className="text-center text-xs/[10px] font-normal">
            {collection}
          </span>
        </div>
      </div>
    );
  };

  const NFTCardDetails = () => {
    return (
      <div className="flex flex-1 flex-col">
        <div className="mr-1 mt-1 flex cursor-pointer justify-end">
          <ImCross onClick={() => handleNFTDetails()} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <span className="text-end text-xs">
              {nft.name} from {nft.collection}{" "}
            </span>
          </div>
          <img
            src={nft.image}
            className="flex h-14 w-14 justify-center rounded-full"
            alt={nft.name}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-xs font-bold">Address :</span>
              <span className="ellipsis text-end text-xs">{nft.address}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold">Deployer :</span>
              <span className="ellipsis text-end text-xs">
                {nft.contractDeployer}
              </span>
            </div>
          </div>
        </div>
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
            address={nft.contract.address}
            contractDeployer={nft.contract.contractDeployer}
          />
        ));
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col rounded shadow-sm p-2">
      {!showDetails ? (
        <>
          <div className="align-center flex flex-row gap-2">
            <span role="img" aria-label="clock">
              🕔
            </span>
            <h1 className="text-base font-bold">NFT in my wallet</h1>
          </div>
          <div className="flex gap-2">{renderNFTCards()}</div>
        </>
      ) : (
        <NFTCardDetails></NFTCardDetails>
      )}
    </div>
  );
};

export default NFT;
