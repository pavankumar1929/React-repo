import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3" style={{ minHeight: '80vh' }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
