import React from "react";
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Player from "./components/player";



function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Player />
    </div>
  );
}

export default App;
