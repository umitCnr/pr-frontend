import './MainPageDesing.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";


const MainPage = () => {
    const [selectFish,setSelectFish] = useState(false);

    const fishArray = () => {
        setSelectFish(!selectFish);
    }

    return (
        <div className={'main-app'}>
            <div className={'img'}>
                <div className="App">
                    <h1 className={"baslik"}>My Fish</h1>
                    <div className={"kind"}>
                        <button className={"bir"} onClick={fishArray}>Balıklar</button>
                        {selectFish && (
                            <ul className={"main-item"}>
                                <Link  className="link-item" to="/saltfish">Tuzlu Su</Link>
                                <Link  className="link-item" to="/sugerfish">Tatlı Su</Link>
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