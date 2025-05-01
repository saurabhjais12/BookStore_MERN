import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <main className="flex-grow pt-16 pb-16 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-center" /> 
    </div>
  );
};

export default Layout;
