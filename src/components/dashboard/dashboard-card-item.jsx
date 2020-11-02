import React from "react";
import { Card, Col, Row, Badge } from "antd";
import { QuestionCircleFilled, ArrowUpOutlined } from "@ant-design/icons";

import { Typography } from "antd";
export const DashboardCardItem = () => {
  const { Title } = Typography;
  return (
    <Col xs={24} xs={24} sm={24} md={12} lg={6} xl={6} xl={6} xl={6}>
      <Card className="card-group-item" bordered={true}>
        <div className="card-header">
          <Title level={3}>Sales</Title>
          <QuestionCircleFilled className="card-header-text__icon" />
        </div>
        <Row className="card-body" align="middle">
          <Col span="8">
            <span className="card-body__badge">
              <span className="card-body-badge-content">20%</span>
              <ArrowUpOutlined />
            </span>
          </Col>
          <Col span="16" className="card-body-right__content">
            <div className="card-body-right-content__item">
              <span>Lifetime Sales</span>
              <Title level={3}>P 175,000</Title>
              <div></div>
            </div>
            <div className="card-body-right-content__item">
              <span>Revenue Sales</span>
              <Title level={3}>P 175,000</Title>
              <div></div>
            </div>
          </Col>
        </Row>
        <div className="card-footer">
          <span>Average Order Value</span>
          <span> P 1, 000.00</span>
        </div>
      </Card>
    </Col>
  );
};

export default DashboardCardItem;
