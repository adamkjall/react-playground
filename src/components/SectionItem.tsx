import React, { CSSProperties } from "react";

interface props {
  imgUrl: string,
  title: string
}

const SectionItem = (props: props) => {
  const sectionStyles: CSSProperties = {
    background: `url(${props.imgUrl}) no-repeat center center`,
    backgroundSize: "cover",
    display: "grid",
    placeItems: "center"
  };
  
  const titleStyles: CSSProperties = {
    fontSize: "2.5rem"
  };
  
  return (
    <div style={sectionStyles}>
      <h2 style={titleStyles}>{props.title}</h2>
    </div>
  );
};

export default SectionItem;
