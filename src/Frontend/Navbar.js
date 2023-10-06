import React from 'react'
import { FaBars, FaWallet } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {



    
  const [wallet, SetWallet] = useState("");
  const [rest, SetRest] = useState("Connect Wallet");

  async function requestAccount() {
    console.log("Requesting Account......");

    if (window.ethereum) {
      console.log("dected");
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        SetWallet(account[0]);
        SetRest("....");
        console.log(account);
      } catch (error) {
        console.log("Error Connecting.....");
      }
    } else {
      console.log("not dected");
    }
  }


  return (
    <div>
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

        <section className="flex justify-between">
          <ul className="md:flex hidden gap-5 mr-3 font-bold items-center">
            <Link to="/bnb">
              <li>Home</li>
            </Link>

            <Link to="/About ">
              <li>About</li>
            </Link>
            <Link to="/calculator ">
              <li>Calculator</li>
            </Link>
            <Link to="/get-started ">
              <li className="md:px-5 md:py-2 md:bg-[#1E2F3F] text-white rounded-md">
                Get Started
              </li>
            </Link>
          </ul>


              <FaBars className='md:hidden block'/>
           

          {/* <button
          className="text-white font-bold bg-[#1E2F3F] flex gap-1 items-center p-2 text-sm rounded-md"
          onClick={requestAccount}
        >
          <FaWallet />
          {wallet.slice(0, wallet.length - 37)}
          {rest}
          {wallet.slice(wallet.length - 4, wallet.length)}
        </button> */}
        </section>
      </nav>

    </div>
  );
}

export default Navbar