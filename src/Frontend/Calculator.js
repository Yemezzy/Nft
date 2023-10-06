import React from 'react'
import Navbar from './Navbar'

const Calculator = () => {
  return (
    <div>
      <Navbar />

      <div className="md:my-10 mt-5  px-7 md:grid grid-cols-2">
        <section></section>

        <section className="md:w-[25rem] h-[27rem] border-2 p-5">
          <p className="text-center text-2xl font-bold">Staking calculator</p>
          <p className="text-center text-">
            Estimated earnings from current APR
          </p>

          <select
            name=""
            id=""
            className="w-full h-[3rem] mt-5 outline-none border-2 rounded-md px-2"
          >
            <option value="">
              <img src="" alt="" />
              <p>mmmm</p>
            </option>
          </select>

          <input
            type="text"
            className="w-full h-[3rem] mt-3 outline-none border-2 rounded-md px-2"
          />

          <input
            type="text"
            className="w-full h-[3rem] mt-3 outline-none border-2 rounded-md px-2"
          />

          <input
            type="text"
            className="w-full h-[3rem] mt-3 outline-none border-2 rounded-md px-2"
          />
        </section>
      </div>
    </div>
  );
}

export default Calculator