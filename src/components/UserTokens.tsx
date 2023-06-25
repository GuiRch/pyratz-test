import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { getBalance } from "~/utils/getBalance";

interface Token {
  name: string | null;
  balance: number | null;
  symbol: string | null;
  image: string | null;
}

const UserTokens = () => {
  const [isConnected, setIsConnected] = useState(false);
  // const [tokens, setTokens] = useState([]);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const account = useAccount();

  useEffect(() => {
    const isConnected = account.isConnected;
    setIsConnected(isConnected);
  }, [account]);

  useEffect(() => {
    if (isConnected) {
      setIsLoading(true);
      const address = account.address;
      const getUserBalance = async (address: string) => {
        const tokens = await getBalance(address);
        if (tokens) {
          setTokens(tokens.slice(0,3));
        }
      };
      getUserBalance(address!);
      setIsLoading(false);
    }
  }, [isConnected]);

  const capitalizeFirstLetter = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="flex flex-1 flex-col rounded shadow-sm p-2">
      <div className="align-center flex flex-row gap-2">
        <span role="img" aria-label="heavy-dollar-sign">
          💲
        </span>
        <h1 className="text-base font-bold">Tokens in my wallet</h1>
      </div>
      {!isConnected ? (
        <p className="mt-2 text-base font-semibold text-gray-400">
          Connectez vous pour voir vos token
        </p>
      ) : isLoading ? (
        <p className="mt-2 text-base font-semibold text-gray-400">
          Chargement des données
        </p>
      ) : (
        <table>
          <tbody>
            {tokens.map((val, key) => (
              <tr key={key} className="h-10">
                <td className="text-xs font-normal text-gray-500">{key + 1}</td>
                <td>
                  <div className="align-center ml-4 flex gap-2">
                  {val.image && typeof val.image === "string" && (
                    <img className="h-5 w-5 rounded-full" src={val.image} />
                  )}
                    {/* <img className="h-5 w-5 rounded-full" src={val.image} /> */}
                    <span className="text-sm font-semibold">
                      {capitalizeFirstLetter(val.name!)}
                    </span>
                    <span className="text-sm text-gray-500">{val.symbol}</span>
                  </div>
                </td>
                <td className="text-xs font-bold">€00,00</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTokens;
