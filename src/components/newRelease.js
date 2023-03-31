import React from "react";
import "./newRelease.css";




const NewRelease = () => {
    return (
        <div className="newrelease">
            <div className="newrelease-container">
                <div className="newrelease-title">
                    <h2>New releases.</h2>
                </div>
                <div className="swiper-container">
                    <div class="swiper">

                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <div className="swiper-image">
                                <img src={"./assets/images/Rectangle 14.png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (1).png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (2).png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (3).png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (4).png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14 (5).png"} alt="pict"></img>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div className="swiper-image">
                                    <img src={"./assets/images/Rectangle 14.png"} alt="pict"></img>
                                </div>
                            </div>
                        </div>

                        


                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRelease;