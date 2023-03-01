import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="justify-items-center my-20 mb-10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2">
        <div data-aos-duration="10000" data-aos="zoom-in-down">
          <img
            className="w-full"
            src="https://i.ibb.co/sw1cM21/MCN-ss-hunter-and-wanderer-1176x588-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          data-aos-duration="10000"
          data-aos="zoom-in-left"
          className="text-gray-800 md:text-start text-center mt-5 md:mt-20"
        >
          <h1 className="text-6xl  font-bold">Hi There!</h1>
          <h1 className="text-4xl   font-bold">Welcome to Sports Bike zone</h1>
          <p className="my-2 text-gray-600 font-semibold">
            Its a biggest sports bike Online selling platform.We have selling
            bike since 2012.If need any help please feel free to contact.
          </p>

          <Link to="/blogs">
            <button
              type="button"
              className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500"
            >
              Read Our Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
