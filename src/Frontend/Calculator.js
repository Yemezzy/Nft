import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { useState } from 'react';

const Calculator = () => {

const [floor, setFloor] = useState("")
  const [price, setPrice] = useState("0")
  const [chain, setChain] = useState("")
  
  const getResult = () => {
        if ((chain == "Solana Chain") & floor <= 0.9) {
          setPrice("Not valued");
        }
        if ((chain == "Solana Chain") & floor >= 1) {
          setPrice("0.02Sol");
        }
    if (chain == "Solana Chain" & floor >= 6) {
       setPrice("0.05Sol");
    }
    if (chain == "Solana Chain" & floor >= 10) {
       setPrice("0.09Sol");
    }
    if (chain == "Solana Chain" & floor >= 20) {
       setPrice("0.13Sol");
    }
    if (chain == "Solana Chain" & floor >= 26) {
       setPrice("0.17Sol");
    }
    if (chain == "Solana Chain" & floor >= 30) {
       setPrice("0.25Sol");
    }
    if (chain == "Solana Chain" & floor >= 36) {
       setPrice("0.3Sol");
    }
    if (chain == "Solana Chain" & floor >= 40) {
       setPrice("0.42Sol");
    }
    if ( floor == "") {
      if (chain == "Solana Chain" & floor >= 46) {
         setPrice("0.45Sol");
      }
      if (chain == "Solana Chain" & floor >= 50) {
         setPrice("0.6Sol");
      }
       setPrice("");
    }


        if ((chain == "Ethereum Chain") & (floor <= 0.01)) {
          setPrice("Not valued");
        }
        if ((chain == "Ethereum Chain") & (floor >= 0.02)) {
          setPrice("0.0008Eth");
        }
    if ((chain == "Ethereum Chain") & (floor >= 0.08)) {
      setPrice("0.0013Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.13)) {
      setPrice("0.0021Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.2)) {
      setPrice("0.0032Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.27)) {
      setPrice("0.0038Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.38)) {
      setPrice("0.0042Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.5)) {
      setPrice("0.005Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.63)) {
      setPrice("0.0062Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 0.8)) {
      setPrice("0.008Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 1)) {
      setPrice("0.009Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 1.7)) {
      setPrice("0.0096Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 2.2)) {
      setPrice("0.015Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 2.8)) {
      setPrice("0.017Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 3.5)) {
      setPrice("0.022Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 5)) {
      setPrice("0.025Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 6.9)) {
      setPrice("0.031Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 10)) {
      setPrice("0.038Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 15)) {
      setPrice("0.042Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 17)) {
      setPrice("0.046Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 20)) {
      setPrice("0.05Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 25)) {
      setPrice("0.055Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 27)) {
      setPrice("0.057Eth");
    }
  
    if ((chain == "Ethereum Chain") & (floor >= 30)) {
      setPrice("0.062Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 40)) {
      setPrice("0.07Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 60)) {
      setPrice("0.1Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 80)) {
      setPrice("0.2Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 90)) {
      setPrice("0.25Eth");
    }
    if ((chain == "Ethereum Chain") & (floor >= 100)) {
      setPrice("0.31Eth");
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

          <div className="flex mt-10 md:mt-20 gap-7 md:gap-10">
            <img
              className="w-16 md:w-[20%]"
              src="https://opensea.io/static/images/logos/opensea-logo.svg"
              alt=""
            />
            <img
              className="w-16 md:w-[20%]"
              src="https://ord.cdn.magiceden.dev/static_resources/ME+logo.png"
              alt=""
            />
            <img
              className="w-16 md:w-[20%]"
              src="https://imgs.blur.io/_assets/homepage/logo.png"
              alt=""
            />
            <img
              className="w-16 md:w-[20%]"
              src="https://s2.coinmarketcap.com/static/img/coins/200x200/17081.png"
              alt=""
            />
          </div>
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
              {/* <option value="Polygon Chain">Polygon Chain</option>
              <option value="Bnb Chain">Bnb Chain</option> */}
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
              className="w-full uppercase font-semibold bg-[#1E2F3F] text-white h-[3rem] -3 outline-none rounded-md px-2"
            >
              Calculate
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