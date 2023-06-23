import useSWR from "swr";
import axios from "axios";
import trends from "trend.json";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

const Trends = () => {
  // const { data: trends, error } = useSWR(
  //   "https://api.coingecko.com/api/v3/search/trending",
  //   fetcher
  // );

  // if (error) {
  //   return <div>Une erreur s'est produite lors du chargement des données.</div>;
  // }

  let top3Coins = [];

  try {
    top3Coins = trends.coins.slice(0, 3);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de l'accès à trends.coins :",
      error
    );
  }

  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="flex flex-1 flex-col rounded shadow-sm p-2">
      <div className="align-center flex flex-row gap-2">
        <span role="img" aria-label="fire">
          🔥
        </span>
        <h1 className="text-base font-bold">Tendances</h1>
      </div>

      {!trends ? (
        <div>Chargement en cours...</div>
      ) : (
        <table>
          <tbody>
            {top3Coins.map((val, key) => (
              <tr key={key} className="h-10">
                <td className="text-xs font-normal text-gray-500">{key + 1}</td>
                <td>
                  <div className="align-center ml-4 flex gap-2">
                    <img
                      className="h-5 w-5 rounded-full"
                      src={val.item.thumb}
                    />
                    <span className="text-sm font-semibold">
                      {capitalizeFirstLetter(val.item.id)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {val.item.symbol}
                    </span>
                  </div>
                </td>
                <td className="text-xs font-normal text-gray-500">€00,00</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Trends;
