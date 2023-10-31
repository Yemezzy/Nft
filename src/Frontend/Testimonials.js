import React from 'react'
import Navbar from './Navbar'
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Footer from './Footer';

const Testimonials = () => {
     const [value, setValue] = React.useState(5);
  return (
    <div>
      <Navbar />
      <div className="md:px-10 px-5">
        <div className="mt-10 text-center">
          <p className="md:text-4xl text-2xl font-semibold uppercase">
            Read our testimonials
          </p>
          <p className="md:text-2xl  text-xl mt-7 md:mt-20 font-semibold">
            Don’t just take our word for it
          </p>
          <p className="text-lg mt-2 ">
            Hear from some of our amazing customers who have been staking and
            earning profits daily.
          </p>
        </div>

        <div className="maquee md:hidden h-[20rem] ">
          <ul className="maqueee-content flex gap-3 my-10">
            <li>
              {" "}
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Great service, immediate reactions and I’ve <br /> made over
                  $60 in 2 days.
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gae/kyKU6L_kD0eqDlOyqJi-A9G5lncCi6rKW2LCwzA3qN_rPgW_nGFTKhitwZxhSRaRi-5iRTC_0UkzdTwPFoxZENEDZHvrisKbPqHKTQ?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Anouk Mommers</p>
                    <p className="text-xs">May 25, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I was not sure at first, but i deceided to <br /> give a
                  trial, it is the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/0baf33f8876cb0c3175adce65e2e5ce4.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Mark Williams</p>
                    <p className="text-xs">Jun 1, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "My staking wallet was safe, i withdrawal <br /> both my NFT
                  and profits."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/486d284eac9bfa8cb1a21043d6eb2b58.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Sam </p>
                    <p className="text-xs">Jan 23, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I received my profit in Ethereum without
                  <br /> swapping or paying any gass fee."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/a3dedb7ddf224f3cc53f3f8ae85f16ae.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Olivia</p>
                    <p className="text-xs">Apr 6, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Best staking platform i have come across, <br /> my profits
                  was made daily, i earned up <br /> to $5 daily."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/07052be81c17e191d6ac4491a533a6f1.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Joseph Lugard</p>
                    <p className="text-xs">Feb 14, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I staked 4 of my NFT and i cou make up to <br /> $46 a day,
                  it the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/23d28487723fdf1fcf733b364e867d2e.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Stephan</p>
                    <p className="text-xs">Mar 7, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            {/* <d/> */}

            <li>
              {" "}
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Great service, immediate reactions and I’ve <br /> made over
                  $60 in 2 days.
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gae/kyKU6L_kD0eqDlOyqJi-A9G5lncCi6rKW2LCwzA3qN_rPgW_nGFTKhitwZxhSRaRi-5iRTC_0UkzdTwPFoxZENEDZHvrisKbPqHKTQ?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Anouk Mommers</p>
                    <p className="text-xs">may 25, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I was not sure at first, but i deceided to <br /> give a
                  trial, it is the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/0baf33f8876cb0c3175adce65e2e5ce4.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Mark Williams</p>
                    <p className="text-xs">Jun 1, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "My staking wallet was safe, i withdrawal <br /> both my NFT
                  and profits."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/486d284eac9bfa8cb1a21043d6eb2b58.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Sam </p>
                    <p className="text-xs">Jan 23, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I received my profit in Ethereum without
                  <br /> swapping or paying any gass fee."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/a3dedb7ddf224f3cc53f3f8ae85f16ae.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Olivia</p>
                    <p className="text-xs">Apr 6, 2023</p>
                  </section>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div className="maquee hidden md:block h-[20rem] ">
          <ul className="maquee-content flex gap-3 my-10">
            <li>
              {" "}
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Great service, immediate reactions and I’ve <br /> made over
                  $60 in 2 days.
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gae/kyKU6L_kD0eqDlOyqJi-A9G5lncCi6rKW2LCwzA3qN_rPgW_nGFTKhitwZxhSRaRi-5iRTC_0UkzdTwPFoxZENEDZHvrisKbPqHKTQ?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Anouk Mommers</p>
                    <p className="text-xs">May 25, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I was not sure at first, but i deceided to <br /> give a
                  trial, it is the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/0baf33f8876cb0c3175adce65e2e5ce4.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Mark Williams</p>
                    <p className="text-xs">Jun 1, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "My staking wallet was safe, i withdrawal <br /> both my NFT
                  and profits."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/486d284eac9bfa8cb1a21043d6eb2b58.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Sam </p>
                    <p className="text-xs">Jan 23, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I received my profit in Ethereum without
                  <br /> swapping or paying any gass fee."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/a3dedb7ddf224f3cc53f3f8ae85f16ae.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Olivia</p>
                    <p className="text-xs">Apr 6, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Best staking platform i have come across, <br /> my profits
                  was made daily, i earned up <br /> to $5 daily."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/07052be81c17e191d6ac4491a533a6f1.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Joseph Lugard</p>
                    <p className="text-xs">Feb 14, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I staked 4 of my NFT and i cou make up to <br /> $46 a day,
                  it the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/23d28487723fdf1fcf733b364e867d2e.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Stephan</p>
                    <p className="text-xs">Mar 7, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            {/* <d/> */}

            <li>
              {" "}
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "Great service, immediate reactions and I’ve <br /> made over
                  $60 in 2 days.
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gae/kyKU6L_kD0eqDlOyqJi-A9G5lncCi6rKW2LCwzA3qN_rPgW_nGFTKhitwZxhSRaRi-5iRTC_0UkzdTwPFoxZENEDZHvrisKbPqHKTQ?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Anouk Mommers</p>
                    <p className="text-xs">may 25, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I was not sure at first, but i deceided to <br /> give a
                  trial, it is the best i have seen so far."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/s/raw/files/0baf33f8876cb0c3175adce65e2e5ce4.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Mark Williams</p>
                    <p className="text-xs">Jun 1, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "My staking wallet was safe, i withdrawal <br /> both my NFT
                  and profits."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/486d284eac9bfa8cb1a21043d6eb2b58.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold">Sam </p>
                    <p className="text-xs">Jan 23, 2023</p>
                  </section>
                </div>
              </section>
            </li>

            <li>
              <section className="w-[25rem] h-[15rem] pt-10 px-5 bg-[#F9FAFB]">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <p className="mt-3 h-[40%] text-lg font-semibold">
                  "I received my profit in Ethereum without
                  <br /> swapping or paying any gass fee."
                </p>

                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="https://i.seadn.io/gcs/files/a3dedb7ddf224f3cc53f3f8ae85f16ae.png?auto=format&dpr=1&w=384"
                    alt=""
                    className="rounded-full h-[3rem] w-[3rem] bg-black"
                  />
                  <section>
                    <p className="text- font-bold"> Olivia</p>
                    <p className="text-xs">Apr 6, 2023</p>
                  </section>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Testimonials