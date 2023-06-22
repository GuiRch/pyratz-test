import useSWR from "swr";
import axios from "axios";

const NFT = () => {
  const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const NFTCard = () => {
    return(
    <div className="flex flex-col items-center gap-3">
        <img src='./images/nft-icon-default.png' className='w-10 h-10 rounded-full mt-4'/>
        <span className="font-semibold text-xs">NFT #1</span>
        <span className="font-normal text-xs/[10px]">Collection name</span>
    </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row align-center gap-2">
        <span role="img" aria-label="clock">
        🕔
        </span>
        <h1 className="text-base font-bold">NFT in my wallet</h1>
      </div>
      <div className="flex gap-2">
        <NFTCard></NFTCard>
        <NFTCard></NFTCard>
        <NFTCard></NFTCard>
        <NFTCard></NFTCard>
      </div>
    </div>
  );
};

export default NFT;
