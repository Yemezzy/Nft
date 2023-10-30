import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const GetStarted = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mt-10 mt-5 md:grid grid-cols-2 px-3 md:px-7">
        <section className=" ">
          <p className="md:text-3xl text-xl font-semibold uppercase">
            How to get started
          </p>

          <ul className="list-disc md:ml-10 ml-4 mt-3 md:mt-5">
            <li className="md:mb-2 md:text-xl font-medium">
              <Link to="/" className=" underline text-blue-600">
                Generate a Staking Wallet.
              </Link>
            </li>

            <li className="md:mb-2 md:text-xl font-medium">
              Request for Access Code.
            </li>
            <li className="md:mb-2 md:text-xl font-medium">
              Import the wallet to your MetaMask, TrustWallet or Phantom wallet.
            </li>

            <li className="md:mb-2 md:text-xl font-medium">
              Transfer the NFT you want to Stake to your Staking wallet.
            </li>
          </ul>

          <p className="md:text-3xl mt-7 md:mt-10 text-xl font-semibold uppercase">
            How will i receive my profits?
          </p>

          <p className="mt-5 mb-3 md:ml-7  md:text-xl font-medium">
            * Profits are being made depending ont the worth of your NFT, If
            your NFT's is valued and the worth is high in the space you earn
            more.{" "}
            <Link
              to="/calculator"
              className="text-base underline text-blue-600"
            >
              Calculator
            </Link>
          </p>

          <p className=" mb-3 md:ml-7  md:text-xl font-medium">
            * Also instead of generating a token for pofits, we made it easier
            to earn profit depending on the network of your NFT.
          </p>

          <p className=" mb-2 md:ml-7  md:text-xl font-medium">
            * If you are staking an NFT build in the Solana, Etherueum, Polygon
            chain, your profits will be earn on the chain, If you stake an
            Etheruem NFT profits will be earned also in Etheruem.
          </p>

          <p className="text-sm font-medium mt-5">
            <span className="text-red-600">Note : </span>Follow the given
            procedures in order to ensure a successful staking and rewards.
          </p>
        </section>

        <section className="md:mt-0 mt-10">
          <img
            src="https://uploads-ssl.webflow.com/60098c5b3e6c5a3d3125082e/6107e3478dfb19b39ab458cb_collectible-nft.png"
            alt=""
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default GetStarted