import React from "react";
import { motion } from "framer-motion";
import SiderbarMenu from "./Sidebar/SiderbarMenu";
// import Logo from "../assets/"

function Navbar() {
  return (
    <>
      <SiderbarMenu />
      <nav className="top-0 left-0 right-0 z-2 w-full bg-transparent py-4">
        <div className="container flex items-center justify-between py-[0.5rem] px-[1rem]">
          <motion.a
            className="h-auto w-full flex items-center justify-center"
            href=""
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.9 }}
          >
            <span>Dev</span>
          </motion.a>
          <div className="flex gap-2 w-full justify-center">
            <button className="">
              <a href="">Contact Me</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
