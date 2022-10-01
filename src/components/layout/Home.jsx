import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/bg.jpg';

const Home = ({ showEditor }) => (
  <div className="grid h-screen w-screen overflow-hidden place-items-center">
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-center ">
          Design your HTML elements without directly writing any CSS!
        </h1>
        <Link
          to="/editor/button"
          onClick={showEditor}
          className="btn btn-lg mx-auto block max-w-max mt-6"
        >
          Get Started
        </Link>
      </div>
      <img
        src={bg}
        alt="edison's electric pen"
        title="edison's electric pen"
      />
    </div>
  </div>
);

export default Home;
