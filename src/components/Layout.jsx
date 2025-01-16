// Main layout
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navigation/navbar";
import { Footer } from "./Navigation/footer";


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
