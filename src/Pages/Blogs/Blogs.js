import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="mb-10">
      <h1 className="text-center text-gray-800 py-4 font-bold text-4xl">
        Blogs
      </h1>
      <div className="flex md:flex-row flex-col px-4 md:px-10 ">
        <div>
          <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
            <div className="w-full mx-auto space-y-4">
              <h1 className="text-5xl font-bold leading-none">5 Tips</h1>
              <div className="flex flex-wrap space-x-2 text-sm  text-gray-800"></div>
              <p className="text-sm  text-gray-800">
                by
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline  text-violet-800"
                >
                  <span>Leroy Jenkins</span>
                </a>
                on
                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
              </p>
            </div>
            <div className=" text-gray-800">
              <p>
                5 Tips for Preparing Your Racing Bike for the Season": In this
                blog post, you can provide readers with advice on how to get
                their racing bike ready for the upcoming racing season. Topics
                to cover might include how to check and adjust the bike's
                brakes, gears, and tires; how to clean and lubricate the bike's
                components; and how to make any necessary upgrades or repairs.
              </p>
            </div>
          </article>
        </div>
        <div>
          <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
            <div className="w-full mx-auto space-y-4">
              <h1 className="text-5xl font-bold leading-none">
                Strength Training
              </h1>
              <div className="flex flex-wrap space-x-2 text-sm  text-gray-800"></div>
              <p className="text-sm  text-gray-800">
                by
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline  text-violet-800"
                >
                  <span>Leroy Jenkins</span>
                </a>
                on
                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
              </p>
            </div>
            <div className=" text-gray-800">
              <p>
                The Benefits of Strength Training for Racing Cyclists": In this
                blog post, you can discuss the importance of strength training
                for racing cyclists. You can provide information on the specific
                muscles that cyclists should focus on, as well as exercises that
                can help improve their cycling performance..
              </p>
            </div>
          </article>
        </div>
      </div>
      <div className="flex md:flex-row flex-col px-4 md:px-10 ">
        <div>
          <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
            <div className="w-full mx-auto space-y-4">
              <h1 className="text-5xl font-bold leading-none">
                Top 10 Racing Bikes
              </h1>
              <div className="flex flex-wrap space-x-2 text-sm  text-gray-800"></div>
              <p className="text-sm  text-gray-800">
                by
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline  text-violet-800"
                >
                  <span>Christofer Nolan</span>
                </a>
                on
                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
              </p>
            </div>
            <div className=" text-gray-800">
              <p>
                The Top 10 Racing Bikes of 2023": In this blog post, you can
                review some of the top racing bikes that are available on the
                market this year. You can provide readers with information on
                the bikes' features, specs, and pricing, as well as your
                personal recommendations and insights.
              </p>
            </div>
          </article>
        </div>
        <div>
          <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
            <div className="w-full mx-auto space-y-4">
              <h1 className="text-5xl font-bold leading-none">
                Choose the Right Racing Bike
              </h1>
              <div className="flex flex-wrap space-x-2 text-sm  text-gray-800">
                {/* <a
                  rel="noopener noreferrer"
                  href="/"
                  className="p-1 hover:underline"
                >
                  #node
                </a>
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="p-1 hover:underline"
                >
                  #nodejs
                </a>
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="p-1 hover:underline"
                >
                  #javascript
                </a> */}
              </div>
              <p className="text-sm  text-gray-800">
                by
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline  text-violet-800"
                >
                  <span>A C E R</span>
                </a>
                on
                <time datetime="2021-02-12 15:34:18-0200">March 12th 2021</time>
              </p>
            </div>
            <div className=" text-gray-800">
              <p>
                How to Choose the Right Racing Bike for Your Needs": In this
                blog post, you can provide readers with guidance on how to
                choose the right racing bike for their specific needs and
                preferences. You can discuss factors such as frame material,
                gearing, and wheel size, and provide recommendations on
                different types of racing bikes for different types of races.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
