import React from "react";

const navLinks = [
  { name: "Button", link: "/button" },
  { name: "Input", link: "/input" },
  { name: "Text", link: "/text" },
];
const Layout = ({ children }) => {
  return (
    <div className=" w-screen h-screen overflow-hidden ">
      <header className="flex items-center">
        <div>logo</div>
        <nav>
          <ul className="flex">
            {navLinks.map((navLink) => (
              <li>{navLink.name}</li>
            ))}
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
