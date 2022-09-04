import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="p-12 shadow-lg">
        <h1 className="text-lg">What would you like to Style today?</h1>
        <div className="mt-10">
          <Link
            to={"/button"}
            className="px-3 py-2 bg-blue-500 text-white font-bold rounded"
          >
            Buttons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
