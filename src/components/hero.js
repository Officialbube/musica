import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from 'react';


const Hero = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })

    return (
        <div className="hero">
            <div className="hero-container">
                <div>
                    <p>Currated playlist</p>
                </div>
                <div className="rb-hits">
                    <h2>R & B Hits</h2>
                    <p>All mine, Lie again, Petty call me everyday,
                        Out of time, No love, Bad habit,
                        and so much more</p>
                </div>
                <div className="likes">
                    <p>33k Likes</p>
                </div>
                <img src={"./assets/vectors/vector.png"} className="vector" />
                <img src={"./assets/vectors/vector(2).png"} className="vector2" />
                <img src={"./assets/images/Pexels Photo by Eric Esma.png"} className="singer" />
                
            </div>
            <div className="top-chart">
                <h2>Top charts</h2>
                <motion.div className="carousel" ref={carousel} whileTap={{cursor:"grabbing"}} >
                <motion.div className="chart-list" drag="x" dragConstraints={{right:0, left:-width}}>
                    <div className="chart-container">
                        <div className="image-and-name">
                            <div className="image">
                                <img src={"./assets/images/Rectangle 17 (1).png"} />
                            </div>
                            <div className="name">
                                <h3>Golden age of 80s</h3>
                                <p>Sean swadder</p>
                                <p>2:34:45</p>
                            </div>
                        </div>
                        <div className="like"><i class="fa fa-heart"></i></div>
                    </div>
                    <div className="chart-container">
                        <div className="image-and-name">
                            <div className="image">
                                <img src={"./assets/images/Rectangle 17.png"} />
                            </div>
                            <div className="name">
                                <h3>Reggae “n” blues</h3>
                                <p>Dj YK mule</p>
                                <p>1:02:42</p>
                            </div>
                        </div>
                        <div className="like"><i class="fa fa-heart"></i></div>
                    </div>
                    <div className="chart-container">
                        <div className="image-and-name">
                            <div className="image">
                                <img src={"./assets/images/Rectangle 17 (2).png"} />
                            </div>
                            <div className="name">
                                <h3>Tomorrow’s tunes</h3>
                                <p>Obi Datti</p>
                                <p>2:01:25</p>
                            </div>
                        </div>
                        <div className="like"><i class="fa fa-heart"></i></div>
                    </div>

                </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;