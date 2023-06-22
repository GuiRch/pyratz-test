import useSWR from "swr";
import axios from "axios";

const UserTokens = () => {
  const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div>
      <div className="flex flex-row align-center gap-2">
        <span role="img" aria-label="heavy-dollar-sign">
        💲
        </span>
        <h1 className="text-base font-bold">Tokens in my wallet</h1>
      </div>
      <p className="text-base font-semibold text-gray-400 mt-2">Connectez vous pour voir vos token</p>
    </div>
  );
};

export default UserTokens;
