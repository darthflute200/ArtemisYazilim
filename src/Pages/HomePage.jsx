import { faBusinessTime, faDesktop, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { useNavigate } from 'react-router-dom';
import VectorSe from "../Images/Vector2.png";
import Vector from "../Images/herovector.png";
import Footer from "./Components/Footer";
import Header from './Components/Header';

const HomePage = () =>{
    const navigation = useNavigate();
    return(
        <div className="Homepage">
            <Header/>
            <div className="hero-container">
                <div className="hero-p-container">
                    <div style={{display: "flex" , flexDirection: "column"}}>
                        <span className="hero-big">Hızlı Ve Güvenli</span>
                        <span className="hero-big blue-p">Yazılımlar</span>
                    </div>
                    <span className="under-p">Mobil ve Web yazılım ihtiyaçlarınız için</span>
                    <button onClick={() => navigation("/contact")} className="register-hero-button">Teklif Alın</button>
                </div>
                <img className="herovector" src={Vector}/>
            </div>
            <p className="middle-h4">Girişimlerinizi ve Fikirlerinizi Bizimle Hayata Geçirebilirsiniz</p>
            <div className="charts-container">
                <div className="charts">
                    <FontAwesomeIcon size="3x" className='fonticon'  icon={faMobileScreenButton}/>
                    <span className='span-charts'>Mobil Uygulamalar</span>
                    <p className="charts-paragraf">Mobil çözümlerinizi için hem android hem de ios için mobil uygulamalarınızı bizimle yapabilirsiniz</p>
                </div>
                <div className="charts">
                    <FontAwesomeIcon size="3x" className='fonticon'  icon={faDesktop}/>
                    <span className='span-charts'>Website</span>
                    <p className="charts-paragraf">Sizin için hızlı , güvenli ve modern websiteler yapabiliriz</p>
                </div>
                <div className="charts">
                    <FontAwesomeIcon size="3x" className='fonticon'  icon={faBusinessTime}/>
                    <span className='span-charts'>İşletmeler için</span>
                    <p className="charts-paragraf">Gelir , gider ve ürün takiplerinizi sizin için özel hazırladığımız yazılımlardan takip edebilirsiniz</p>
                </div>
            </div>
            <div className='youcanask-container'>
                <img src={VectorSe} className='secondvector'/>
                <div className='second-paragraf-container'>
                    <span className='second-paragraf-caption'>Neden Artemis?</span>
                    <p className='artemis-p'>Artemis Yazılım olarak, teknolojiyi estetikle buluşturuyor, yenilikçi ve güvenilir çözümler üretiyoruz. Müşterilerimizin ihtiyaçlarını anlamak ve onlara özel yazılım çözümleri sunmak bizim için bir tutku. Deneyimli ekibimizle projelerinizi zamanında, kaliteli ve sürdürülebilir bir şekilde hayata geçiriyoruz</p>
                    <button onClick={() =>{navigation("/aboutus")}} className="register-hero-button">İncele</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default HomePage;