import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./mainPage/MainPage";
import SaltFish from './FishPages/SaltFish/SaltFishPage';
import WriteNew from "./text/WritePage";
import FreshWaterFish from "./FishPages/FreshWater/FreshWaterPage";
import FreshWaterOmurgasiz from "./FishPages/OmurgasizFreshWater/OmurgasizFreshWaterPage";
import SaltOmurgasiz from "./FishPages/OmurgasizSalt/OmurgasizSaltPage";
import BitkiFresh from "./FishPages/BitkiFreshWater/BitkiFreshPage";
import BitkiSalt from "./FishPages/BitkiSaltPage/BitkiSaltPage";



function App() {
    return (
        <div className={'main-app'}>
            <MainPage/>
            <Routes>
                <Route path="/saltfish" element={<SaltFish/>}/>
                <Route path="/sugerfish" element={<FreshWaterFish/>}/>
                <Route path="/saltomurgasiz" element={<SaltOmurgasiz/>}/>
                <Route path="/sugeromurgasiz" element={<FreshWaterOmurgasiz/>}/>
                <Route path="/sugerbitki" element={<BitkiFresh/>}/>
                <Route path="/saltbitki" element={<BitkiSalt/>}/>
                <Route path="" element={<WriteNew/>}/>
            </Routes>

        </div>
    );
}

export default App;

