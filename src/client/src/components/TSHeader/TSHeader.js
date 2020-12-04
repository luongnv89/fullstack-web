import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Row, Col } from "antd";
import {
  HomeOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";

import {
  setNotification,
} from "../../actions";
import "./styles.css";

const { Header } = Layout;

class TSHeader extends Component {
  render() {
    const menuLinks = [
      '/home',
      '/helps',
    ];
    // Calculate the selected menu
    let selectedMenu = 0;
    const fullPath = window.location.pathname;
    let currentPositionIndex = fullPath.length - 1;
    for (let index = 0; index < menuLinks.length; index++) {
      const positionIndex = fullPath.indexOf(menuLinks[index]);
      if ( positionIndex > -1 && positionIndex < currentPositionIndex) {
        currentPositionIndex = positionIndex;
        selectedMenu = index;
      }
    }

    return (
      <Header>
        <Row>
          <Col span={4}>
            <a href="/">
              <img
                src={'/img/Logo.png'}
                className="logo"
                alt="Logo"
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </a>
          </Col>
          <Col span={14} push={16}>
            <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }} selectedKeys={`${selectedMenu}`}>
              <Menu.Item key="0">
                <a href={menuLinks[0]}>
                  <HomeOutlined />
                  Home
                </a>
              </Menu.Item>
              <Menu.Item key="1">
                <a href={menuLinks[1]}>
                  <InfoCircleFilled />
                  Help
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

      </Header>
    );
  }
}

const mapPropsToStates = ({ requesting }) => ({
  requesting,
});

const mapDispatchToProps = (dispatch) => ({
  setNotification: ({ type, message }) =>
    dispatch(setNotification({ type, message })),
});

export default connect(mapPropsToStates, mapDispatchToProps)(TSHeader);
