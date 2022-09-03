import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const MenuItems = ({ children }) => {
  return <div className="grid grid-cols-2 mb-6">{children}</div>;
};

const Menu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="block w-full py-4 border-2 border-gray-400 rounded-md"
        onClick={() => setIsOpen((i) => !i)}
      >
        <div className="flex justify-between items-center px-4">
          <span>{title}</span>
          <span>
            <HiChevronDown size={24} />
          </span>
        </div>
      </button>
      <motion.div
        className="overflow-hidden "
        animate={{ height: isOpen ? "auto" : "0" }}
      >
        <MenuItems>{children}</MenuItems>
      </motion.div>
    </>
  );
};

export default Menu;
