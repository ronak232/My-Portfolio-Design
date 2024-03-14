import React, { useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const SiderbarMenu = () => {
  const [isSidebarOpen, setIsSidebaropen] = useState(false);

  //   Sidebar opening animation using framer motion..
  const variants = {
    open: {
      clipPath: "circle(1200px at 200px 200px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
        delay: 1,
      },
    },
    closed: {
      clipPath: "circle(32px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div
        className="bg-white text-n-10"
        animate={isSidebarOpen ? "open" : "closed"}
      >
        <motion.div
          className="fixed top-0 left-0 bottom-0 z-5 min-w-64 md:min-w-[30rem] bg-white"
          variants={variants}
        >
          <Links />
        </motion.div>
        <ToggleButton setIsSidebaropen={setIsSidebaropen} />
      </motion.div>
    </>
  );
};

export default SiderbarMenu;
