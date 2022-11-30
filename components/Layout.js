import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Menu />

      <Footer/>
    </div>
  );
};

export default Layout;
