import React, { useState } from "react";
import { Row, Col, Menu, Dropdown, Drawer, Avatar, Image, Space } from "antd";
import {
  MenuOutlined,
  BellOutlined,
  DownOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import "./header.css";
import HeaderSecondary from "./header-secondary";

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
export const Header = ({ children }) => {
  const [state, setState] = useState({ visible: false });

  const showDrawer = () => {
    setState({ visible: true });
  };
  const closeDrawer = () => {
    setState({ visible: false });
  };

  return (
    <>
      <nav>
        <Row className="header">
          <Col span={8}>
            <MenuOutlined onClick={showDrawer} />
          </Col>
          <Col className="header__logo" span={8}>
            <span className="kollab-logo">Kollab</span>
          </Col>
          <Col span={8}>
            <ul className="menu">
              <li>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger="click"
                >
                  <div
                    className="menu-link__item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar icon={<UserOutlined />} />
                    <span className="dropdown-text">John Doe</span>
                    <DownOutlined />
                  </div>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger="click"
                >
                  <div
                    className="menu-link__item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <BellOutlined />
                  </div>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger="click"
                >
                  <div
                    className="menu-link__item"
                    onClick={(e) => e.preventDefault()}
                  >
                    <QuestionCircleOutlined />
                  </div>
                </Dropdown>
              </li>
            </ul>
          </Col>
        </Row>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={closeDrawer}
          visible={state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <HeaderSecondary />
      </nav>

      <div className="header-children_wrapper">{children}</div>
    </>
  );
};

export default Header;
