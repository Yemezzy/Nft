import React from 'react'
import {FaWallet} from 'react-icons/fa'
import { useState } from 'react';
import { Link } from "react-router-dom";


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
      <div className="px-3 md:px-10 py-5 h-full">
        <div className="md:grid grid-cols-2">
          <div className="md:py-10 py-5">
            <p className="md:text-5xl md:hidden block text-2xl font-bold uppercase">
              Earn crypto with NFT while you sleep
            </p>
            <p className="text-xl mt-3 md:mt-5 mr-16 font-semibold">
              Staking puts your NFT to work, with interest rates as high as 11%
              APR.
            </p>

            <Link to="/">
              <button className="md:mt-10 mt-3 md:px-10 px-7 py-3 md:py-5 bg-[#1E2F3F] text-white text-xl rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
          <div className=" h-full  md:p-5  md:pl-10">
            <section className="grid gap-2 md:w-[75%] grid-cols-2">
              <div className="border-2 bg-1 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-2 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-3 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-4 h-[18vh] md:h-[30vh] rounded-lg"></div>
            </section>
            <div className="sticky md:block hidden bg-5 w-[35%] h-[18vh] md:h-[30vh] rounded-lg jjj"></div>
          </div>

          <div className="md:py-10 py-5 md:block hidden">
            <p className="md:text-5xl text-2xl font-bold uppercase">
              Earn crypto with NFT while you sleep
            </p>
            <p className="text-xl mt-3 md:mt-5 mr-16 font-semibold">
              Staking puts your NFT to work, with interest rates as high as 11%
              APR.
            </p>

            <Link to="/">
              <button className="md:mt-10 mt-3 md:px-10 px-7 py-3 md:py-5 bg-[#1E2F3F] text-white text-xl rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="md:mt-20 mt-7">
          <p className="md:text-6xl text-3xl font-bold md:text-center md:font-semibold">
            {" "}
            How Does It Work?
          </p>
          <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
            When most people think of making money from NFTs (non-fungible
            tokens), they usually imagine trading. That means buying an NFT at a
            low price and hoping to sell it at a higher price later on.
          </p>
          <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
            But what if your NFTs don’t increase in price over time? Then your
            money is stuck when it could be earning a return elsewhere.
            Thankfully, there’s a new way to earn passive income by staking
            NFTs.
          </p>
          <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
            Staking lets you keep in your NFT assets on trading platforms and
            receive rewards without having to sell anything from your
            collection.
          </p>
          <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
            <span className="text-red-500">Note: </span> Staking rewards will
            vary based on the staking platform and the particular collection
            that your NFTs are a part of. Different NFTs will offer different
            staking rewards, and some NFTs aren't able to be staked at all.
          </p>
        </div>

        <div className="md:mt-20 mt-7 md:grid grid-cols-2  border-y-2 border-[#818181]">
          <section className="md:pt-20 pt-5">
            <p className="mt-5 text-3xl md:mx-10 font-bold ">REWARDS</p>

            <p className="mt-5 md:text-xl md:mx-10">
              In order to get rewards for staking your NFTs, you might need to
              stake them for weeks or months, depending on the specific platform
              and NFT collection.
            </p>
            <p className="mt-5 md:text-xl md:mx-10">
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

        <div className="md:mt-20 mt-7">
          <section className="md:flex  items-center justify-center">
            <p className="mb-5 md:hidden block md:text-xl md:mx-10">
              Staking lets you keep in your NFT assets on trading platforms and
              receive rewards without having to sell anything from your
              collection.
            </p>
            <img
              className="md:w-[70%] rounded-md"
              src="https://uploads-ssl.webflow.com/5f97f994ec86e8c0ddab6823/63288eed17c95ddd8dbf9abd_image2_2_11zon_5949c8907b839ff4c0e366a9696defd6_2000-p-1080.jpeg"
              alt=""
            />
            <p className="mt-5 md:text-xl md:mx-10 md:block hidden">
              Staking lets you keep in your NFT assets on trading platforms and
              receive rewards without having to sell anything from your
              collection.
            </p>

            {/* <Link to="/">
              <button>
              GET STARTED
            </button>
            </Link> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default StartPage