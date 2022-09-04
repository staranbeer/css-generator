import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useEffect } from "react";

const MenuItems = ({ children }) => {
  return (
    <div className="grid mt-2 gap-2 sm:gap-8 md:gap-12 items-start  sm:grid-cols-2 mb-6">
      {children}
    </div>
  );
};

const Menu = ({ title, children, activeMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(activeMenu === title);

  const handleClick = () => {
    setActiveMenu(title);
    setIsOpen((i) => !i);
  };

  const handleClose = () => {
    if (activeMenu !== title) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleClose();
  }, [activeMenu]);

  return (
    <>
      <button
        className={`menu__item shadow-md  block w-full py-4 border  rounded  `}
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
