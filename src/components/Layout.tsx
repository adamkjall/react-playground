import React, { CSSProperties } from "react";

const layoutStyles: CSSProperties = {
  height: "100%",
};

const Layout = (props: any) => <div style={layoutStyles}>{props.children}</div>;

export default Layout;
