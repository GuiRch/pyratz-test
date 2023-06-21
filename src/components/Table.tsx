import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
    const [cryptoData, setCryptoData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&price_change_percentage=1h%2C24h%2C7d"
            );
            setCryptoData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);

  const data = [
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      daily: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      daily: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      daily: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      daily: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      daily: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
  ];

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>1h %</th>
            <th>% 24h</th>
            <th>7d %</th>
            <th>Cap. Marché</th>
            <th>Volume (24 h)</th>
            <th>Offre en Circulation</th>
          </tr>
          {cryptoData.map((val, key) => (
            <tr key={key}>
              <td>{val.market_cap_rank}</td>
              <td>{val.id} {val.symbol}</td>
              <td>{val.current_price}</td>
              <td>{val.price_change_percentage_1h_in_currency}</td>
              <td>{val.price_change_percentage_24h_in_currency}</td>
              <td>{val.price_change_percentage_7d_in_currency}</td>
              <td>{val.market_cap}</td>
              <td>{val.total_volume}</td>
              <td>{val.circulating_supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(cryptoData)}
    </div>
  );
};

export default Table;
