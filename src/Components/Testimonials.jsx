import React from "react";
import data from "../data/data.json";

const Testimonials = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-gray-400 text-[3.2rem] block leading-[5rem] py-6 text-center">
        Testimonial...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data.images.map((items) => {
          return (
            <div
              className="flex flex-col items-center gap-7 border-[1px] border-black rounded-lg p-6"
              key={items.id}
            >
              <img
                className="rounded-full h-16 w-16 mr-4"
                src={items.img}
                alt="Testimonial 1"
              />
              <div>
                <p className="text-lg text-black mb-4">{items.review}</p>
                <p className="text-black">John Doe</p>
              </div>
            </div>
          );
        })}
        {/* <div className="flex flex-col items-center gap-7 border-[1px] border-black rounded-lg p-6">
          <img
            className="rounded-full h-16 w-16 mr-4"
            src="https://via.placeholder.com/150"
            alt="Testimonial 1"
          />
          <div>
            <p className="text-lg text-black mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="text-black">John Doe</p>
          </div>
        </div>
        <div className="flex items-center flex-col gap-7 border-[1px] border-black rounded-lg p-6">
          <img
            className="rounded-full h-16 w-16 mr-4"
            src="https://via.placeholder.com/150"
            alt="Testimonial 2"
          />
          <div>
            <p className="text-lg text-black mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="text-black">Jane Smith</p>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Testimonials;
