import React, { useState } from "react";
import './player.css'
import { BsPlay, BsPause, BsRepeat, BsVolumeUpFill } from 'react-icons/bs'
import { BiSkipNext, BiSkipPrevious  } from 'react-icons/bi'
import { IoShuffleOutline } from 'react-icons/io5'


const Player = ()=>{
   
    const [isPlaying , setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }
    return(
            <div className="player">
                <div className="song-details">
                    <div className="song-image">
                        <img src={"./assets/images/Rectangle 26.png"} alt="" />
                    </div>
                    <div className="song-name">
                        <p>Seasons in</p>
                        <p>James</p>
                    </div>
                </div>
                <div className="song-controls-container">
                    <div className="song-controls">
                        <button><IoShuffleOutline/></button>
                        <button><BiSkipPrevious/></button>
                        <button onClick={togglePlay} className="btn">
                            {isPlaying ? <BsPause className="play"/> : <BsPlay/>}
                            </button>
                        <button><BiSkipNext/></button>
                        <button><BsRepeat/></button>
                    </div>
                    <div className="song-duration">
                        <input type="range" name="" id="" />
                    </div>
                </div>
                <div className="song-volume">
                    <BsVolumeUpFill/><input type="range" name="" id="" />
                </div>
                
            </div>
    )
}

export default Player;