import React, {useState, useEffect} from "react";
import FishText from "./fishText/FishText";
import OmurgasizPageText from "./omurgasizText/OmurgasizText";
import './write.css'
import resim from './../icons/1351351.png';
import resim1 from './../icons/1351358.png';
import resim2 from './../icons/1351365.png';
import BitkiPageText from "./bitkiText/BitkiTextPage";

const WriteNew = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const images = [
        resim,
        resim1,
        resim2,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="write-main">
                <div className="slider-container">
                    <div className="image-box">
                        <img src={images[currentIndex]} alt="slider" className="slider-image" />
                        <div className="welcome-text">
                            Akvaryum<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sayfasına<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hoşgeldiniz
                        </div>

                    </div>
                </div>
            </div>
            <div className={"write-all"}>
                <div>
                    <FishText/>
                </div>
                <div>
                    <OmurgasizPageText/>
                </div>
                <div>
                    <BitkiPageText/>
                </div>
            </div>

        </div>


    );
}
export default WriteNew;