import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Header />
      <div className="mt-6 relative w-full flex-1  overflow-hidden  grid grid-cols-2 ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
