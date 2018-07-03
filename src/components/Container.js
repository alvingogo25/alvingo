import React from "react";

const style = {
  position: "relative",
  display: "flex",
  marginTop: "5%",
  fontFamily: "'Quicksand', sans-serif",
  backgroundColor: "#27293299",
};

export default ({ children }) => (
  <div className="container" style={style}>
      {children}
  </div>
);
