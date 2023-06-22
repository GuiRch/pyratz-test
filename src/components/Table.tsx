import useSWR from 'swr';
import axios from 'axios';
import cryptoData from 'coins.json';

// const fetcher = (url) => axios.get(url).then((res) => res.data);

const Table = () => {
//   const { data: cryptoData, error } = useSWR(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&price_change_percentage=1h%2C24h%2C7d',
//     fetcher
//   );

//   if (error) {
//     return <div>Une erreur s'est produite lors du chargement des données.</div>;
//   }


  return (
    <>
      {!cryptoData ? (
        <div>Chargement en cours...</div>
      ) : (
        <table >
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
              <tr key={key} className="h-20" >
                <td className="">{val.market_cap_rank}</td>
                <td>
                    <div className="flex">
                        <img className="w-5 h-5 rounded-full" src={val.image}/>
                        {val.id} {val.symbol.toUpperCase()}
                    </div>
                </td>
                <td>€{val.current_price.toFixed(2)}</td>
                <td>{val.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                <td>{val.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
                <td>{val.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
                <td>{val.market_cap.toLocaleString("en-US")} {val.symbol.toUpperCase()}</td>
                <td>{val.total_volume.toLocaleString("en-US")} {val.symbol.toUpperCase()}</td>
                <td>{val.circulating_supply.toLocaleString("en-US")} {val.symbol.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {console.log(cryptoData)} */}
    </>
  );
};

export default Table;

