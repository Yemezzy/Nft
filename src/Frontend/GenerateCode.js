import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { PiWarningLight, PiWarningFill } from "react-icons/pi";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import { isDisabled } from '@testing-library/user-event/dist/utils';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from 'react-router-dom';

const GenerateCode = () => {

  const [display, setDisplay] = React.useState(false);
  const handledisplay = () => {
    setDisplay(true);
  }
  const handleCloseD = () => {
    setDisplay(false);
  } 

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      
       setDisplay(true);
    }, 3000);
   

  };

const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [data, setData] = useState(false)
  const [box, setBox] = useState()


  return (
    <div className=" block">
      <nav className="py-3 px-3 flex justify-between items-center shadow-md">
        <Link to="/Home">
          <p className="text-yellow-500 font-bold ">
            FUND <span className="text-black">ME</span>
          </p>
        </Link>

        <Link to="/Home">
          <FaBars className="w-5 h-5" />
        </Link>
      </nav>

      <div className=" py-2 px-3">
        <p className="mt-5 text-lg font-semibold">Generate a staking wallet</p>
        <p className="mt-3 font-medium mr-5">
          This Secret Phrase is the master key to your staking wallet.
        </p>
        <div className="md:block flex  items-center mt-10">
          <img
            src="https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-bank-vault-featured-image-1200.png"
            alt=""
            className="md:w-[20%] w-[40%]"
          />
        </div>

        <p className="mt-10 text-gray-400 text-sm">
          <span className="text-yellow-500">Note:</span> Tap on all checkboxes
          to comfirm you understand the importance of your secret phase.
        </p>

        <form className="mt-5">
          <p className="flex items-center">
            <Checkbox value={box} color="success" />
            <span className="mt-4">
              If i loose my secret phrase, my funds will be lost forever.
            </span>
          </p>

          <p className="flex items-center">
            <Checkbox color="success" />
            <span className="mt-4">
              If i expose my secret phase to anyone, my asset can be stolen.
            </span>
          </p>

          <p className="flex items-center mt-2">
            <Checkbox color="success" />
            <span className="mt-">
              FUND ME will never reach out to ask for it.
            </span>
          </p>
          <div className="mt-5">
            <Button onClick={handleOpen} variant="contained" color="success">
              Continue
            </Button>
          </div>
        </form>

        <p className="text-xl font-bold mt-10">Trusted Collaboration with</p>
        <div className="flex items-center">
          <img
            className="w-[25%] md:w-[12%] h-[25%]  rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/120px-MetaMask_Fox.svg.png"
            alt=""
          />
          <img
            className="w-[27%] h-[27%] md:w-[15%] rounded-full"
            src="https://play-lh.googleusercontent.com/-3uTwEsZDk2NEgRblDEfIIY7T-xAZfJPN5JzVKz7s94Ds8KrKCrSVHvkEuneJlUBekc=w240-h480-rw"
            alt=""
          />
          <img
            className="w-[20%] md:w-[10%] h-[20%] rounded-full"
            src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=w240-h480-rw"
            alt=""
          />
          <img
            className="md:w-[15%] w-[30%]  rounded-full"
            src="https://play-lh.googleusercontent.com/CcboHyK1Id9XQWa8HXb_81Rvgqy7J816OHiTcGlezcwC-tx4cnrrXPx1x6cR0PowqA=w240-h480-rw"
            alt=""
          />
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Modal
        open={display}
        onClose={handleCloseD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Staking Secrct Phrase
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <p className="flex items-center gap-2 pl-3 text-white text-sm rounded-lg bg-yellow-700 p-1">
              <PiWarningLight className="text-yellow-950" />{" "}
              <span>Never share your serect phase with anyone.</span>
            </p>

            <section className="ml-12 justify-center  mt-16">
              {/* <ol className="list-decimal gap-1 grid grid-cols-2">
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  fence
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  camera
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  spawn
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  ignore
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  hood
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  crane
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  recipe
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  sick
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  switch
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  kangaroo
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  dumb
                </li>

                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  elder
                </li>
              </ol> */}

              

              {/* <ol hidden className=" list-decimal gap-1 grid grid-cols-2">
                1
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  alter
                </li>
                2
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  seed
                </li>
                3
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  shoot
                </li>
                4
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  replace
                </li>
                5
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  daring
                </li>
                6
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  need
                </li>
                7
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  stay
                </li>
                8
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  design
                </li>
                9
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  unfair
                </li>
                10
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  fluid
                </li>
                11
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  always
                </li>
                12
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  idea
                </li>
              </ol> */}

              {/* <ol hidden className="list-decimal gap-1 grid grid-cols-2">
                1
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  fence
                </li>
                2
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  camera
                </li>
                3
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  spawn
                </li>
                4
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  ignore
                </li>
                5
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  hood
                </li>
                6
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  crane
                </li>
                7
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  recipe
                </li>
                8
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  sick
                </li>
                9
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  switch
                </li>
                10
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  kangaroo
                </li>
                11
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  dumb
                </li>
                12
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  elder
                </li>
              </ol> */}

              {/* <ol  className="list-decimal gap-1 grid grid-cols-2">
                1
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  lawn
                </li>
                2
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  lecture
                </li>
                3
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  afford
                </li>
                4
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  sudden
                </li>
                5
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                 solution
                </li>
                6
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  guitar
                </li>
                7
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  castle
                </li>
                8
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                 west
                </li>
                9
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  service
                </li>
                10
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  recycle
                </li>
                11
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  patch
                </li>
                12
                <li className="border-2 border-black px-2 py-1 w-[7rem] rounded-md">
                  portion
                </li>
              </ol> */}


              {/* <p className='text-center font-bold text-xl'>You have Already Generated a Staking Wallet</p> */}
            </section>

            <p className="flex items-center text-center mt-16">
              <PiWarningFill className="w-5 h-5" />
              <span className="text-sm mt-5">
                Never share your serect phase with anyone, store it securelly
              </span>
            </p>

            <p className="mt-5">
              <Link to="/Home">
                <Button
                  // onClick={handleCloseD}
                  variant="contained"
                  color="success"
                >
                  Continue
                </Button>
              </Link>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default GenerateCode