import React, { useState } from "react";
import Editor from "./components/Editors/Editor/Editor";
import { Result } from "./components/Results/Result/Result";
import "./App.css";
import Intro from "./components/utils/Intro";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleClose = () => {
    console.log("closing");
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <Intro onClose={handleClose}>
          <h2>what would you like to style today?</h2>

          <select>
            <option>Select something to syle</option>
            <option>buttons</option>
            <option>Inputs</option>
          </select>
        </Intro>
      )}
      <div className="site-container">
        <section className="site-section">
          <Editor />
        </section>
        <section className="site-section">
          <Result />
        </section>
      </div>
    </>
  );
};

export default App;
