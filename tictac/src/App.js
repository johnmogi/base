import React from "react";
import Board from "./components/Board";
import { Footer } from "./components/Footer";
import { Test } from "./components/Test";

const style = {
  maxWidth: "350px",
  border: "1px solid #000",
};
const App = () => {
  return (
    <div className="app" style={style}>
      <h1>TIC TAC TOE</h1>
      <Board />
      <Test>
        <h3>test (:</h3>
      </Test>
      <Footer />
    </div>
  );
};
export default App;
