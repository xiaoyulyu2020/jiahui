import React from 'react'
import "./style.css";

import slider1_1 from "./images/slider1_1.png";
import slider1_2 from "./images/slider1_2.png";
import slider1_3 from "./images/slider1_3.png";
import slider1_4 from "./images/slider1_4.png";
import slider1_5 from "./images/slider1_5.png";
import slider1_6 from "./images/slider1_6.png";
import slider1_7 from "./images/slider1_7.png";
import slider1_8 from "./images/slider1_8.png";
import slider1_9 from "./images/slider1_9.png";
import slider1_10 from "./images/slider1_10.png";

import slider2_1 from "./images/slider2_1.png";
import slider2_2 from "./images/slider2_2.png";
import slider2_3 from "./images/slider2_3.png";
import slider2_4 from "./images/slider2_4.png";
import slider2_5 from "./images/slider2_5.png";
import slider2_6 from "./images/slider2_6.png";
import slider2_7 from "./images/slider2_7.png";
import slider2_8 from "./images/slider2_8.png";
import slider2_9 from "./images/slider2_9.png";

const Reviews = () => {
    return (
        <main>
            {/* First Slider */}
            <div className="slider" style={{ "--width": "100px", "--height": "50px", "--quantity": 10 }}>
                <div className="list">
                    <div className="item" style={{ "--position": 1 }}>
                        <img src={slider1_1} alt="Slider 1 - 1" />
                    </div>
                    <div className="item" style={{ "--position": 2 }}>
                        <img src={slider1_2} alt="Slider 1 - 2" />
                    </div>
                    <div className="item" style={{ "--position": 3 }}>
                        <img src={slider1_3} alt="Slider 1 - 3" />
                    </div>
                    <div className="item" style={{ "--position": 4 }}>
                        <img src={slider1_4} alt="Slider 1 - 4" />
                    </div>
                    <div className="item" style={{ "--position": 5 }}>
                        <img src={slider1_5} alt="Slider 1 - 5" />
                    </div>
                    <div className="item" style={{ "--position": 6 }}>
                        <img src={slider1_6} alt="Slider 1 - 6" />
                    </div>
                    <div className="item" style={{ "--position": 7 }}>
                        <img src={slider1_7} alt="Slider 1 - 7" />
                    </div>
                    <div className="item" style={{ "--position": 8 }}>
                        <img src={slider1_8} alt="Slider 1 - 8" />
                    </div>
                    <div className="item" style={{ "--position": 9 }}>
                        <img src={slider1_9} alt="Slider 1 - 9" />
                    </div>
                    <div className="item" style={{ "--position": 10 }}>
                        <img src={slider1_10} alt="Slider 1 - 10" />
                    </div>
                </div>
            </div>

            {/* Second Slider */}
            <div className="slider" reverse="true" style={{ "--width": "200px", "--height": "200px", "--quantity": 9 }}>
                <div className="list">
                    <div className="item" style={{ "--position": 1 }}>
                        <img src={slider2_1} alt="Slider 2 - 1" />
                    </div>
                    <div className="item" style={{ "--position": 2 }}>
                        <img src={slider2_2} alt="Slider 2 - 2" />
                    </div>
                    <div className="item" style={{ "--position": 3 }}>
                        <img src={slider2_3} alt="Slider 2 - 3" />
                    </div>
                    <div className="item" style={{ "--position": 4 }}>
                        <img src={slider2_4} alt="Slider 2 - 4" />
                    </div>
                    <div className="item" style={{ "--position": 5 }}>
                        <img src={slider2_5} alt="Slider 2 - 5" />
                    </div>
                    <div className="item" style={{ "--position": 6 }}>
                        <img src={slider2_6} alt="Slider 2 - 6" />
                    </div>
                    <div className="item" style={{ "--position": 7 }}>
                        <img src={slider2_7} alt="Slider 2 - 7" />
                    </div>
                    <div className="item" style={{ "--position": 8 }}>
                        <img src={slider2_8} alt="Slider 2 - 8" />
                    </div>
                    <div className="item" style={{ "--position": 9 }}>
                        <img src={slider2_9} alt="Slider 2 - 9" />
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Reviews
