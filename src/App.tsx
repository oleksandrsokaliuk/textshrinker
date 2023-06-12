import React from "react";
import "./App.css";
import LogIn from "./components/authorization/LogIn";
import MainPage from "./components/mainPage/MainPage";

enum ButtonEnum {
  INCREMENT = "Increment",
  DECREMENT = "Decrement",
}

function App() {
  return <MainPage />;
}

export default App;
