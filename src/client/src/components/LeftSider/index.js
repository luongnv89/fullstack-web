import React, { Component } from "react";
import { connect } from "react-redux";

import { showModal } from "../../actions";
import {
  PartitionOutlined,
  BulbOutlined,
  BugOutlined,
} from "@ant-design/icons";

import TSSider from "../TSSider";

class LeftSider extends Component {
  render() {
    const { showModal } = this.props;

    const menuItems = [
      {
        key: 3,
        text: "Menu1",
        action: () => showModal("THING-FORM"),
        icon: <PartitionOutlined />
      },
      {
        key: 1,
        text: "Menu2",
        action: () => showModal("SENSOR-FORM"),
        icon: <BugOutlined />
      },
      {
        key: 2,
        text: "Menu3",
        action: () => showModal("ACTUATOR-FORM"),
        icon: <BulbOutlined />
      }
    ];

    return <TSSider isRightSide={true} items={menuItems} theme="dark" />;
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: mID => console.log('Show Model: ', mID),
});

export default connect(null, mapDispatchToProps)(LeftSider);
