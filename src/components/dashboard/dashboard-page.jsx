import React from "react";
import DashboardHeader from "./dashboard-header";
import DashboardCardGroup from "./dashboard-card-group";

import "./dashboard-page.css";
export const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardCardGroup />
    </>
  );
};

export default DashboardPage;
