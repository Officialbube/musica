import React from "react";
import "./newRelease.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from 'react';



const NewRelease = () => {
    
    const [width, setWidth] = useState(0)
    const carousel = useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })

    return (
        <div className="newrelease">
            <div className="newrelease-container">
                <div className="newrelease-title">
                    <h2>New releases.</h2>
                </div>
                <motion.div className="carousel" ref={carousel} whileTap={{cursor:"grabbing"}} >
                    <motion.div  className="inner-carousel" drag="x" dragConstraints={{right:0, left:-width}}>

                        

                            <div class="swiper-slide">
                                <div className="swiper-image">
                                <img src={"./assets/images/Rectangle 14.png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Life in a bubble</p>
                                <p className="release-artist">The van</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (1).png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Mountain</p>
                                <p className="release-artist">Krisx</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (2).png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Krisx</p>
                                <p className="release-artist">John Dillion</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (3).png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Everything’s black</p>
                                <p className="release-artist">Ameed</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (4).png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Cancelled</p>
                                <p className="release-artist">Enimen</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (5).png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Nomad</p>
                                <p className="release-artist">Makrol eli</p>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14.png"} alt="pict"></img>
                                </div>
                                <p className="release-title">Blind</p>
                                <p className="release-artist">Wiz zee</p>
                            </div>
                          

                        


                        
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default NewRelease;