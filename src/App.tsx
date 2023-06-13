import React from "react";
import "./App.css";
import LogIn from "./components/authorization/LogIn";
import MainPage from "./components/mainPage/MainPage";
import BackGround from "./components/BackGround";
import Menu from "./components/menu/Menu";
import { Routing } from "./routing/Routing";

function App() {
  return (
    <div className="app">
      <BackGround />
      <Menu />
      <Routing />
    </div>
  );
}

export default App;
