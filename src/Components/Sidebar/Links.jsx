import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const listItemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const menuLinks = [
    "homepage",
    "portfolio",
    "testimonial",
    "about",
    "contact",
  ];
  return (
    <motion.div
      className="block my-[7.89rem] w-full h-full"
      variants={variants}
    >
      <ul className="flex items-center flex-col gap-7 text-n-10">
        {menuLinks.map((items) => {
          return (
            <motion.a href={`#${items}`} variants={listItemsVariants} whileHover={{scale:1.5}} whileTap={{scale:0.1}}>
              <li className="cursor-pointer capitalize ">{items}</li>
            </motion.a>
          );
        })}
      </ul>
    
      <div className="flex gap-2 w-full justify-center pt-6">
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/meta.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/github-dark.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/linkedin.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <img
                className="object-cover w-100"
                src="./images/instagram.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
          </div>
    </motion.div>
  );
};

export default Links;
