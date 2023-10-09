import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { useState } from 'react';

const Calculator = () => {

const [floor, setFloor] = useState("")
  const [price, setPrice] = useState("0")
  const [chain, setChain] = useState("")
  
  const getResult = () => {
        if ((chain == "Solana Chain") & floor <= 1) {
          setPrice("Not valued");
        }
    if (chain == "Solana Chain" & floor >= 5) {
       setPrice("0.05Sol");
    }
    if (chain == "Solana Chain" & floor >= 10) {
       setPrice("0.2Sol");
    }
    // if (chain == "Solana Chain" & floor == 1.2 || 1.3 || 1.4 || 1.5 ) {
    //    setPrice("0.06Sol");
    // }
    // if (chain == "Solana Chain" & floor ==  1.6 || 1.7 || 1.8 || 1.9 ) {
    //    setPrice("0.067Sol");
    // }
    if (chain == "Solana Chain" & floor >= 20) {
       setPrice("0.3Sol");
    }
    if (chain == "Solana Chain" & floor >= 30) {
       setPrice("0.5Sol");
    }

    if ( floor == "") {
       setPrice("0");
    }
    if ((chain == "Ethereum Chain") & (floor < 1)) {
      setPrice("0.4Eth");
    }
    // if ( floor < 1) {
    //   setPrice("0.02Eth");
    // } else {
    //   setPrice("0.005Eth")
    // }

  }

  return (
    <div>
      <Navbar />

      <div className="md:my-10 mt-5 px-7 md:grid grid-cols-2">
        <section className=" md:p-10">
          <p className="md:text-4xl text-2xl font-bold">
            Check the worth of your NFT for Staking
          </p>

          <p className="md:text-xl mt-2 md:mt-5">
            We don’t take a cut. You’ll get back all your staked NFT's along
            with your profits.
          </p>
        </section>

        <section className="flex justify-center">
          <div className="md:w-[25rem] mt-10 md:mt-0 shadow-sm rounded-lg border-[1E2F3F] border-2 p-5">
            <p className="text-center text-2xl font-bold">Staking calculator</p>
            <p className="text-center mb-5">
              Estimated earnings from current APR
            </p>

            <label htmlFor="" className="text-sm font-medium">
              NFT Name
            </label>
            <input
              type="text"
              className="w-full h-[3rem] mb-3 outline-none border-[#1E2F3F] border-2 rounded-md px-2"
            />
            <label htmlFor="" className="text-sm font-medium">
              NFT Network/Chain
            </label>
            <select
              
              onChange={(event) => setChain(event.target.value)}
              value={chain}
              name=""
              id=""
              className="w-full h-[3rem] mb-3 border-[#1E2F3F] outline-none border-2 rounded-md px-2"
            >
              <option value="">--- Select Chain ---</option>
              <option value="Solana Chain">Solana Chain</option>
              <option value="Ethereum Chain">Ethereum Chain</option>
              <option value="Polygon Chain">Polygon Chain</option>
              <option value="Bnb Chain">Bnb Chain</option>
            </select>

            <label htmlFor="" className="text-sm font-medium">
              Floor Price
            </label>
            <input
              onChange={(event) => setFloor(event.target.value)}
              value={floor}
              type="text"
              className="w-full h-[3rem] mb-3 outline-none border-[#1E2F3F] border-2 rounded-md px-2"
            />
            <input
              hidden
              value={chain}
              onChange={(event) => setFloor(event.target.value)}
              type="text"
              className="w-full h-[3rem] mb-3 outline-none border-[#1E2F3F] border-2 rounded-md px-2"
            />
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">Daily Earnings</p>
              <p className="text-sm font-bold">{price}</p>
            </div>

            <button
              onClick={getResult}
              type="text"
              className="w-full bg-[#1E2F3F] text-white h-[3rem] -3 outline-none rounded-md px-2"
            >
              Earn Now
            </button>
          </div>
        </section>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}

export default Calculator