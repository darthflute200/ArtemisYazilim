import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/Artemiskadın.png";
const Header = () =>{
    const navigation = useNavigate();
    const [mobilemenu , SetMobilMenu] = useState(false);
    return(
    <div className="header-container">
        <div className="header">
            <div className="Logo-Container">
                <img src={Logo} className="Logo"/>
                <span className="logo-span">Artemis Yazılım</span>
            </div>
            <div className="Menu-container">
                <Link className="Link" to="/">Anasayfa</Link>
                <Link className="Link" to="/blogs">Blog</Link>
                <Link className="Link" to="/partners">Ortaklar</Link>
                <button onClick={() =>{navigation("/contact")}} className="register-button">
                    Teklif Alın!
                </button>
            </div>
            <button onClick={() =>{SetMobilMenu(!mobilemenu)}} className="menubutton"><FontAwesomeIcon icon={faBars}/></button>
        </div>
        <div className={`mobile-header ${mobilemenu ? "open" : ""}`}>
                <button className="menubutton"  onClick={() =>{SetMobilMenu(!mobilemenu)}}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <Link className="Link mobil" to="/">Anasayfa</Link>
                <Link className="Link mobil" to="/blogs">Blog</Link>
                <Link className="Link mobil" to="/">Ortaklar</Link>
                <button onClick={() =>{navigation("/contact")}} className="register-button">
                    Teklif Alın!
                </button>
        </div>
    </div>
    )
}
export default Header