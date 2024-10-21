import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./mainPage/MainPage";
import SaltFish from './SaltFish/SaltFishPage';
import WriteNew from "./text/newFish";


function App() {
    return (
        <div className={'main-app'}>



            <Routes>
                <Route path="/saltfish" element={<SaltFish/>}/>
            </Routes>
            <MainPage/>
            <WriteNew/>

        </div>
    );
}

export default App;

