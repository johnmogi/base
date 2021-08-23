// components js files capitalizeFirstLetter

name component file as Name.js
rafc emmit default export function


<Name value={1}>

export const Square = (props) => {
  console.log(props);
  return <button type="button">{props.value}</button>;
};


import React from "react";

const style = {
  textAlign: "center",
};
export const Footer = () => {
  const year = () => new Date().getFullYear();

  return <div style={style}>All rights reserved &copy; {year()}</div>;
};


