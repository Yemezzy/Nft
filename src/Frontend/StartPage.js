import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const StartPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
    <div className="">
      <motion.div className="box" />
      <Navbar />
      <div className="px-3 md:mt-10 md:px-10 py-5 h-full">
        <div className="md:grid grid-cols-2">
          <motion.div
            className="md:py-10 box py-5 md:hidden block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="md:text-5xl  text-2xl font-bold uppercase">
              Earn crypto with NFT while you sleep
            </p>
            <p className="text-xl mt-3 md:mt-5 mr-16 font-semibold">
              Staking puts your NFT to work, with interest rates as high as 11%
              APR.
            </p>
            {/* 
            <Link to="/">
              <button className=" md:mt-10 mt-3 md:px-10 px-7 py-3 md:py-5 bg-[#1E2F3F] text-white md:text-xl rounded-lg">
                Get Started
              </button>
            </Link> */}
          </motion.div>
          <div data-aos="flip-left" className=" h-full  md:p-5  md:pl-10">
            <section className="grid gap-2 md:w-[75%] grid-cols-2">
              <div className="border-2 bg-1 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-2 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-3 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-4 h-[18vh] md:h-[30vh] rounded-lg"></div>
            </section>
            
          </div>

          <motion.div
            className="md:py-10 py-5 md:block hidden box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="md:text-5xl text-2xl font-bold uppercase">
              Earn crypto with NFT while you sleep
            </p>
            <p className="text-xl mt-3 md:mt-5 mr-16 font-semibold">
              Staking puts your NFT to work, with interest rates as high as 11%
              APR.
            </p>

            <Link to="/get-started">
              <button className="md:mt-10 mt-3 md:px-10 px-7 py-3 md:py-5 bg-[#1E2F3F] text-white text-xl rounded-lg">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="mt-20">
          <p className="md:text-xl  md:pt-20 text-center  font-bold  md:font-semibold">
            Trusted Collaborations with
          </p>

          <div
            className="flex gap-2 box items-center box justify-center"
            data-aos="fade-up-right"
          >
            <img
              className="w-[25%] md:w-[12%] h-[25%]  rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/120px-MetaMask_Fox.svg.png"
              alt=""
            />
            <img
              className="w-[27%] md:w-[15%] rounded-full"
              src="https://play-lh.googleusercontent.com/-3uTwEsZDk2NEgRblDEfIIY7T-xAZfJPN5JzVKz7s94Ds8KrKCrSVHvkEuneJlUBekc=w240-h480-rw"
              alt=""
            />
            <img
              className="md:w-[10%] md:block hidden mr-5 w-[20%]  rounded-full"
              src="https://pbs.twimg.com/profile_images/1430879040156667904/NlbJjd-l_400x400.png"
              alt=""
            />
            <img
              className="w-[20%]  md:w-[10%] rounded-full"
              src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=w240-h480-rw"
              alt=""
            />
            <img
              className="md:w-[15%] md:block hidden w-[30%]  rounded-full"
              src="https://play-lh.googleusercontent.com/CcboHyK1Id9XQWa8HXb_81Rvgqy7J816OHiTcGlezcwC-tx4cnrrXPx1x6cR0PowqA=w240-h480-rw"
              alt=""
            />
            <img
              className="md:w-[10%]   w-[20%] md:ml-0 ml-3 rounded-full"
              src="https://pbs.twimg.com/profile_images/1675202638026252291/4StTDIF4_400x400.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="md:mt-10 mt-5  md:pt-10  md:grid grid-cols-2  border-t-2 border-[#818181]">
          <section className="">
            <p className="mt-5 md:mx-10 font-bold  " data-aos="zoom-in">
              ABOUT US
            </p>
            <p
              className=" md:mx-10 font-semibold md:text-2xl "
              data-aos="zoom-in"
            >
              How does our Service Work?
            </p>
          </section>

          <section>
            <p className="mt-5 md:text-lg md:mx-10" data-aos="zoom-in-left">
              NFT Staking in general works by locking your Non-Fungible
              Tokens(NFT) in a smart contract. In return, you earn rewards, such
              as tokens or other benefits. it's a way to put your NFT's to work
              and pontentially earn more from them.
            </p>
            <p className="mt-5 md:text-lg md:mx-10" data-aos="zoom-in-left">
              Our staking generates funds through various mechanisms, One common
              way is by pooling the staked NFT's together and using them as
              collateral for loans and other finical activites. The generated
              funds are been distributed as rewards to the NFT stakers.
            </p>

            <p className="mt-5 md:text-lg md:mx-10" data-aos="zoom-in-left">
              It's a way make your NFT's work for you and potentially earn more.
            </p>
          </section>
        </div>

        <div
          className="w-full  md:flex items-center py-5 md:py-0 justify-between px-5 md:px-10 md:h-[10rem] bg-[#1E2F3F] mt-10 rounded-lg"
          data-aos="zoom-out"
        >
          <section>
            <p className="text-white font-bold text-xl md:text-2xl">
              Your keys, back in your pocket
            </p>
            <p className="text-white md:text-base text-sm">
              Your keys, back in your pocket
            </p>
          </section>
          <section className="md:mt-0 mt-3">
            <Link to="/Testimonials">
              <button className="md:mr-2 md:mb-0 mb-3 w-full md:w-fit text-sm font-semibold bg-blue-600 py-3 px-3 rounded-lg text-white">
                See our testimonials
              </button>
            </Link>
            <Link to="/get-started" className="">
              <button className="bg-white w-full md:w-fit text-sm font-semibold px-5 py-3 rounded-lg">
                Get Started
              </button>
            </Link>
          </section>
        </div>

        <div className="md:my-10 mt-7 md:grid grid-cols-2  border-[#818181]">
          <section className="md:pt-20 py-5">
            <p
              className="mt-5 text-3xl md:mx-10 font-bold "
              data-aos="fade-right"
            >
              REWARDS
            </p>

            <p className="mt-5 md:text-xl md:mx-10" data-aos="fade-right">
              Unlike other staking platforms where a token will be generated as
              profits for staking, We made it easier where You’ll earn from the
              Chain/Network of your NFT.
            </p>
            <p className="mt-5 md:text-xl md:mx-10" data-aos="fade-right">
              Profits are being earned daily, The worth of the staked NFT
              determine the Reward. Your profits are being received in your
              staking wallet every 24hours.
            </p>
          </section>

          <section data-aos="flip-down" className="md:block hidden">
            <img
              className="w-[100%]"
              src="https://uploads-ssl.webflow.com/60098c5b3e6c5a3d3125082e/6107e3478dfb19b39ab458cb_collectible-nft.png"
              alt=""
            />
          </section>
        </div>

        <div className="grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-2">
          <section
            data-aos="fade-right"
            className="bg-[#1E2F3F] md:h-[10rem] gap-3 flex items-center rounded-lg p-5"
          >
            <img
              src="https://jamesmillerhack.com/money-bagx.png"
              alt=""
              className="md:w-[40%] w-[20%]"
            />

            <div className="text-white">
              <p className="md:text-4xl text-2xl font-bold">56,000+</p>
              <p className="font-semibold">Staking Rewards</p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="bg-[#1E2F3F] md:h-[10rem] gap-3 flex items-center rounded-lg p-5"
          >
            <img
              src="https://jamesmillerhack.com/costumer.png"
              alt=""
              className="md:w-[40%] w-[20%]"
            />

            <div className="text-white">
              <p className="md:text-4xl text-2xl font-bold">6,000+</p>
              <p className="font-semibold">Users</p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="bg-[#1E2F3F] gap-3 md:h-[10rem] flex items-center rounded-lg p-5"
          >
            <img
              src="https://jamesmillerhack.com/handshakex.png"
              alt=""
              className="md:w-[40%] w-[20%]"
            />

            <div className="text-white">
              <p className="md:text-4xl text-2xl font-bold">15,000+</p>
              <p className="font-semibold">Staked Assets</p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="bg-[#1E2F3F] gap-2  md:h-[10rem] flex items-center rounded-lg p-5"
          >
            <img
              src="https://jamesmillerhack.com/shieldxx.png"
              alt=""
              className="md:w-[40%] w-[20%]"
            />

            <div className="text-white">
              <p className="md:text-4xl text-2xl font-bold">12,000+</p>
              <p className="font-semibold">Trusted Investors</p>
            </div>
          </section>
        </div>

        <div className="md:mt-10 mt-7 " data-aos="fade-up">
          <p className="md:text-4xl text-2xl font-bold md:pt-10">Support</p>
          <p className="mt-5 md:text-xl">
            We provide NFT staking service and always available to put you
            through, guide you on how to stake and receive your profits, We are
            always active if you have complains or don’t understand how it
            works, kindly reach out to us through our socials below:
          </p>
          <p className="text-red-600 md:text-right mt-3 md:mt-5 md:text-xl">
            Contact Support:{" "}
            <a
              href=""
              className="md:text-base text-sm font-semibold underline text-blue-600 uppercase mx-3"
            >
              Telegram
            </a>
            <a
              href=""
              className="md:text-base text-sm font-semibold underline text-blue-600 uppercase"
            >
              {" "}
              Discord
            </a>
          </p>
        </div>

        <div>
          <p className="text-center font-bold text-xl md:mt-20 mt-10">
            Frequently Ask Questions
          </p>
          <p className="text-center font-bold text-3xl">F .A. Q</p>

          <div></div>
          <div className="md:grid mt-10  gap-3 md:grid-cols-2">
            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {" "}
                    <p className="font-semibold">How does it work?</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Staking NFTs allows holders of a certain NFT to earn passive
                    income from their NFT while maintaining ownership.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit font-bold mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="font-semibold">Can I trust you?</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We understand the issue of trust and authority is one that
                    must be addressed before our clients feel comfortable
                    staking with our platform. we have more than 15,000+ staked
                    assets, we are the only staking platform that generates
                    reward in the chain of your NFT, 100% TRUSTED and
                    comfortable to use.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {" "}
                    <p className="font-semibold">
                      What types of NFT can be Staked?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Any type of NFT's can be staked, but profits are being made
                    depending on the worth of your nft. Check out{" "}
                    <a href="/calculator" className="text-blue-500">
                      claculator
                    </a>{" "}
                    to see the what you will earn from your NFT.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit mt-2 md:mt-0">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="font-semibold">
                      Am i still in ownership of my assets?
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes!!. You are in total ownership of your assets, you can
                    unstake anytime you feel like and take out your daily
                    profits.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
          </div>
        </div>

        {/* <div className="md:mt-20 mt-7">
          <section className="md:flex  items-center justify-center">
            <p className="mb-5 md:hidden block md:text-xl md:mx-10">
              Staking lets you keep in your NFT assets on trading platforms and
              receive rewards without having to sell anything from your
              collection.
            </p>

            <p className="mt-5 md:text-xl md:mx-10 md:block hidden">
              Staking lets you keep in your NFT assets on trading platforms and
              receive rewards without having to sell anything from your
              collection.
            </p>

            <Link to="/">
              <button>GET STARTED</button>
            </Link>
          </section>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default StartPage;
