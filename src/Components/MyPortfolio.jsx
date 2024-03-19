import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../data/data.json";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const MyPortfolio = () => {
  const [currentSlideIndex, setcurrentSlideindex] = useState(0);

  const revealText = useRef(null);
  const imageSlideIn = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealText.current,
        start: "50% 80%",
        end: "100% 100%",
        toggleActions: "pause none none none",
        scrub: 1,
      },
    });

    tl.to(revealText.current, {
      opacity: 1,
      x: 0,
      transition: "all 0.1s ease-in-out",
    }).to(imageSlideIn.current, {
      opacity: 1,
      y: 0,
      transition: "all 0.1s ease-in-out",
    });
  }, []);

  // Previous silde
  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setcurrentSlideindex(currentSlideIndex - 1);
    } else {
      setcurrentSlideindex(data.services.length - 1);
    }
  };

  // Next slide
  const nextSlide = () => {
    if (currentSlideIndex === data.services.length - 1) {
      setcurrentSlideindex(0);
      console.log(currentSlideIndex);
    } else {
      setcurrentSlideindex(currentSlideIndex + 1);
    }
  };

  return (
    <div className="portfolio py-16 h-full">
      <div className="container">
        <h1 className="gradient-text text-[2.2rem] pb-4">About Me...</h1>
        <div
          className="flex flex-col md:flex-row gap-5 my-[30px] overflow-hidden"
          data-speed="0.5"
        >
          <p
            ref={revealText}
            className="w-full font-light font-basic leading-[30px] opacity-0 -translate-x-[650px]"
          >
            Welcome to my portfolio!
            <span className="text-[1.5rem] text-cyan-700 ps-1 font-basic">
              I'm Ronak Mathur
            </span>
            , a passionate frontend developer dedicated to crafting exceptional
            user experiences through clean, efficient, and visually appealing
            web applications. With a blend of creativity and technical
            expertise, I specialize in transforming ideas into intuitive
            interfaces that captivate and engage users. Driven by a love for
            design and a commitment to staying at the forefront of technology, I
            thrive on the challenges of bringing concepts to life in the digital
            realm.
          </p>
          <div className="tech-stack w-full overflow-hidden">
            <div ref={imageSlideIn} className="flex flex-col -translate-y-[500px] opacity-0">
              <div className="flex justify-between items-center w-full p-2">
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/css-icon.png"
                  alt=""
                />
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/html-icon.png"
                  alt=""
                />
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/js-icon.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center w-full p-2">
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/react-icon.png"
                  alt=""
                />
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/figma-icon.png"
                  alt=""
                />
                <img
                  className="max-w-[90px] border-2 rounded-full shadow-lg p-5"
                  src="./images/icons/redux-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="services relative py-5">
          <h1 className="gradient-text text-[2.2rem] pb-2">Service</h1>

          <BsArrowRightCircle
            className="right-arrow cursor-pointer absolute text-black text-[34px] lg:right-[17.5rem] right-0 md:top-[18rem] top-[13rem] rounded-2xl bg-white border-none"
            onClick={() => nextSlide()}
          />
          <BsArrowLeftCircle
            className="left-arrow cursor-pointer absolute  text-black text-[34px] lg:left-[17.5rem] md:top-[18rem] top-[13rem] bg-white rounded-2xl border-none"
            onClick={() => prevSlide()}
          />
          <div className="flex justify-center items-center snap-x snap-mandatory scroll-smooth">
            {data.services.map((item) => {
              return (
                <div
                  className={
                    currentSlideIndex === parseInt(item.id)
                      ? "max-w-[590px] max-h-[600px] border-1 shadow-slate-200 shadow-lg rounded-2xl transition-all ease-in-out active"
                      : "hidden"
                  }
                  key={item.id}
                >
                  <img className="w-full" src={item.img} alt="some image" />
                  <p className="py-4 px-3">{item.des}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-3">
          {data.services.map((_, index) => {
            return (
              <button
                className={
                  currentSlideIndex === index
                    ? "indicator rounded-full h-3 p-2 bg-orange-400 border-none shadow-lg"
                    : "indicator rounded-full h-3 p-2 border-none shadow-lg bg-slate-950"
                }
                key={index}
                onClick={() => setcurrentSlideindex(index)}
              ></button>
            );
          })}
        </div>

        {/* Work */}
        <div className="work mt-5">
          <h1 className="gradient-text py-7 text-[2.2rem]">Portfolio</h1>
          <div className="flex justify-between md:flex-nowrap flex-wrap m-auto gap-6 sm:gap-4">
            {data.portfolio.map((item) => {
              return (
                <div className="flex flex-col border-1 shadow-lg shadow-slate-300 rounded-2xl max-h-[460px] gap-4">
                  <div className="first h-full w-full max-w-[350px] max-h-[480px] cursor-pointer">
                    <img
                      className="w-full border-b-100 h-full"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <a
                    className="p-2 bg-teal-100 max-w-[140px] m-3 rounded-xl"
                    href={item.link}
                  >
                    View on{" "}
                    <img
                      className="inline-block"
                      src="./images/github-dark.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
