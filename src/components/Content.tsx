import React, { CSSProperties} from "react";

const contentStyles : CSSProperties = {
  background: "#222",
  height: "93%",
  width: "100%",
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "1fr",
  padding: "1rem"
}
const Content = (props: any) => (
  <div style={contentStyles}>{props.children}</div>
)

export default Content;