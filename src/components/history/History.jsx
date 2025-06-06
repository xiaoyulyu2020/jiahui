import React from 'react'
import "./index.css"

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'

const History = () => {
    return (
        <main>
            <div className="grid-wrapper">
                {/* Top-left: container 1 */}
                <div className="container top-left">
                    <div className="item"><img src={img1} alt="" /><p className="intro">This is an intro for the image</p></div>
                    <div className="item"><img src={img2} alt="" /><p className="intro">This is an intro for the image</p></div>
                </div>

                {/* Middle: contents */}
                <div className="contents center">
                    <p style={{ color: "#f1683a" }}>
                        遇涧花开祖宅，是与岁月深处的一场温柔重逢。<br />
                        斑驳的青砖墙下，藏着祖辈的故事；绽放的每一朵花，<br />
                        都是时光的低语。那是根的归处，也是心灵的栖息。
                    </p>
                </div>

                {/* Bottom-right: container 2 */}
                <div className="container bottom-right">
                    <div className="item"><img src={img5} alt="" /><p className="intro">This is an intro for the image</p></div>
                    <div className="item"><img src={img6} alt="" /><p className="intro">This is an intro for the image</p></div>
                    <div className="item"><img src={img1} alt="" /><p className="intro">This is an intro for the image</p></div>
                </div>
            </div>
        </main>

    );
}
export default History
