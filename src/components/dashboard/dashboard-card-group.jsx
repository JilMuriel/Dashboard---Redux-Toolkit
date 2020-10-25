import React from "react";

import { Card, Row, Col } from "antd";
import "./dashboard-card-group.css";

export const DashboardCardGroup = () => {
  return (
    <div className="dashboard-card-group">
      <Row gutter={20}>
        <Col lg={6}>
          <Card
            className="card-group-item"
            title={<div>Card title</div>}
            actions={[<div>Card title</div>]}
            bordered={false}
            hoverable
          >
            Card content
          </Card>
        </Col>
        <Col lg={6}>
          <Card
            className="card-group-item"
            title="Card title"
            bordered={false}
            hoverable
          >
            Card content
          </Card>
        </Col>
        <Col lg={6}>
          <Card
            className="card-group-item"
            title="Card title"
            bordered={false}
            hoverable
          >
            Card content
          </Card>
        </Col>
        <Col lg={6}>
          <Card
            className="card-group-item"
            title="Card title"
            bordered={false}
            hoverable
          >
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCardGroup;
