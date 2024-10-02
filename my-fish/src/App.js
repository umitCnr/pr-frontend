import './App.css';
import React from "react";
import fish from './icons/fish-outline.svg';
import starfish from './icons/icons8-starfish-50.png';
import moss from './icons/seeding.svg';
import WriteNew from "./text/newFish";
import ocean from './icons/fish.png';




function App() {




  return (
      <div className={'main-app'}>
          <div className={'img'}>
              <img className={'img-ocean'} />
              <div>
                  <img className={'img-fish'} src={ocean}/>
              </div>
              <div className="App">
                  <h1 className={"baslik"} >My Fish</h1>
                  <div className={"kind"}>
                      <button  className={"bir"}><img className={'fish'} src={fish}/>Balıklar</button>
                      <button className={"iki"}><img className={'starfish'} src={starfish}/>Omurgasız Canlılar</button>
                      <button className={"uc"}><img className={'moss'} src={moss}/>Bitkiler</button>
                  </div>
              </div>
              <div>
                  <WriteNew/>
              </div>
          </div>
      </div>


  );
}

export default App;
