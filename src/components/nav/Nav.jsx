import { useEffect, useRef, useState } from 'react';
import './index.css'; // same styles from your original style.css
import img1 from '../../../public/image/img1.jpg';
import img2 from '../../../public/image/img2.jpg';
import img3 from '../../../public/image/img3.jpg';
import img4 from '../../../public/image/img4.jpg';
import img5 from '../../../public/image/img5.jpg';
import img6 from '../../../public/image/img6.jpg';
import img7 from '../../../public/image/img7.jpg';
import img8 from '../../../public/image/img8.jpg';
import img9 from '../../../public/image/img9.jpg';
import img10 from '../../../public/image/img10.jpg';
import img11 from '../../../public/image/img11.jpg';


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export default function Nav() {
    const [sliderItems, setSliderItems] = useState(images);
    const [thumbnails, setThumbnails] = useState(images);
    const [animDirection, setAnimDirection] = useState('');

    const timeoutRef = useRef(null);
    const autoNextRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const resetAutoNext = () => {
        clearTimeout(autoNextRef.current);
        autoNextRef.current = setTimeout(() => {
            handleNext();
        }, timeAutoNext);
    };

    useEffect(() => {
        resetAutoNext();
        return () => {
            clearTimeout(autoNextRef.current);
        };
    }, [sliderItems]);

    const handleNext = () => {
        setSliderItems(prev => [...prev.slice(1), prev[0]]);
        setThumbnails(prev => [...prev.slice(1), prev[0]]);
        setAnimDirection('next');

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setAnimDirection(''), timeRunning);
    };

    const handlePrev = () => {
        setSliderItems(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        setThumbnails(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        setAnimDirection('prev');

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setAnimDirection(''), timeRunning);
    };

    return (
        <div>
            <header>
                <nav>
                    <a href="#Home">Home</a>
                    <a href="#Contact">Contacts</a>
                    <a href="#Info">Info</a>
                </nav>
            </header>

            <div className={`carousel ${animDirection}`}>
                <div className="list">
                    {sliderItems.map((imgSrc, index) => (
                        <div className="item" key={index}>
                            <div className="frosted-left" />
                            <img src={imgSrc} alt={`slide-${index}`} />
                            <div className="content">
                                <div className="author">中国</div>
                                <div className="title">北京</div>
                                <div className="topic">遇涧花开</div>
                                <div className="des">
                                    期待与您相遇
                                </div>
                                <div className="buttons">
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail">
                    {thumbnails.map((imgSrc, index) => (
                        <div className="item" key={index}>
                            <img src={imgSrc} alt={`thumb-${index}`} />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="description">Description</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button onClick={handlePrev}>{'<'}</button>
                    <button onClick={handleNext}>{'>'}</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
}
