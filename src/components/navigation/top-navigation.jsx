import React, { useState } from "react";
import { Row, Col, Drawer, Avatar, Space, Badge } from "antd";
import {
  MenuOutlined,
  BellOutlined,
  DownOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import NavigationMenu from "./navigation-menu";
import "./top-navigation.css";

export const TopNavigation = () => {
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({ visible: true });
  };
  const closeDrawer = () => {
    setState({ visible: false });
  };

  return (
    <>
      <nav className="top-navigation">
        <Row className="top-navigation__inner">
          <Col span={8}>
            <MenuOutlined onClick={showDrawer} />
            <Drawer
              title="Basic Drawer"
              placement="left"
              closable={false}
              onClose={closeDrawer}
              visible={state.visible}
            >
              <p>Link 01</p>
            </Drawer>
          </Col>
          <Col className="top-navigation__logo" span={8}>
            <span className="top-navigation__icon">Kollab</span>
          </Col>
          <Col span={8}>
            <ul className="top-navigation__menu">
              <li className="top-navigation__item">
                <div className="top-navigation__link top-navigation__link--space">
                  <Avatar size="small" icon={<UserOutlined />} />
                  <span className="dropdown-text">John Doe</span>
                  <DownOutlined className="top-navigation__dropdown-icon" />
                </div>
              </li>
              <li className="top-navigation__item">
                <div className="top-navigation__link">
                  <Badge size="small" count={5}>
                    <BellOutlined className="top-navigation__link-icon  " />
                  </Badge>
                </div>
              </li>
              <li className="top-navigation__item">
                <div className="top-navigation__link">
                  <QuestionCircleOutlined className="top-navigation__link-icon " />
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default TopNavigation;
