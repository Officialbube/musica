import React from "react";
import "./content.css";
import Hero from "./hero";
import NewRelease from "./newRelease";
import Popular from "./popular";


const Content = ()=>{
    return(
        <div className="content">
            <Hero />
            <NewRelease />
            <Popular />
            
        </div>
    )
}

export default Content;