import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { MenuOutlined, BellOutlined, DownOutlined } from "@ant-design/icons";

import "./header.css";
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);
export const Header = () => {
  return (
    <nav>
      <Row className="header">
        <Col span={8}>
          <MenuOutlined />
        </Col>
        <Col className="header__logo" span={8}>
          <span className="kollab-logo">Kollab</span>
        </Col>
        <Col span={8}>
          <ul className="menu">
            <li>
              <Dropdown overlay={menu}>
                <div
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  John Doe
                  <DownOutlined />
                </div>
              </Dropdown>
            </li>
            <li>
              <BellOutlined />
            </li>
            <li>Link Item 03</li>
          </ul>
        </Col>
      </Row>
    </nav>
  );
};

export default Header;
