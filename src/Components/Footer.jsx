import React from "react";

const PortfolioFooter = () => {
  return (
    <footer className="h-full p-[3.4rem] w-full bg-slate-700 text-white">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <h1 className="sm:text-[3rem] text-[1.5rem] text-white text-center">
        Just a Developer! 🧑‍💻
      </h1>
      <div className=" mt-6"></div>
      <div></div>
      <div className="social-icons flex items-center md:justify-between justify-center w-full flex-col md:flex-row py-6 md:items-center">
          <p className="date text-[1rem]">Created in 2024</p>
          <div className="flex gap-3">
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/meta.svg"
                alt=""
                width={35}
                height={35}
              />
            </a>
            <a href="https://github.com/ronak232" target="_blank">
              <img
                className="object-cover w-100"
                src="./images/github.svg"
                alt=""
                width={33}
                height={33}
              />
            </a>
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/linkedin.svg"
                alt=""
                width={35}
                height={35}
              />
            </a>
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/instagram.svg"
                alt=""
                width={35}
                height={35}
              />
            </a>
          {/* </div> */}
        </div>
      </div>
      <div className="text-center pt-4">Made with ❤️ Ronak Mathur</div>
    </footer>
  );
};

export default PortfolioFooter;
