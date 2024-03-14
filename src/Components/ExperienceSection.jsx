import React, { useRef, useEffect, useState, useLayoutEffect } from "react";

const ExperienceSection = () => {
  const animatedDescription = useRef();
  const [isElementVisble, setIsElementVisble] = useState(!false);

  const options = {
    rootMargin: "-150px",
    threshold: 1,
  };

  useLayoutEffect(() => {
    const oberver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsElementVisble(entry.isIntersecting);
    }, options);
    const isOberserving = oberver.observe(animatedDescription.current);

    if (isOberserving) {
    }

    return () => {
      if (animatedDescription.current)
        oberver.unobserve(animatedDescription.current);
    };
  }, []);

  return (
    <div className="exp-banner my-[4rem]">
      <div className="container h-full">
        <div className="flex flex-col items-center m-auto">
          {/* <h1 className="gradient-text md:text-5xl text-3xl text-center font-bold my-6">
            Experience
          </h1> */}

          <p
            ref={animatedDescription}
            className={` text-gray-400 font-bold font-mono py-4 ${
              isElementVisble ? "text-l" : "reveal"
            } `}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, eius aspernatur et aperiam recusandae adipisci quis
            dolores sint assumenda cumque praesentium? Eius quam iure rem
            necessitatibus dignissimos aliquam accusantium quos!
          </p>
          <div className="flex gap-4 flex-wrap md:flex-nowrap w-full text-black">
            <div className="w-full flex overflow-hidden">
              <img
                className="w-100 rounded-xl hover:scale-150 hover:delay-[1s] hover:transition-all ease-in-out"
                src=""
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3 justify-center w-full">
              <div className="bg-orange-100 p-5 rounded-xl hover:translate-x-3 cursor-pointer transition-all">
                <img src="./images/career-icon.png" alt="" />
                <p>2022 - Present</p>
                <h1 className="text-n-5 font-semibold text-[1.4rem]">
                  Frontend Developer
                </h1>
                <p className="leading-[1.3rem] text-[1rem]">
                  Lorem eius aspernatur et aperiam recusandae adipisci quis
                </p>
              </div>
              <div className="flex flex-col gap-1 bg-sky-200 p-5 rounded-xl hover:translate-y-1 cursor-pointer transition-all">
                <img
                  className="w-full max-w-6 max-h-6"
                  src="./images/education-icon.png"
                  alt=""
                />
                <h1>2018 - 2022</h1>
                <p className="text-[1.2rem] font-semibold">
                  Bachelor's of Technology
                </p>
                <p>Lorem eius aspernatur et aperiam recusandae adipisci quis</p>
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
