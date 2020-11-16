import React from "react";
import DashboardCardGroup from "./dashboard-card-group";
import DateGroup from "../date-picker/date-picker";
import Chart from "../chart/chart";
import Layout from "../layout/layout";
import "./dashboard-page.css";

export const DashboardPage = () => {
  return (
    <>
      <Layout>
        <DashboardCardGroup />
        <DateGroup />
        <Chart />
      </Layout>
    </>
  );
};

export default DashboardPage;
