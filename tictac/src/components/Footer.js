import React from "react";

const style = {
  textAlign: "center",
};
export const Footer = () => {
  const year = () => new Date().getFullYear();

  return <div style={style}>All rights reserved &copy; {year()}</div>;
};
