import React from "react";
import "./App.css";
import Button from "./components/Button";
import Value from "./components/Value";

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
      <Value numberValue={5} />
    </div>
  );
}

export default App;
