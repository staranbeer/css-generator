import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" w-screen h-screen overflow-hidden ">
      <div className="grid md:grid-cols-2 w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
