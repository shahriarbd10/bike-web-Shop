import React from "react";
import { FaStar } from "react-icons/fa";

const Feature = () => {
  return (
    <div
      data-aos-duration="10000"
      data-aos="zoom-in-up"
      className="grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-3"
    >
      <div
        style={{ height: "500px" }}
        className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900"
      >
        <img
          src="https://rare-gallery.com/uploads/posts/1031337-black-monochrome-motorcycle-vehicle-wires-Harley-Davidson-Heavy-bike-black-and-white-monochrome-photography-motorcycling-land-vehicle.jpg"
          alt=""
          className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500"
        />
        <div className="flex flex-col justify-between  space-y-8">
          <div className="space-y-2 p-2">
            <h2 className="text-xl font-bold tracking-wide"></h2>
            <p className="text-gray-600">
              You are a sports man.160cc,good design good quilty.I will give my
              best for your project.I always ensure that first delivery and
              quality workI will give my best for your project.I always ensure
              that first delivery and quality work.I have all the updated
              equipments.This is our most affortable service. we give full
              support to our customer.....
            </p>
            <div className="text-orange-400   ">
              <div className="flex my-2 justify-between ">
                <div className="flex">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Price:$120000</p>
                </div>
              </div>
            </div>
            {/* <Link to={`/service/${_id}`}>
              <button
                type="button"
                className="flex  w-50 bottom-5 absolute  items-center justify-center  p-3 font-semibold tracking-wide  bg-gray-800  text-white"
              >
                View Details
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div
        style={{ height: "500px" }}
        className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900"
      >
        <img
          src="https://e0.pxfuel.com/wallpapers/276/538/desktop-wallpaper-yamaha-black-motorcycle-dark.jpg"
          alt=""
          className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500"
        />
        <div className="flex flex-col justify-between  space-y-8">
          <div className="space-y-2 p-2">
            <h2 className="text-xl font-bold tracking-wide"></h2>
            <p className="text-gray-600">
              This is my new Service.1200 cc , sports motor bike,4 suspention.I
              will give my best for your project.I always ensure that first
              delivery and quality work.I have all the updated equipments.This
              is our most affortable service. we give full support to our
              customer....
            </p>
            <div className="text-orange-400   ">
              <div className="flex my-2 justify-between ">
                <div className="flex">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Price:$200000</p>
                </div>
              </div>
            </div>
            {/* <Link to={`/service/${_id}`}>
              <button
                type="button"
                className="flex  w-50 bottom-5 absolute  items-center justify-center  p-3 font-semibold tracking-wide  bg-gray-800  text-white"
              >
                View Details
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div
        style={{ height: "500px" }}
        className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900"
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indian-chief-dark-horse-lead-1626720542.jpg"
          alt=""
          className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500"
        />
        <div className="flex flex-col justify-between  space-y-8">
          <div className="space-y-2 p-2">
            <h2 className="text-xl font-bold tracking-wide"></h2>
            <p className="text-gray-600">
              You are a sports man.160cc,good design good quilty.I will give my
              best for your project.I always ensure that first delivery and
              quality workI will give my best for your project.I always ensure
              that first delivery and quality work.I have all the updated
              equipments.This is our most affortable service. we give full
              support to our customer."...
            </p>
            <div className="text-orange-400   ">
              <div className="flex my-2 justify-between ">
                <div className="flex">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Price:$140000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
