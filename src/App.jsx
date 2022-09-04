import React from "react";
import { useSelector } from "react-redux";
import ButtonResult from "./components/layout/ButtonResult";
import ButtonEditor from "./features/buttonSlice/ButtonEditor";

const App = () => {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto  flex flex-col md:flex-row h-screen w-screen overflow-hidden">
        <div className="w-full max-w-lg md:max-w-full py-8 mx-auto flex-1 grid place-items-center px-4 lg:px-14">
          <div className="w-full">
            <ButtonEditor />
          </div>
        </div>
        <div className="relative w-full bg-white flex-1 grid place-items-center ">
          <ButtonResult />
        </div>
      </div>
    </div>
  );
};

export default App;
