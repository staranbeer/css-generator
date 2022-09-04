import React from "react";
import Layout from "./components/layout/Layout";
import ButtonEditor from "./features/buttonSlice/ButtonEditor";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonEditor />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
