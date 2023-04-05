import React from "react";
import './player.css'


const Player = ()=>{
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
                        <button><i class="fa fa-shuffle shuffle"></i></button>
                        <button><i class="fa-solid fa-backward-step back"></i></button>
                        <button><i class="fa fa-play play"></i></button>
                        <button><i class="fa-sharp fa-solid fa-forward-step next"></i></button>
                        <button><i class="fa-solid fa-repeat repeat"></i></button>
                    </div>
                    <div className="song-duration">
                        <input type="range" name="" id="" />
                    </div>
                </div>
                <div className="song-volume">
                    <i class="fa fa-volume"></i><input type="range" name="" id="" />
                </div>
                
            </div>
    )
}

export default Player;