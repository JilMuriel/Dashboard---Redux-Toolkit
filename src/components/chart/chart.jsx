import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Column } from "@ant-design/charts";
import "./chart.css";

export const Chart = () => {
  const data = [
    {
      name: "London",
      Month: "Jan.",
      "Average monthly rainfall": 18.9,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: "month",
    yField: "monthly average rainfall",
    seriesField: "name",
    color: ["#1ca9e6", "#f88c24"],
    marginRatio: 0,
  };
  return (
    <div className="chart-wrapper">
      <Card className="chart-card">
        <div className="chart-card__body">
          <Column {...config} autoFit={true} />
        </div>
      </Card>
    </div>
  );
};

export default Chart;
