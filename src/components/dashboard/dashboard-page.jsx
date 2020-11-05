import React from "react";
import DashboardCardGroup from "./dashboard-card-group";
import DateGroup from "../date-picker/date-picker";
import Chart from "../chart/chart";
import "./dashboard-page.css";
export const DashboardPage = () => {
  return (
    <>
      <DashboardCardGroup />
      <DateGroup />
      <Chart />
    </>
  );
};

export default DashboardPage;
