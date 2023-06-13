import React from "react";
import "./App.css";
import LogIn from "./components/authorization/LogIn";
import MainPage from "./components/mainPage/MainPage";
import BackGround from "./components/BackGround";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <BackGround />
      <Menu />
      <MainPage />
    </div>
  );
}

export default App;
