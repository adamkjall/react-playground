import React, { CSSProperties } from "react";

import NameFormClass from "../components/NameFormClass";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import NameFormHooks from "../components/NameFormHooks";

const pageWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh"
};

const TestPage = () => (
  <Layout>
    <Navbar title="React playground" />
    <section className="page" style={pageWrapper}>
      <h1>Test page</h1>
      <NameFormClass />
      <NameFormHooks />
    </section>
  </Layout>
);

export default TestPage;
