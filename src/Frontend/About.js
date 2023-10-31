import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="md:px-0 px-2">
        <div className="mt-10 md:mt-20">
          <p className="text-center text-sm md:text-base font-medium">
            About Us
          </p>
          <p className="text-center font-bold text-xl md:text-3xl md:mt-3">
            Meet our team
          </p>
          <p className="md:text-lg text-center md:mt-5 md:px-[20%]">
            Our philosophy is simple — hire a small team of passionate people
            motivated to add value and foster a culture that empowers the NFT
            community.
          </p>
        </div>

        <div className="md:flex justify-center mt-10 md:mt-20">
          <section className="text-center md:w-[20rem] flex flex-col  md:mr-20  items-center">
            <div className="md:w-[7rem] w-[5rem] flex flex-col justify-center items-center h-[5rem] md:h-[7rem] rounded-full border- border-black">
              <img
                className="w-full h-full rounded-full"
                src="https://img-cdn.magiceden.dev/rs:fill:640:0:0/plain/https://nftstorage.link/ipfs/bafkreihtudxcv5vehqtamtibxfovqyfwqcsu53vi6mhzqpmj2rsjr677li"
                alt=""
              />
            </div>
            <p className="text-center mt-2 font-bold">Jimmy Dev</p>
            <p className="text-center text-sm font-medium">Founder</p>
            <p className="mx-5 text-sm font-light md:mt-">
              Web3 Enthusiast, Verified Forex, Crypto and NFT trader.
            </p>
          </section>

          <section className="text-center md:mt-0 mt-5 md:w-[20rem] flex flex-col items-center">
            <div className="md:w-[7rem] w-[5rem] h-[5rem] md:h-[7rem] rounded-full text-center border- border-black">
              <img
                className="w-full h-full rounded-full"
                src="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_96,q_auto/https://d2ekshiy7r5vl7.cloudfront.net/users/1687473064-emily_xie_mem_qilin_profile.png"
                alt=""
              />
            </div>
            <p className="text-center mt-2 font-bold">Louis Emily</p>
            <p className="text-center text-sm font-medium">Co-Founder</p>
            <p className="mx-5 font-light text-sm">
              Founder of Memories of Qilin
            </p>
          </section>
        </div>
      </div>

      <div className="mt-10 md:mt-20 px-5 md:px-10">
        <p className=" font-medium text-blue-600">About Us</p>
        <p className="text-xl md:text-2xl font-semibold">Our Goal</p>

        <p className="md:mt-3 mt-2 text-sm md:text-lg">
          We are a staking platform, trying to make it easier for holders of
          unique nft collections benefit from their NFT. Most people in the NFT
          space intend to hold their assets for a long period of time, instead
          of just leaving your nft domant, we generate this platform to help you
          earn from it daily. Unlike other staking platforms where tokens are
          been generated as profits, here profits are been made in the
          network/chain of your nft which makes it easier for withdrawal.
        </p>
      </div>

      <div className=" mt-10 px-5 md:px-10">
        <p className=" font-medium text-blue-600">About Us</p>
        <p className="text-xl md:text-2xl font-semibold">About Our Founders</p>

        <p className="md:mt-3 mt-2 text-sm md:text-lg">
          We have been in the web3 space for up to 7 years now, Also i have
          created and Collaborated with many successful NFTs community, We
          thought of this and realized it is the first in the space and will
          also be the best. I and my Team have been on this for 2 years now,
          trying to gather investors from every part of the globe. We are happy
          to finally lunch our official web. Safe staking!, Guaranteed Profits!.
        </p>
      </div>
      {/* <div className="md:mt-10 mt-7">
        <p className="md:text-4xl text-3xl font-bold md:mx-10 md:font-semibold">
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
          Thankfully, there’s a new way to earn passive income by staking NFTs.
        </p>
        <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
          Staking lets you keep in your NFT assets on trading platforms and
          receive rewards without having to sell anything from your collection.
        </p>
        <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
          <span className="text-red-500">Note: </span> Staking rewards will vary
          based on the staking platform and the particular collection that your
          NFTs are a part of. Different NFTs will offer different staking
          rewards, and some NFTs aren't able to be staked at all.
        </p>
          </div>
          
      <div className="md:mt-10 mt-7">
        <p className="md:text-4xl text-3xl font-bold md:mx-10 md:font-semibold">
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
          Thankfully, there’s a new way to earn passive income by staking NFTs.
        </p>
        <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
          Staking lets you keep in your NFT assets on trading platforms and
          receive rewards without having to sell anything from your collection.
        </p>
        <p className="md:mt-5 mt-3 md:text-xl md:mx-10">
          <span className="text-red-500">Note: </span> Staking rewards will vary
          based on the staking platform and the particular collection that your
          NFTs are a part of. Different NFTs will offer different staking
          rewards, and some NFTs aren't able to be staked at all.
        </p>
      </div> */}

      <Footer />
    </div>
  );
}

export default About