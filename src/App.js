import React from 'react';
import  NavigationBar  from "./Components/NavigationBar/NavigationBar.js";
import  BillBoard  from "./Components/BillBoard/BillBoard.js";
// import  Slider  from "./Components/Slider/TachiSlider.js";
import Gallery from "./Components/Gallery/Gallery.js";
import  Footer from "./Components/Footer/Footer.js";
import Board from "./Components/Board/Board";
import  Advert from "./Components/Advert/Advert.js";
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import mario from "./Components/Advert/images/mario.png";
import sorena from "./Components/Slider/pictures/worksample/sorena.jpg";
// import CustomPage from "./Components/CustomPage/CustomPage.js";
import AdvertisePlace from "./Components/AdvertisePlace/AdvertisePlace.js";


function App() {

    //  var top1 = "130%";
    //  var top2 = "260%";

    //  if(window.innerWidth <= 360 && window.innerHeight <= 640){
    //    top1 = "142%";
    //    top2 = "203%";
    //  }

  return (
    <div className="app-bg-color container">
        <NavigationBar  />
        <div className="container" style={{marginTop: "6%"}}>
          <div className="row">
            <BillBoard />
            <ul id="advlist">
              <li key="t" ><AdvertisePlace Top={"11.5%"} Left={"9%"} Width={"200px"} Height={"360px"} /></li>
              <li key="d"><AdvertisePlace Top={"11.5%"} Left={"26%"} Width={"200px"} Height={"360px"} /></li>
            </ul>
          </div>
        </div>
        <Board />
        <Advert backgroundPic={mario}  />
        <Gallery />
        {/* <Slider/> */}
        <Advert backgroundPic={sorena} />
        <Footer/>
    </div>
  );
}

export default App;
