import React from "react";
import Board from "./components/Board";
import { Footer } from "./components/Footer";

const style = {
  maxWidth: "350px",
  border: "1px solid #000",
};
const App = () => {
  return (
    <div style={style}>
      <h1>TIC TAC TOE</h1>
      <Board />
      <Footer />
    </div>
  );
};
export default App;
