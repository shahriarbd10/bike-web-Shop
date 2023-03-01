import React from "react";

const Aboutme = () => {
  return (
    <div
      data-aos-duration="10000"
      data-aos="zoom-in-up"
      className="my-10 flex-col md:flex-row justify-center mx-auto flex px-4 md:px-20"
    >
      <div>
        <h1 className="text-center font-semibold text-3xl">About Us</h1>
        <p className="md:w-96 w-80  mx-auto my-5  font-semibold break-all ">
          Welcome to RACER website! We are dedicated to providing high-quality
          bikes to riders of all levels. Our passion for drives us to offer the
          best selection of bikes, from road bikes to mountain bikes, and
          everything in between. Our blog is an extension of our commitment to
          RIDING. We believe that it also connects us to nature.We welcome your
          feedback and comments, so please feel free to share your thoughts and
          ideas with us. Thank you for visiting our bike ecommerce website, and
          we hope you enjoy our blog!
        </p>
      </div>
      <div>
        <img
          className="rounded md:w-3/4  w-full md:px-0 px-4 mx-auto"
          src="https://wallpapercave.com/wp/wp3647910.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Aboutme;
