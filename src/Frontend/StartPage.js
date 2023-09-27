import React from 'react'
import {FaWallet} from 'react-icons/fa'
import { useState } from 'react';


const StartPage = () => {

  const [wallet, SetWallet] = useState("");
  const [rest, SetRest] = useState("Connect Wallet");


  async function requestAccount() {
    console.log("Requesting Account......");
    
    if (window.ethereum) {
      console.log("dected");
      try {
        const account = await window.ethereum.request({
          method:"eth_requestAccounts"
        })
        SetWallet(account[0])
       SetRest("....")
        console.log(account);
      } catch (error) {
        console.log("Error Connecting.....");
      }
    } else {
      console.log("not dected");
    }
}

  return (
    <div className="">
      <nav className="py-3 px-5 flex items-center shadow-md justify-between">
        <section className="flex gap-1 items-center">
          <img
            src="https://uploads-ssl.webflow.com/5f97f99484eaeb6055da651e/5f9882836312681e14e106ed_logo.svg"
            className="App-logo md:w-12 w-10"
            alt="logo"
          />

          <section className=" text-[#1E2F3F]">
            <p className="text-xs md:text-sm mt-2 font-bold">TAKE</p>
            <p className="md:text-lg mmc font-extrabold">NFT</p>
          </section>
        </section>

        <ul className="flex gap-5 mr-7 font-bold items-center">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <button
            className="text-white bg-[#1E2F3F] flex gap-1 items-center p-2 text-sm rounded-md"
            onClick={requestAccount}
          >
            <FaWallet />
            {wallet.slice(0, wallet.length - 37)}
            {rest}
            {wallet.slice(wallet.length - 4, wallet.length)}
          </button>
        </ul>
      </nav>

      <div className="px-10 py-5 h-full">
        <div className="grid grid-cols-2">
          <div className=" h-full p-5 pl-10">
            <section className="grid gap-2 w-[75%] grid-cols-2">
              <div className="border-2 bg-1 h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-2 h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-3 h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-4 h-[30vh] rounded-lg"></div>
            </section>
            <div className="sticky bg-5 w-[35%] h-[30vh] rounded-lg jjj"></div>
          </div>

          <div className="py-10">
            <p className="text-5xl font-bold uppercase">
              Earn crypto with NFT while you sleep
            </p>
            <p className="text-xl mt-5 mr-16 font-semibold">
              Staking puts your NFT to work, with interest rates as high as 11%
              APR.
            </p>

            <button className="mt-10 px-10 py-5 bg-[#1E2F3F] text-white text-xl rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-6xl text-center font-semibold">
            {" "}
            How Does It Work?
          </p>
          <p className="mt-5 text-xl mx-10">
            When most people think of making money from NFTs (non-fungible
            tokens), they usually imagine trading. That means buying an NFT at a
            low price and hoping to sell it at a higher price later on.
          </p>
          <p className="mt-5 text-xl mx-10">
            But what if your NFTs don’t increase in price over time? Then your
            money is stuck when it could be earning a return elsewhere.
            Thankfully, there’s a new way to earn passive income by staking
            NFTs.
          </p>
          <p className="mt-5 text-xl mx-10">
            Staking lets you keep in your NFT assets on trading platforms and
            receive rewards without having to sell anything from your
            collection.
          </p>
          <p className="mt-5 text-xl mx-10">
            <span className="text-red-500">Note: </span> Staking rewards will
            vary based on the staking platform and the particular collection
            that your NFTs are a part of. Different NFTs will offer different
            staking rewards, and some NFTs aren't able to be staked at all.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2  border-y-2 border-[#818181]">
          <section className="pt-20">
            <p className="mt-5 text-3xl mx-10 font-bold ">REWARDS</p>

            <p className="mt-5 text-xl mx-10">
              In order to get rewards for staking your NFTs, you might need to
              stake them for weeks or months, depending on the specific platform
              and NFT collection.
            </p>
            <p className="mt-5 text-xl mx-10">
              Usually, your staking reward isn’t prorated, so if you pull your
              NFT out early, you get nothing for all of the time that it was
              staked up.
            </p>
          </section>

          <section>
            <img
              src="https://trustwallet.com/assets/images/collectibles_preview2.png"
              alt=""
            />
          </section>
        </div>

        <div className="mt-20">
          <section className="flex  items-center justify-center">
            <img
              className="w-[70%] rounded-md"
              src="https://uploads-ssl.webflow.com/5f97f994ec86e8c0ddab6823/63288eed17c95ddd8dbf9abd_image2_2_11zon_5949c8907b839ff4c0e366a9696defd6_2000-p-1080.jpeg"
              alt=""
            />
            <p className="mt-5 text-xl mx-10">
              Staking lets you keep in your NFT assets on trading platforms and
              receive rewards without having to sell anything from your
              collection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default StartPage