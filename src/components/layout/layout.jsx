import React from "react";
import TopNavigation from "../navigation/top-navigation";
import SubNavigation from "../navigation/sub-navigation";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="layout__header">
        <TopNavigation />
        <SubNavigation />
      </div>
      <div className="layout__body">{children}</div>
    </>
  );
};

export default Layout;
