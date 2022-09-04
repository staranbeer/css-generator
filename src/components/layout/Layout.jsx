import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Header />
      <div className="overflow-hidden h-full">{children}</div>
    </div>
  );
};

export default Layout;
