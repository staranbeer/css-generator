import React from "react";
import { useSelector } from "react-redux";
import ButtonEditor from "./features/buttonSlice/ButtonEditor";

const App = () => {
  const { styles } = useSelector((state) => state.button);
  return (
    <div className="bg-[#121212]">
      <div className="max-w-6xl  mx-auto  flex flex-col md:flex-row h-screen w-screen overflow-hidden">
        <div className="w-full max-w-lg md:max-w-full py-8 mx-auto flex-1 grid place-items-center px-4 lg:px-14">
          <div className="w-full">
            <ButtonEditor />
          </div>
        </div>
        <div className="flex-1 grid place-items-center ">
          <pre>{JSON.stringify(styles, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
