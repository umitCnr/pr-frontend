import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./mainPage/MainPage";
import SaltFish from './SaltFish/SaltFishPage';
import WriteNew from "./text/newFish";


function App() {
    return (
        <div className={'main-app'}>

<MainPage/>
                <Routes>
                    <Route path={'/'} element={<WriteNew/>}/>
                    <Route path="/saltfish" element={<SaltFish />} />
                </Routes>

        </div>
    );
}

export default App;

