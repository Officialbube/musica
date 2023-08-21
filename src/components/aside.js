import React from "react";
import './aside.css';
import { AiFillHome } from 'react-icons/ai'
import { RiFolderMusicFill } from 'react-icons/ri'
import { HiRadio } from 'react-icons/hi2'
import { HiUser } from 'react-icons/hi'
import { FaVideo } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'


const Aside = ()=>{
    return(
        <div className="aside">
            <div className="aside-container">
                <nav className="top-link">
                    <a><AiFillHome/></a>
                    <a><RiFolderMusicFill/></a>
                    <a><HiRadio/></a>
                    <a><FaVideo/></a>
                </nav>
                <nav className="bottom-link">
                    <a><HiUser/></a>
                    <a><FiLogOut/></a>
                </nav>
            </div>

        </div>
    )
}

export default Aside;