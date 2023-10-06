import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1E2F3F] mt-20 p-5 pt-7">
        <div className=" w-full  md:grid grid-cols-3 justify-between">
          <div>
            <p className="md:text-lg text-white font-medium">Useful Links</p>
            <section className="flex gap-3  text-white font-medium">
              <p>About</p>
              <p>Testimonials</p>
              <p>Benefits</p>
              <p>Calculator</p>
            </section>

            <p className="md:text-lg mt-5 md:mt-10 text-white font-medium">
              Support
            </p>
            <section className="flex gap-3  text-white font-medium">
              <p>Email</p>
              <p>Discord</p>
              <p>Twitter</p>
              <p>Telegram</p>
            </section>
          </div>
          <section className="md:pt-20 pt-10 md:text-sm md:text-center text-white">
            <p className="md:block hidden">
              © 2023 NFT Staking. All rights reserved.
            </p>
            <p className="md:block hidden">Terms of Service | Privacy Policy</p>

            <p className="mt-7 text-start md:text-lg font-bold">Subscribe</p>
            <div className="flex md:w-[80%] items-center bg-white rounded-md w-full ">
              <input
                type="text"
                placeholder="Enter your email"
                className=" w-full  rounded-s-md text-black outline-none border-none py-2 px-2"
              />
              <button className="font-medium bg-blue-600 p-2 rounded-e-md">
                Subscribe
              </button>
            </div>
          </section>
          <section className="md:mt-0 mt-5">
            <img
              className="rounded-md"
              src="https://uploads-ssl.webflow.com/5f97f994ec86e8c0ddab6823/63288eed17c95ddd8dbf9abd_image2_2_11zon_5949c8907b839ff4c0e366a9696defd6_2000-p-1080.jpeg"
              alt=""
            />
          </section>
        </div>

        <div className="text-center md:hidden block text-white mt-5 text-xm font-light">
          <p>© 2023 NFT Staking. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer