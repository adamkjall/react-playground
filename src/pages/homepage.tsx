import React, { CSSProperties } from "react";

import NavBar from "../components/Navbar";
import Layout from "../components/Layout";
import Content from "../components/Content"
import SectionItem from "../components/SectionItem";

const pageWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const HomePage = () => (
  <Layout>
    <NavBar title="React Playground" />
    <Content style={pageWrapper}>
      <SectionItem title="forest" imgUrl="./src/assets/forest.jpg" />
      <SectionItem title="sky" imgUrl="./src/assets/sky.jpg" />
      <SectionItem title="desert" imgUrl="./src/assets/desert.jpg" />
    </Content>
  </Layout>
);

export default HomePage;
