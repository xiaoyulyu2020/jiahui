import React from "react";
import "./index.css";

import slider2_1 from "./images/slider2_1.png";
import slider2_2 from "./images/slider2_2.png";
import slider2_3 from "./images/slider2_3.png";
import slider2_4 from "./images/slider2_4.png";
import slider2_5 from "./images/slider2_5.png";

const feedbacks = [
    {
        avatar: slider2_1,
        rating: 5,
        location: "Shanghai, China",
        comment: "这个产品真的非常棒！我已经推荐给很多朋友了，大家都说很好用。五星好评！",
    },
    {
        avatar: slider2_2,
        rating: 4,
        location: "Dublin, Ireland",
        comment: "Works great. The customer service is amazing. Highly recommend to anyone needing this.",
    },
    {
        avatar: slider2_3,
        rating: 5,
        location: "Tokyo, Japan",
        comment: "デザインがとても綺麗で、使いやすいです。また購入したいと思います！",
    },
    {
        avatar: slider2_4,
        rating: 3,
        location: "Berlin, Germany",
        comment: "It's okay for the price, but delivery was a bit slow. Overall, still a decent product.",
    },
    {
        avatar: slider2_5,
        rating: 5,
        location: "San Francisco, USA",
        comment: "Love it! Slick design and very intuitive to use. Would definitely buy again.",
    },
];

const getStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

const Reviews = () => {
    return (
        <main>
            <section className="grid-3">
                <p className="note-text" style={{ color: "#f1683a" }}>&#8600;顾客反馈</p>
            </section>

            <div
                className="slider"
                reverse="true"
                style={{ "--width": "300px", "--height": "400px", "--quantity": feedbacks.length }}
            >
                <div className="list">
                    {feedbacks.map((item, index) => (
                        <div className="item" style={{ "--position": index + 1 }} key={index}>
                            <div className="review-card">
                                <img src={item.avatar} alt="avatar" className="avatar" />
                                <div className="rating">{getStars(item.rating)}</div>
                                <div className="location">{item.location}</div>
                                <div className="feedback">{item.comment}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Reviews;
