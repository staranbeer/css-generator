import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const MenuItems = ({ children }) => {
  return (
    <div className="grid mt-2 gap-2 sm:gap-6 items-start  sm:grid-cols-2 mb-6">
      {children}
    </div>
  );
};

const Menu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((i) => !i);
  };

  return (
    <>
      <button
        className={`menu__item block w-full py-4 border-2 border-white rounded  `}
        onClick={handleClick}
      >
        <div className="flex justify-between items-center px-4">
          <span className="font-bold text-gray-800">{title}</span>
          <span>
            {isOpen ? (
              <HiOutlineChevronUp size={24} />
            ) : (
              <HiOutlineChevronDown size={24} />
            )}
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
