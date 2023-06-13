import React from "react";
import "./App.css";
import LogIn from "./components/authorization/LogIn";
import MainPage from "./components/mainPage/MainPage";
import BackGround from "./components/BackGround";

enum ButtonEnum {
  INCREMENT = "Increment",
  DECREMENT = "Decrement",
}

function App() {
  return (
    <div className="app">
      <BackGround />
      <MainPage />
    </div>
  );
}

export default App;
