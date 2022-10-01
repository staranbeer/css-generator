import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/layout/Home';
import InputEditor from './features/InputSlice/InputEditor';
import ButtonEditor from './features/buttonSlice/ButtonEditor';
import ParaEditor from './features/paraSlice/ParaEditor';

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const showEditor = () => {
    setIsFirstTime(false);
  };

  return (
    <div className="">
      {isFirstTime ? (
        <Home showEditor={showEditor} />
      ) : (
        <Layout>
          <Routes>
            <Route path="/editor">
              <Route path="button" element={<ButtonEditor />} />
              <Route path="input" element={<InputEditor />} />
              <Route path="para" element={<ParaEditor />} />
              <Route path="*" element={<div>Not found</div>} />
            </Route>
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
