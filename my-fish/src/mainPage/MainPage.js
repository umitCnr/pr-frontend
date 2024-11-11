import './MainPageDesing.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const MainPage = () => {
    const [selectFish, setSelectFish] = useState(false);
    const [selectOmurgaiz, setOmurgaiz] = useState(false);
    const [selectBitki, setBitki] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const fishArray = () => {
        setSelectFish(!selectFish);
        setOmurgaiz(false);
        setBitki(false);
    }
    const OmurgasizArray = () => {
        setOmurgaiz(!selectOmurgaiz);
        setBitki(false);
        setSelectFish(false);
    }
    const BitkiArray = () => {
        setBitki(!selectBitki);
        setOmurgaiz(false);
        setSelectFish(false);
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
                        <div className={"menu-item"}>
                            <button className={"bir"} onClick={fishArray}>Balıklar</button>
                            {selectFish && (
                                <ul className={"main-item"}>
                                    <Link className="link-item" to="/saltfish">Tuzlu Su</Link>
                                    <Link className="link-item" to="/sugerfish">Tatlı Su</Link>
                                </ul>
                            )}
                        </div>
                        <div className={"menu-item"}>
                            <button className={"iki"} onClick={OmurgasizArray}>Omurgasız Canlılar</button>
                            {selectOmurgaiz && (
                                <ul className={"main-item"}>
                                    <Link className="link-item" to="/saltomurgasiz">Tuzlu Su</Link>
                                    <Link className="link-item" to="/sugeromurgasiz">Tatlı Su</Link>
                                </ul>
                            )}
                        </div>
                        <div className={"menu-item"}>
                            <button className={"uc"} onClick={BitkiArray}>Bitkiler</button>
                            {selectBitki && (
                                <ul className={"main-item"}>
                                    <Link className="link-item" to="/saltbitki">Tuzlu Su</Link>
                                    <Link className="link-item" to="/sugerbitki">Tatlı Su</Link>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainPage;