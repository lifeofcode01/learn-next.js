// import Footer from "./Footer";
// import Navbar from "./Navbar";

import NavBar from "@components/layout/navBar/navbar";
import { AppProps } from "next/app";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
