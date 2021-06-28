// import Footer from "./Footer";
// import Navbar from "./Navbar";

import NavBar from "@components/layout/navBar/navbar";
import { AppProps } from "next/app";
import React, { ReactNode } from "react";
import mobileNav from "./navBar/navbar.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
