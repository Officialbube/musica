import React from "react";
import "./content.css";
import Hero from "./hero";
import NewRelease from "./newRelease";


const Content = ()=>{
    return(
        <div className="content">
            <Hero />
            <NewRelease />
            
        </div>
    )
}

export default Content;