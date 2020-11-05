import React from "react";
import { Card, Col, Row, Badge } from "antd";
import { QuestionCircleFilled, ArrowUpOutlined } from "@ant-design/icons";
import "./dashboard-card-item.css";

import { Typography } from "antd";
export const DashboardCardItem = () => {
  const { Title } = Typography;
  return (
    <Col xs={24} xs={24} sm={24} md={12} lg={6} xl={6} xl={6} xl={6}>
      <Card className="card__inner" bordered={true}>
        <div className="card__header">
          <Title className="card__title" level={3}>
            Sales
          </Title>
          <QuestionCircleFilled className="card__title-icon" />
        </div>
        <Row className="card__body" align="middle">
          <Col span="8"> 
            <span className="card__badge">
              <span className="card-badge__text">20%</span>
              <ArrowUpOutlined />
            </span>
          </Col>
          <Col span="16" className="card__content">
            <div className="card__item">
              <span>Lifetime Sales</span>
              <Title level={3}>P 175,000</Title>
              <div></div>
            </div>
            <div className="card__item">
              <span>Revenue Sales</span>
              <Title level={3}>P 175,000</Title>
              <div></div>
            </div>
          </Col>
        </Row>
        <div className="card__footer">
          <span>Average Order Value</span>
          <span> P 1, 000.00</span>
        </div>
      </Card>
    </Col>
  );
};

export default DashboardCardItem;
