import React from "react";
import Layout from "./components/layout/Layout";
import ButtonEditor from "./features/buttonSlice/ButtonEditor";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/button" element={<ButtonEditor />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
