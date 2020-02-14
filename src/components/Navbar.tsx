import React, {CSSProperties} from "react";

const navbarStyles : CSSProperties = {
  background: "black",
  color: "white",
  height: "7%",
  display: "flex",
  alignItems: "center",
  paddingLeft: "1rem"
}

const titleStyles : CSSProperties = {
  margin: "0px",
  fontSize: "2.4rem",
  fontFamily: "monospace"
}

const Navbar = (props: any) => (
  <div style={navbarStyles}>
    <h1 style={titleStyles}>{props.title}</h1>
  </div>
)

export default Navbar;