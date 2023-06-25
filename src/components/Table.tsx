// Fetch Data
import useSWR from "swr";
import axios from "axios";
// import cryptoData from "coins.json";

// Icons
import { AiFillStar, AiFillPieChart } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Table = () => {
  const { data: cryptoData, error } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&price_change_percentage=1h%2C24h%2C7d",
    fetcher
  );

  if (error) {
    return <div>Une erreur s'est produite lors du chargement des données.</div>;
  }

  const capitalizeFirstLetter = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  return (
    <>
      {!cryptoData ? (
        <div>Chargement en cours...</div>
      ) : (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="text-start text-xs font-bold">#</th>
              <th className="text-start text-xs font-bold">Nom</th>
              <th className="text-end text-xs font-bold">Prix</th>
              <th className="text-end text-xs font-bold">1h %</th>
              <th className="text-end text-xs font-bold">% 24h</th>
              <th className="text-end text-xs font-bold">7d %</th>
              <th className="flex justify-end font-bold">
                <div className="flex items-center gap-2">
                  <span className="text-xs">Cap. Marché</span>
                  <BsFillInfoCircleFill className="text-slate-500" />
                </div>
              </th>
              <th className="text-end text-xs font-bold">Volume (24 h)</th>
              <th className="text-end text-xs font-bold">
                Offre en Circulation
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((val: any, key: number) => (
              <tr key={key} className="h-20">
                <td className="text-xs font-medium text-slate-500">
                  {val.market_cap_rank}
                </td>
                <td>
                  <div className="ml-4 flex items-center gap-1">
                    <img className="h-6 w-6 rounded-full" src={val.image} />
                    <span className="text-sm font-semibold">
                      {capitalizeFirstLetter(val.id)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {val.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="text-end text-sm font-semibold text-slate-800">
                  €{val.current_price.toFixed(2)}
                </td>
                <td
                  className={`text-end text-sm font-semibold ${
                    val.price_change_percentage_1h_in_currency > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {val.price_change_percentage_1h_in_currency > 0 ? (
                    <span style={{ fontSize: "7px" }}>K</span>
                  ) : (
                    <span style={{ fontSize: "7px" }}>H</span>
                  )}
                  {Math.abs(
                    val.price_change_percentage_1h_in_currency.toFixed(2)
                  )}
                  %
                </td>
                <td
                  className={`text-end text-sm font-semibold ${
                    val.price_change_percentage_24h_in_currency > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {val.price_change_percentage_24h_in_currency > 0 ? (
                    <span style={{ fontSize: "7px" }}>K</span>
                  ) : (
                    <span style={{ fontSize: "7px" }}>H</span>
                  )}
                  {Math.abs(
                    val.price_change_percentage_24h_in_currency.toFixed(2)
                  )}
                  %
                </td>
                <td
                  className={`text-end text-sm font-semibold ${
                    val.price_change_percentage_7d_in_currency > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {val.price_change_percentage_7d_in_currency > 0 ? (
                    <span style={{ fontSize: "7px" }}>K</span>
                  ) : (
                    <span style={{ fontSize: "7px" }}>H</span>
                  )}
                  {Math.abs(
                    val.price_change_percentage_7d_in_currency.toFixed(2)
                  )}
                  %
                </td>
                <td className="text-end text-sm font-semibold text-slate-800">
                  {val.market_cap.toLocaleString("en-US")}{" "}
                  {val.symbol.toUpperCase()}
                </td>
                <td className="text-end text-sm font-semibold text-slate-800">
                  {val.total_volume.toLocaleString("en-US")}{" "}
                  {val.symbol.toUpperCase()}
                </td>
                <td className="text-end text-sm font-semibold text-slate-800">
                  {val.circulating_supply.toLocaleString("en-US")}{" "}
                  {val.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
