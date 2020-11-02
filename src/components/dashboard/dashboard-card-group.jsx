import React from "react";

import { Row } from "antd";
import DashboardCardItem from "./dashboard-card-item";
import "./dashboard-card-group.css";

export const DashboardCardGroup = () => {
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };
  return (
    <div className="dashboard-card-group">
      <Row gutter={[16, 24]}>
        <DashboardCardItem />
        <DashboardCardItem />
        <DashboardCardItem />
        <DashboardCardItem />
      </Row>
    </div>
  );
};

export default DashboardCardGroup;
