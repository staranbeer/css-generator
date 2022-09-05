import React from "react";
import Layout from "./components/layout/Layout";
import ButtonEditor from "./features/buttonSlice/ButtonEditor";
import { Routes, Route } from "react-router-dom";
import InputEditor from "./features/InputSlice/InputEditor";
import ParaEditor from "./features/paraSlice/ParaEditor";

const App = () => {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/button" element={<ButtonEditor />} />
          <Route path="/input" element={<InputEditor />} />
          <Route path="/para" element={<ParaEditor />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
