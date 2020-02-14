import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import NavBar from "./components/Navbar";
import Content from "./components/Content";
import SectionItem from "./components/SectionItem";

const pageWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

ReactDOM.render(
  <React.Fragment>
    <Layout>
      <NavBar title="React Playground" />
      <Content>
        <SectionItem title="forest" imgUrl="./src/assets/forest.jpg" />
        <SectionItem title="sky" imgUrl="./src/assets/sky.jpg" />
        <SectionItem title="desert" imgUrl="./src/assets/desert.jpg" />
      </Content>
    </Layout>
  </React.Fragment>,
  document.getElementById("example")
);
