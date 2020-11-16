import React from "react";
import { PieChartOutlined, QuestionCircleFilled } from "@ant-design/icons";
import { Space } from "antd";
import "./sub-navigation.css";

export const SubNavigation = () => {
  return (
    <div className="sub-navigation">
      <Space align="middle" size="small" className="sub-navigation__inner">
        <PieChartOutlined className="sub-navigation__icon" />
        <span className="sub-navigation__title">Analytics</span>
        <QuestionCircleFilled className="sub-navigation__button" />
      </Space>
    </div>
  );
};

export default SubNavigation;
