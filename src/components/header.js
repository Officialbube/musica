import React from "react";
import './header.css';
import { BsSearch } from 'react-icons/bs'

const Header = ()=>{
    return(
        <div className="header">
            <div className="header-container"> 
                <div className="header-left">
                    <div className="burger">
                        <span></span>
                        <span></span>
                    </div>
                    <img src={"./assets/icons/logo.png"} alt="logo" />
                </div>              
                
                <i class="fa fa-magnifying-glass glass-mobile"></i>
                <div className="search-input">
                    <BsSearch/>
                    <input type="search" placeholder="Search Artist"/>
                </div>
            </div>
        </div>
    )
}

export default Header;