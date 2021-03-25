import React from "react";
import classes from "../styles/Layout.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={classes.container}>
        <main className={classes.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
