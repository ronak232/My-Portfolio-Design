import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Homepage = () => {
  const textAnimation1 = useRef(null);
  const textAnimation2 = useRef(null);

  const animateText = () => {
    const tl = gsap.timeline({ defaults: { stagger: 0.5 } });
    tl.to(textAnimation1.current, {
      duration: 1,
      y: 0,
      delay: 0.5,
      ease: "power4.out",
    })
      .to(textAnimation2.current, {
        duration: 1,
        y: 0,
        delay: 0.5,
        ease: "power4.out",
      })
      .set([textAnimation1.current, textAnimation2.current], {
        transform: "translate(0px, 0px)",
      });
  };

  useEffect(() => {
    animateText();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="hero h-1/2 lg:h-full">
      <div className="hero__banner container flex flex-col-reverse md:flex-row-reverse">
        <div className="hero__container h-full flex flex-col justify-center md:w-[90rem] md:justify-center">
          <div className="relative h-[70px] overflow-hidden w-full">
            <h1
              ref={textAnimation1}
              className="text-[2rem] md:text-[1.8rem] text-white absolute top-0 left-0 leading-[2rem]"
            >
              Hello!
              <span className="font-bold text-green-400 text-[1.2rem] md:text-[3rem] ps-2">
                I'm Ronak Mathur
              </span>
            </h1>
          </div>
          <div className="relative overflow-hidden h-[110px] leading-10 md:h-[85px] w-full">
            <h1
              ref={textAnimation2}
              className="text-[1.8rem] md:text-[2.2rem] text-white absolute top-0 left-0"
            >
              Front-End and UI Developer
            </h1>
          </div>
          <div className="flex items-center gap-5 h-[65px]">
            {/* <button className="bg-transparent text-white p-3 rounded-2xl hover:text-pink-200 border-2">
              See more Work
            </button> */}
            <button className="bg-transparent p-3 rounded-2xl text-white hover:text-pink-200 border-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
