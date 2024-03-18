import React from "react";
import { motion } from "framer-motion";
import SiderbarMenu from "./Sidebar/SiderbarMenu";
// import Logo from "../assets/"

function Navbar() {
  return (
    <>
      <SiderbarMenu />
      <nav className="top-0 left-0 right-0 z-2 w-full bg-transparent py-2">
        <div className="container flex items-center justify-between py-[0.5rem] px-[1rem]">
          <motion.a
            className="h-auto w-full flex items-center justify-center"
            href=""
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.9 }}
          >
            <a className="" href="#">
              <img src="./images/logo.png" alt="" width={30} height={30} />
            </a>
          </motion.a>

          <ul className="hidden md:flex items-center justify-center gap-4 w-full ">
            <a href="">
              <li>Portfolio</li>
            </a>
            <a href="">
              <li>About Me</li>
            </a>
            <a href="">
              <li>Contact Me</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
