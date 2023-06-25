// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";
// import { Inter } from "next/font/google";
// Components
import Header from "~/components/Header";
import Table from "~/components/Table";
import Trends from "~/components/Trends";
import NFT from "~/components/NFT";
import UserTokens from "~/components/UserTokens";
// Fetch data
import useSWR from "swr";
import axios from "axios";
// Icons
import { AiFillStar, AiFillPieChart } from "react-icons/ai";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const {
    data: globalMarket,
    error,
  } = useSWR("https://api.coinpaprika.com/v1/global", fetcher);

  return (
    <>
      <Head>
        <title>PyratzCap</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center gap-10 bg-gradient-to-b from-[#F8FAFD] to-[#FFFFFF]">
        <Header></Header>
        <div className="flex flex-col gap-10 " style={{ width: "75%" }}>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">
              Top 100 des Crypto-monnaies par capilalisation de marché
            </h1>

            {!globalMarket ? null : error ? (
              <span>No data</span>
            ) : (
              <span className="text-sm font-normal text-slate-400">
                La capitalisation boursièrere globale est de
                <span>
                  {" "}
                  <span className="font-bold">
                    ${globalMarket.market_cap_usd.toLocaleString("en-US")},
                  </span>
                </span>
                {globalMarket.market_cap_change_24h >= 0 ? (
                  <span>
                    {" "}
                    soit une hausse de{" "}
                    <span className="font-bold text-green-500">
                      <span style={{ fontSize: "7px" }}>K</span>
                      {globalMarket.market_cap_change_24h}%{" "}
                    </span>
                  </span>
                ) : (
                  <span>
                    {" "}
                    soit une baisse de{" "}
                    <span className="font-bold text-red-500">
                      <span style={{ fontSize: "7px" }}>H</span>
                      {Math.abs(globalMarket.market_cap_change_24h)}%{" "}
                    </span>
                  </span>
                )}
                au cours des dernières 24h.
              </span>
            )}
          </div>
          <div className="flex items-stretch justify-between gap-5 pl-5 pr-5 ">
            <Trends></Trends>
            <NFT></NFT>
            <UserTokens></UserTokens>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-16">
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <AiFillStar className="text-slate-400" />
                  <span className="text-xs font-bold">Liste de suivi</span>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillPieChart className="text-slate-400" />
                  <span className="text-xs font-bold">Portfolio</span>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-xs font-bold text-blue-500">
                  Cryptomonnaies
                </span>
                <span className="text-xs font-bold text-slate-500">Memes</span>
                <span className="text-xs font-bold text-slate-500">
                  Bitcoin ecosystem
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Liquid Staking Derivaties
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Metaverse
                </span>
              </div>
            </div>
            <Table></Table>
          </div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
