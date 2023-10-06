import React from 'react'
import Navbar from './Navbar';


const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mt-10 mt-5 px-3 md:px-7">
        <section className="">
          <p className="md:text-3xl text-xl font-semibold uppercase">
           
            How to get started{" "}
          </p>

          <ul className="list-disc md:ml-10 ml-4 mt-3 md:mt-5">
            <li className="md:mb-2 md:text-xl font-medium">
              Generate a Staking Wallet.
            </li>
            <li className="md:mb-2 md:text-xl font-medium">Import the wallet to your MetaMask, TrustWallet or Phantom wallet.</li>
            
            <li className="md:mb-2 md:text-xl font-medium">Transfer the NFT you want to Stake to your Staking wallet.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default GetStarted