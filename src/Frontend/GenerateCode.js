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
import Navbar from './Navbar';
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from './Footer';

const GenerateCode = () => {

  const [code, setCode] = useState("7765")
  const [inp, setInp] = useState("")
  const [error, setError] = useState("")
 

 const [show, setShow] = React.useState(false);
  const handleShow = () => {
       if (inp != code) {
      setError("Invaild code")
      setShow(false);
    } else {
         setShow(true);
         setError("");
    } if (error == "Invaild code") {
      setInp("");
      // setShow(false);
    } 
 };
 const closeShow = () => {
   setShow(false);
   
 };


    const handleClose = () => {
      setOpen(false);
  };
  
  const [display, setDisplay] = React.useState(false);


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      
       setDisplay(true);
    }, 3000);
   

  };

// const style = {
//   position: "absolute",
//   top: "55%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   // border: "2px solid #000",
//   boxShadow: 24,
//   p: 2,
// };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
   
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [data, setData] = useState(false)
  const [box, setBox] = useState()


  return (
    <div className=" block">
      {/* <nav className="py-3 px-3 flex justify-between items-center shadow-md">
        <Link to="/Home">
          <p className="text-yellow-500 font-bold ">
            FUND <span className="text-black">ME</span>
          </p>
        </Link>

        <Link to="/Home">
          <FaBars className="w-5 h-5" />
        </Link>
      </nav> */}
      <Navbar />

      <div className=" py-2 px-5">
        <p className="md:mt-5 mt-3 text-center md:mb-10 text-2xl md:text-3xl font-bold">
          Generate a staking wallet
        </p>
        <div className="md:grid grid-cols-2 justify-between">
          <div>
            <p className="mt-2 text-lg md:text-2xl font-semibold mr-5">
              This Secret Phrase is the master key to your staking wallet.
            </p>

            <div className="p-5 mt-2 md:mt-5 bg-[#1E2F3F] text-white rounded-md  shadow-md">
              <p className="md:text-lg  font-medium mr-5">
                You will be given a 4 digit access code, do well to insert it to
                have access to your staking wallet.
              </p>

              <p className="md:mt-5 md:text-lg  mt-3 font-medium mr-5">
                {" "}
                Ounce your Staking wallet is been generated, Ensure to keep your
                12 wallet Phase safe, DONT DISCLOSE IT TO ANYONE. We will never
                ask you for your wallet phase.
              </p>
            </div>

            <form className="mt-5 font-medium">
              <p className="flex items-center">
                <Checkbox value={box} color="success" />
                <span className="mt-">
                  If i loose my secret phrase, my funds will be lost forever.
                </span>
              </p>

              <p className="flex items-center">
                <Checkbox color="success" />
                <span className="mt-">
                  If i expose my secret phase to anyone, my asset can be stolen.
                </span>
              </p>

              <p className="flex items-center mt-2">
                <Checkbox color="success" />
                <span className="mt-">
                  We will never reach out to ask for it.
                </span>
              </p>
              <p className="mt-3 text-gray-400 text-sm">
                <span className="text-yellow-500">Note:</span> Tap on all
                checkboxes to comfirm you understand the importance of your
                secret phase.
              </p>
              <div className="mt-5">
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="success"
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex justify-center  mt-10">
            <section className="w-[30rem] h-[17rem] items-center mt-20">
              <img
                className="w-full h-full"
                src="https://static.vecteezy.com/system/resources/previews/012/626/869/original/bored-ape-in-sunglasses-nft-isolated-on-white-background-non-fungible-token-blockchain-monkey-illustration-vector.jpg"
                alt=""
              />
            </section>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div>
        <Modal
          open={display}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title" className="font-bold text-xl mb-5">
              {" "}
              WALLET ACCESS CODE
            </h2>
            <p className="mb-2">
              Input your access code to generate your staking wallet.
            </p>
            <div className="mb-5">
              <TextField
                value={inp}
                type="number"
                id="outlined-error-helper-text"
                label="Access Code"
                defaultValue=""
                onChange={(event) => setInp(event.target.value)}
              />
              <p className="text-sm text-red-700">{error}</p>
            </div>

            <div className="f">
              <React.Fragment>
                <div className="text-right">
                  <Button
                    className=""
                    variant="contained"
                    color="success"
                    onClick={handleShow}
                  >
                    Continue
                  </Button>
                </div>
                <Modal
                  open={show}
                  onClose={closeShow}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box sx={{ ...style, width: 300 }}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Generate Staking Phase
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                      <p className="flex items-center gap-2 pl-3 text-white text-sm rounded-lg bg-yellow-700 p-1">
                        <PiWarningLight className="text-yellow-950" />{" "}
                        <span>Never share your serect phase with anyone.</span>
                      </p>

                      <section className="ml-12 justify-center  mt-16">
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        ></Box>
                      </section>

                      <p className="flex items-center text-center mt-16">
                        <PiWarningFill className="w-5 h-5" />
                        <span className="text-sm mt-5">
                          Never share your serect phase with anyone, store it
                          securelly
                        </span>
                      </p>

                      <p className="mt-5">
                        <Button
                          onClick={closeShow}
                          variant="contained"
                          color="success"
                        >
                          Continue
                        </Button>
                      </p>
                    </Typography>
                  </Box>
                </Modal>
              </React.Fragment>
            </div>
          </Box>
        </Modal>
      </div>

      {/* <Modal
        open={display}
        onClose={handleCloseD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Generate Staking Phase
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <p className="flex items-center gap-2 pl-3 text-white text-sm rounded-lg bg-yellow-700 p-1">
              <PiWarningLight className="text-yellow-950" />{" "}
              <span>Never share your serect phase with anyone.</span>
            </p>

            <section className="ml-12 justify-center  mt-16">


              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >

              </Box>
            </section>

            <p className="flex items-center text-center mt-16">
              <PiWarningFill className="w-5 h-5" />
              <span className="text-sm mt-5">
                Never share your serect phase with anyone, store it securelly
              </span>
            </p>

            <p className="mt-5">
              <Button onClick={accessCode} variant="contained" color="success">
                Continue
              </Button>
            </p>
          </Typography>
        </Box>
      </Modal> */}
      <Footer />
    </div>
  );
}

export default GenerateCode