import React from "react";
import "./App.css";
import Button from "./components/Button";

enum ButtonEnum {
  INCREMENT = "Increment",
  DECREMENT = "Decrement",
}

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button text={ButtonEnum.INCREMENT} />
        <Button text={ButtonEnum.DECREMENT} />
      </div>
    </div>
  );
}

export default App;
