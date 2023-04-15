import React from "react";
import './header.css';

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-container">                
                <img src={"./assets/icons/logo.png"} alt="logo" />
                <div className="search-input">
                    <i class="fa fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search Artist"/>
                </div>
            </div>
        </div>
    )
}

export default Header;