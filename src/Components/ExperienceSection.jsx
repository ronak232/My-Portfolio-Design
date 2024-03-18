import React, { useRef, useEffect, useState, useLayoutEffect } from "react";

const ExperienceSection = () => {
  return (
    <div className="exp-banner py-[4rem]">
      <div className="container h-full">
        <div className="flex flex-col m-auto">
          <h1 className="gradient-text md:text-5xl text-3xl font-bold">
            Experience
          </h1>

          <p className="text-gray-700 font-bold font-mono py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, eius aspernatur et aperiam recusandae adipisci quis
            dolores sint assumenda cumque praesentium? Eius quam iure rem
            necessitatibus dignissimos aliquam accusantium quos!
          </p>
          <div className="flex gap-4 flex-wrap md:flex-nowrap w-full text-black">
            <div className="max-w-[400px] justify-center w-full m-auto">
              <div className="flex flex-col gap-5 bg-white py-5 rounded-xl cursor-pointer border p-4">
                <img
                  className=""
                  width={20}
                  height={20}
                  src="./images/career-icon.png"
                  alt=""
                />
                <p className="">2022 - Present</p>
                <h1 className="text-n-5 font-semibold text-[1.4rem]">
                  Frontend Developer
                </h1>
                <ul>
                  <li className="leading-[1.3rem] text-[1rem]">
                    Working as Frontend Developer
                  </li>
                </ul>
                <p>Tech Stack - HTML, CSS, Javascript, React JS, SCSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ExperienceSection;
