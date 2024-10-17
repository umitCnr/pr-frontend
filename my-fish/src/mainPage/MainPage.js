import './MainPageDesing.css';
import React, {useState} from "react";
import fish from './../icons/fish-outline.svg';
import starfish from './../icons/icons8-starfish-50.png';
import moss from './../icons/seeding.svg';
import WriteNew from "./../text/newFish";
import ocean from './../icons/fish.png';
import {Link} from "react-router-dom";
import SaltFish from "../SaltFish/SaltFishPage";


const MainPage = () => {
    const [selectFish,setSelectFish] = useState(false);

    const fishArray = () => {
        setSelectFish(!selectFish);
    }

    return (
        <div className={'main-app'}>
            <div className={'img'}>
                <img className={'img-ocean'}/>
                <div>
                    <img className={'img-fish'} src={ocean}/>
                </div>
                <div className="App">
                    <h1 className={"baslik"}>My Fish</h1>
                    <div className={"kind"}>
                        <button className={"bir"} onClick={fishArray}><img className={'fish'} src={fish}/>Balıklar</button>
                        {selectFish && (
                            <ul className={"main-item"}>
                                <Link  className="link-item" to="/saltfish">Tuzlu Su</Link>
                                <Link  className="link-item" to="/sugerfish">Tatlı Su</Link>
                            </ul>
                        )}
                        <button className={"iki"}><img className={'starfish'} src={starfish}/>Omurgasız Canlılar</button>
                        <button className={"uc"}><img className={'moss'} src={moss}/>Bitkiler</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainPage;