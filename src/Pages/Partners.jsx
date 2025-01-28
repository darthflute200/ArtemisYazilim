import React from "react";
import Fitjoy from "../Images/FitJoy.png";
import SpotRaiders from "../Images/SpotRaiders.png";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const Partners = () =>{
    return(
        <div className="Blog-pages-container">
        <div className="Blog-pages-first-container">
            <Header/>
            <h3 className="blogs-h3">Ortaklar</h3>
            <div className="Partners-container">
                <img className="partners-img" src={Fitjoy}/>
                <img className="spot-raiders" src={SpotRaiders}/>
            </div>
        </div>
        <Footer/>
    </div>
    )
}
export default Partners;