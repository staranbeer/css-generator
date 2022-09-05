import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export const MenuItem = ({ label, name, value, children }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={label}>{name}</label>
        <div className="text-blue-700 font-medium">{value}</div>
      </div>
      {children}
    </div>
  );
};

const MenuItems = ({ children }) => {
  return (
    <div className="grid mt-2 gap-2 sm:gap-8 md:gap-12 items-start  sm:grid-cols-2 mb-6">
      {children}
    </div>
  );
};

const Menu = ({ title, children, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const handleClick = () => {
    setIsOpen((i) => !i);
  };

  return (
    <>
      <button
        className={`menu__item shadow-md  block w-full py-3 border border-gray-200  rounded  `}
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
        className="overflow-hidden h-0"
        animate={{ height: isOpen ? "auto" : "0" }}
      >
        <MenuItems>{children}</MenuItems>
      </motion.div>
    </>
  );
};

export default Menu;
