import React from "react";
import './main.css'
import Aside from "./aside";
import Content from "./content";

const Main = ()=>{
    return(
        <div className="main">
            <div className="aside-link">
                <Aside />
            </div>
            <div className="main-content">
                <Content />
            </div>
        </div>
    )
}

export default Main;