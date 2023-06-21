import { React } from "react";

const Table = () => {
  const data = [
    {
      rank: 1,
      name: "Bitcoin",
      price: 19,
      hourly: "",
      dayly: "0.7%",
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
      dayly: "0.7%",
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
      dayly: "0.7%",
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
      dayly: "0.7%",
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
      dayly: "0.7%",
      weekly: "1.13%",
      marketCap: "40000",
      volume: "4000",
      supply: "10 BTC",
    },
  ];
  return (
    <div>
      <table>
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
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.rank}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.hourly}</td>
              <td>{val.dayly}</td>
              <td>{val.weekly}</td>
              <td>{val.marketCap}</td>
              <td>{val.volume}</td>
              <td>{val.supply}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
