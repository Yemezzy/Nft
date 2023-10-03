import React from "react";
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

const StartPage = () => {
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
          <div className=" h-full  md:p-5  md:pl-10">
            <section className="grid gap-2 md:w-[75%] grid-cols-2">
              <div className="border-2 bg-1 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-2 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-3 h-[18vh] md:h-[30vh] rounded-lg"></div>
              <div className="border-2 bg-4 h-[18vh] md:h-[30vh] rounded-lg"></div>
            </section>
            <div className="sticky md:block hidden bg-5 w-[35%] h-[18vh] md:h-[30vh] rounded-lg jjj"></div>
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

            <Link to="/">
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

          <motion.div
            className="flex gap-2 box items-center box justify-center"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
          </motion.div>
        </div>

        <div className="md:mt-10 mt-5  md:pt-10  md:grid grid-cols-2  border-t-2 border-[#818181]">
          <section className="">
            <p className="mt-5 md:mx-10 font-bold ">ABOUT US</p>
            <p className=" md:mx-10 font-semibold md:text-2xl ">
              How does our Service Work?
            </p>
          </section>

          <section>
            <p className="mt-5 md:text-lg md:mx-10">
              In order to get rewards for staking your NFTs, you might need to
              stake them for weeks or months, depending on the specific platform
              and NFT collection.
            </p>
            <p className="mt-5 md:text-lg md:mx-10">
              Usually, your staking reward isn’t prorated, so if you pull your
              NFT out early, you get nothing for all of the time that it was
              staked up.
            </p>

            <div className=" md:flex mt-5  gap-2  justify-between items-center md:mx-10">
              <section className="flex flex-col mt-10 md:mt-0 items-center">
                <FaWallet className="w-7 h-7 mb-5" />
                <p className="md:text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam totam aliquid voluptatum deleniti fugit ut earum
                  adipisci vero non aperiam!
                </p>
              </section>
              <section className="flex flex-col mt-10 md:mt-0 items-center">
                <FaWallet className="w-7 h-7 mb-5" />
                <p className="md:text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam totam aliquid voluptatum deleniti fugit ut earum
                  adipisci vero non aperiam!
                </p>
              </section>
            </div>
          </section>
        </div>

        <div className="w-full md:flex items-center py-5 md:py-0 justify-between px-5 md:px-10 md:h-[10rem] bg-[#1E2F3F] mt-10 rounded-lg">
          <section>
            <p className="text-white font-bold text-xl md:text-2xl">
              Your keys, back in your pocket
            </p>
            <p className="text-white md:text-base text-sm">
              Your keys, back in your pocket
            </p>
          </section>
          <section className="md:mt-0 mt-3">
            <button className="md:mr-2 md:mb-0 mb-3 w-full md:w-fit text-sm font-semibold bg-blue-600 py-3 px-3 rounded-lg text-white">
              See our testimonials
            </button>
            <button className="bg-white w-full md:w-fit text-sm font-semibold px-5 py-3 rounded-lg">
              Get Started
            </button>
          </section>
        </div>

        <div className="md:mt-10 mt-7 md:grid grid-cols-2  border-[#818181]">
          <section className="md:pt-20 py-5">
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

          <section className="md:block hidden">
            <img
              src="https://trustwallet.com/assets/images/collectibles_preview2.png"
              alt=""
            />
          </section>
        </div>

        <div className="grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-2">
          <section className="bg-[#1E2F3F] md:h-[10rem] gap-3 flex items-center rounded-lg p-5">
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
          <section className="bg-[#1E2F3F] md:h-[10rem] gap-3 flex items-center rounded-lg p-5">
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
          <section className="bg-[#1E2F3F] gap-3 md:h-[10rem] flex items-center rounded-lg p-5">
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
          <section className="bg-[#1E2F3F] gap-2  md:h-[10rem] flex items-center rounded-lg p-5">
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

        <div className="md:mt-10 mt-7 ">
          <p className="md:text-4xl text-2xl font-bold md:pt-10">Support</p>
          <p className="mt-5 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            tempora mollitia fugiat rerum nemo maxime commodi totam cumque
            inventore officiis. Provident dolor quidem a soluta quia deserunt
            pariatur eaque ipsam, culpa quam sapiente voluptatum suscipit eius
            veniam fugiat, tempore nostrum unde incidunt, reiciendis labore
            magnam sunt minus quo. Nostrum, aut!
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
          <div className="grid mt-10 md:grid-rows-none grid-cols-none grid-rows-4 gap-3 md:grid-cols-2">
            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>How does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Can I trust you?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>What types of NFT can be Staked?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>

            <section className="h-fit">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    Do I need to tell you all my passwords?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </section>
          </div>
        </div>
        <footer></footer>
        {/* <div className="md:mt-20 mt-7">
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

            <Link to="/">
              <button>GET STARTED</button>
            </Link>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default StartPage;
