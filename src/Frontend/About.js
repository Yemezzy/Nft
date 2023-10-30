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
            motivated to add value and foster a culture that empowers the crypto
            community.
          </p>
        </div>

        <div className="md:flex justify-center mt-10 md:mt-20">
          <section className="text-center md:w-[20rem] flex flex-col  md:mr-20  items-center">
            <div className="md:w-[7rem] w-[5rem] flex flex-col justify-center items-center h-[5rem] md:h-[7rem] rounded-full border- border-black">
              <img
                className="w-full h-full rounded-full"
                src="https://media.discordapp.net/attachments/1148415728937083002/1159207022005330010/IMG_0784.png?ex=65302eab&is=651db9ab&hm=56e9303dfaf4963a23ad1afa5d2577984b6e1964279173c93a01f24045c1c3d7&=&width=448&height=423"
                alt=""
              />
            </div>
            <p className="text-center mt-2 font-bold">Well's Gabi</p>
            <p className="text-center text-sm font-medium">
              Chief Technology Officer
            </p>
            <p className="mx-5 text-sm font-light md:mt-2">
              Lead of technology and growth at CAR, UVM Comp Sci.
            </p>
          </section>

          <section className="text-center md:mt-0 mt-5 md:w-[20rem] flex flex-col items-center">
            <div className="md:w-[7rem] w-[5rem] h-[5rem] md:h-[7rem] rounded-full text-center border- border-black">
              <img
                className="w-full h-full rounded-full"
                src="https://media.discordapp.net/attachments/1148415728937083002/1159207036094005388/IMG_0774.jpg?ex=65302eae&is=651db9ae&hm=e3d85f1c55eb13cc9ddac5220c05adc4b23f090b78741a2c8d575b6685e41dcd&=&width=317&height=423"
                alt=""
              />
            </div>
            <p className="text-center mt-2 font-bold">Yel'Mee</p>
            <p className="text-center text-sm font-medium">
              Chief Technology Officer
            </p>
            <p className="mx-5 font-light md:mt-2 text-sm">
              Lead of technology and growth at CAR, UVM Comp Sci.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-10 md:mt-20 px-5 md:px-10">
        <p className=" font-medium text-blue-600">About Us</p>
        <p className="text-xl md:text-2xl font-semibold">
          Our Goal
        </p>

        <p className="md:mt-3 mt-2 text-sm md:text-lg">
          CryptoAssetRecovery.com was created to empower cryptocurrency owners
          to keep their assets safe. The company was founded in 2017 by Chris
          Brooks, a seasoned professional with a background in technology and a
          wealth of experience in the industry. He was previously the VP of
          Technology at Carescout and a programmer at Fidelity Investments.
        </p>

      </div>

      <div className=" mt-10 px-5 md:px-10">
        <p className=" font-medium text-blue-600">About Us</p>
        <p className="text-xl md:text-2xl font-semibold">About Our Founders</p>

        <p className="md:mt-3 mt-2 text-sm md:text-lg">
          CryptoAssetRecovery.com was created to empower cryptocurrency owners
          to keep their assets safe. The company was founded in 2017 by Chris
          Brooks, a seasoned professional with a background in technology and a
          wealth of experience in the industry. He was previously the VP of
          Technology at Carescout and a programmer at Fidelity Investments.
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