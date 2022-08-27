import React from "react";
import Editor from "./components/Editors/Editor/Editor";
import { Result } from "./components/Results/Result/Result";
import "./App.css";
const App = () => {
  return (
    <div className="site-container">
      <section className="site-section">
        <Editor />
      </section>
      <section className="site-section">
        <Result />
      </section>
    </div>
  );
};

export default App;
