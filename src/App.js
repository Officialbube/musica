import React, { useEffect} from "react";
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Player from "./components/player";
import Spotify from "./components/Spotify";
import Login from "./pages/Login";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider"



function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
    dispatch({type:reducerCases.SET_TOKEN,token});
    }
  },[token,dispatch])
  return (
    <div className="app">
      {
        token ? <Spotify/> : <Login/>
      }
      
      
    </div>
  );
}

export default App;
