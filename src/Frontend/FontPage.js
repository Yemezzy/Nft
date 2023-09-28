import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const FontPage = () => {
  return (
    <div>
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
      <div className="w-full text-center h-[100vh] md:pt-[20%] pt-[50%] ">
        <p className="text-7xl font-bold">303</p>
        <p className="text-2xl font-bold">No Content Avilable</p>
      </div>
    </div>
  );
}

export default FontPage