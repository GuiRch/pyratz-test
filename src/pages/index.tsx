import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Inter } from "next/font/google";
// Components
import Header from "~/components/Header.tsx";
import Table from "~/components/Table.tsx";
import Trends from "~/components/Trends.tsx";
import NFT from "~/components/NFT.tsx";
import UserTokens from "~/components/UserTokens.tsx";
import { AiFillStar, AiFillPieChart } from "react-icons/ai";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PyratzCap</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center gap-10 bg-gradient-to-b from-[#F8FAFD] to-[#FFFFFF]">
        <Header></Header>
        <div className="flex flex-col gap-10 " style={{width: "75%"}}>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">
              Top 100 des Crypto-monnaies par capilalisation de marché
            </h1>
            <span className="text-xs font-normal text-stone-500">
              La capitalisation boursièrere globale ...
            </span>
          </div>
          <div className="flex items-stretch justify-between gap-10 pl-5 pr-5 ">
            <Trends className="flex flex-1"></Trends>
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

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
