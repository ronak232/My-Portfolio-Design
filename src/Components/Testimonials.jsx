import React from "react";
import data from "../data/data.json";

const Testimonials = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-gray-400 text-[3.2rem] block leading-[5rem] py-6 text-center">
        Testimonial...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {data.images.map((items) => {
          return (
            <div
              className="flex flex-col items-center gap-3 border-1 shadow-lg shadow-slate-300 rounded-2xl"
              key={items.id}
            >
              <img
                className="rounded-full h-16 w-16 mr-4"
                src={items.img}
                alt="Testimonial 1"
              />
              <div className="p-4">
                <p className="text-lg text-black mb-4">{items.review}</p>
                <p className="text-black">John Doe</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
