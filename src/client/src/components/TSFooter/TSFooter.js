import React from "react";
import { Layout } from "antd";
import VERSION from "../../VERSION";

const { Footer } = Layout;
const TSFooter = () => (
  <Footer style={{ textAlign: "center", marginTop: "30px" }}>
    Copyright ©{new Date().getFullYear()} Created by{" "}
    <a href="https://github.com/luongnv89">luongnv89</a>. Version {VERSION}
  </Footer>
);

export default TSFooter;
