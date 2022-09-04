import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.svg";
const navLinks = [
  { name: "Button", link: "/button" },
  { name: "Input", link: "/input" },
  { name: "Text", link: "/text" },
];
const Header = () => {
  return (
    <header className="flex items-center px-8 py-3 border-b border-gray-300 shadow-sm">
      <div className="flex items-end gap-20">
        <div>
          <img src={logo} alt="" className="h-7" />
        </div>
        <nav>
          <ul className="flex gap-6">
            {navLinks.map((navLink) => (
              <NavLink
                to={navLink.link}
                className={({ isActive }) =>
                  isActive ? " underline-offset-4 underline" : "inactive"
                }
              >
                {navLink.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
