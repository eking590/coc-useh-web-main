import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/outline";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  // navigation
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Library",
      href: "",
    },
    {
      name: "About Us",
      href: "",
    },
    {
      name: "Contact Us",
      href: "",
    },
    {
      name: "Sign In",
      href: "/login",
    },
  ];

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <>
      <div className="w-full px-[40px] mt-[26px] py-[11px] mb-[93px] justify-between items-center text-[#fff]  hidden md:flex">
        <img src="/images/logo.png" alt="" />
        <div className=" flex gap-x-[8.75rem]">
          <Link className=" text-[20px] font-[400]" to={""}>
            Home
          </Link>
          <Link className=" text-[20px] font-[400]" to={""}>
            Library
          </Link>
          <Link className=" text-[20px] font-[400]" to={""}>
            About Us
          </Link>
          <Link className=" text-[20px] font-[400]" to={""}>
            Contact Us
          </Link>
        </div>
        <button className=" w-[116px] h-[58px] p-[10px] rounded-[12px] border-[1px] border-[#fff] text-[20px] font-[400]">
          Sign In
        </button>
      </div>

      <nav className="relative w-full">
        <div className="w-full px-[10px] mt-[10px] py-[6px] justify-between items-center text-[#fff]  md:hidden flex">
          <img src="/images/logoWhite.png" alt="" />
          <img
            src="/images/menuWhite.png"
            alt=""
            onClick={() => setIsOpen(true)}
          />
        </div>

        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-4 h-4 rounded-full bg-[#000] fixed top-0 right-0"
        ></motion.div>

        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate={isOpen ? "visible" : ""}
          className={`${
            isOpen ? "right-0" : "right-full"
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all
           duration-300 overflow-hidden 
           `}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-8 right-8 text-white"
          >
            <XIcon className="h-8 w-8" />
          </div>

          {navigation.map((item, index) => {
            return (
              <li key={index} className="mb-8">
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all
                  duration-300 text-[#fff] text-[20px] font-[400]"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </motion.ul>
      </nav>
    </>
  );
}

export default Menu;
