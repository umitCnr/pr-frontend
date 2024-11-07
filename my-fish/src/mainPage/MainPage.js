import './MainPageDesing.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const MainPage = () => {
    const [selectFish, setSelectFish] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const fishArray = () => {
        setSelectFish(!selectFish);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={'main-app'}>
            <div className={'img'}>
                <div className={`App ${scrolling ? 'scrolling' : ''}`}>
                    <h1 className={"baslik"}> <Link  to="">My Fish</Link></h1>
                    <div className={"kind"}>
                        <button className={"bir"} onClick={fishArray}>Balıklar</button>
                        {selectFish && (
                            <ul className={"main-item"}>
                                <Link className="link-item" to="/saltfish">Tuzlu Su</Link>
                                <Link className="link-item" to="/sugerfish">Tatlı Su</Link>
                            </ul>
                        )}
                        <button className={"iki"}>Omurgasız Canlılar</button>
                        <button className={"uc"}>Bitkiler</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainPage;