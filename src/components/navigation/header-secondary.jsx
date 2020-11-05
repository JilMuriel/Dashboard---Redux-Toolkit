import React from "react";
import { PieChartOutlined, QuestionCircleFilled } from "@ant-design/icons";
import "./header-secondary.css";

export const HeaderSecondary = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__logo">
        <PieChartOutlined className="dashboard-header-logo__icon" />
        <span className="dashboard-header-logo__text">Analytics</span>
        <QuestionCircleFilled className="dashboard-header-logo__icon-right" />
      </div>
    </div>
  );
};

export default HeaderSecondary;