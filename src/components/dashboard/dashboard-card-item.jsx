import React from "react";
import { Card, Col, Row, Badge } from "antd";
import { QuestionCircleFilled, ArrowUpOutlined } from "@ant-design/icons";
import "./dashboard-card-item.css";

import { Typography } from "antd";

export const DashboardCardItem = () => {
  const { Title } = Typography;

  const CardBadge = ({ content, status }) => (
    <div className="card__badge">
      <span className="card-badge__text">{content}</span>
      {status ? <ArrowUpOutlined /> : "drecrease"}
    </div>
  );

  const CardContent = ({ title, amount, isCurrency }) => (
    <div className="card__item">
      <span>{title}</span>
      <Title level={3}>
        {isCurrency ? <span className="currency">P</span> : null} {amount}
      </Title>
      <div></div>
    </div>
  );

  return (
    <Col xs={24} xs={24} sm={24} md={12} lg={6} xl={6} xl={6} xl={6}>
      <Card className="card__inner" bordered={true} hoverable>
        <div className="card__header">
          <Title className="card__title" level={3}>
            Sales
          </Title>
          <QuestionCircleFilled className="card__title-icon" />
        </div>
        <Row className="card__body" align="middle">
          <Col span="8">
            <CardBadge content="20%" status={true} />
          </Col>
          <Col span="16" className="card__content">
            <CardContent title="Lifetime Sales" amount="175,000" isCurrency />
            <CardContent title="Lifetime Sales" amount="175,000" isCurrency />
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
