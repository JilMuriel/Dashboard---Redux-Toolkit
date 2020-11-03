import React from "react";
import DashboardHeader from "./dashboard-header";
import DashboardCardGroup from "./dashboard-card-group";
import DateGroup from "../date-picker/date-picker";
import Chart from "../chart/chart";
import "./dashboard-page.css";
export const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardCardGroup />
      <DateGroup />
      <Chart />
    </>
  );
};

export default DashboardPage;
