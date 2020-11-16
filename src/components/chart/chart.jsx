import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Select, Space } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { Card } from "antd";
import { Doughnut } from "@reactchartjs/react-chart.js";
import "./chart.css";

const { Option } = Select;
export const Chart = () => {
  const { Title } = Typography;
  return (
    <div className="chart">
      <Card className="chart__card">
        <div className="chart__header">
          <Row align="middle">
            <Col className="chart__col-left" span={12}>
              <Title level={4} className="chart__title">
                Sales Overview
                <QuestionCircleFilled className="chart__title-icon" />
              </Title>
            </Col>
            <Col className="chart__col-right" span={12}>
              <Space>
                <Select
                  size={"large"}
                  placeholder="Choose a Transaction"
                  style={{ width: 220 }}
                >
                  <Option>All Transactions</Option>
                </Select>
                <Select
                  size={"large"}
                  placeholder="Choose a Branch"
                  style={{ width: 220 }}
                >
                  <Option>All Branches</Option>
                </Select>
              </Space>
            </Col>
          </Row>
        </div>
        <div className="chart__body">
          <Row className="chart__inner">
            <Col span={18} className="chart__content">
              <div>Total:</div>
              <div>sales button</div>
              <div>sales button</div>
              <div>sales button</div>
            </Col>
            <Col span={6} className="chart__content">asd</Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default Chart;
