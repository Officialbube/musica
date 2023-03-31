import React from "react";
import './aside.css';

const Aside = ()=>{
    return(
        <div className="aside">
            <div className="aside-container">
                <nav className="top-link">
                    <a><i class="fa fa-house icon"></i></a>
                    <a><i class="fa fa-album-collection icon"></i></a>
                    <a><i class="fa fa-radio icon"></i></a>
                    <a><i class="fa fa-film icon"></i></a>
                </nav>
                <nav className="bottom-link">
                    <a><i class="fa fa-user icon"></i></a>
                    <a><i class="fa fa-right-from-bracket icon"></i></a>
                </nav>
            </div>

        </div>
    )
}

export default Aside;