import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
const Contact = () =>{
    return(
        <div className="Blog-pages-container">
            <div className="Blog-pages-first-container">
                <Header/>
                <span className="Contact-h3">İletişim</span>
                <span className="contact-subtitle">Fiyat teklifi için iletişime geçebilirsiniz!</span>
                <div className="contact-container">
                    <div className="contact-part">
                        <div className="contact-text-div">
                            <span className="contact-part-title">İletişim Bilgileri</span>
                            <span className="subtitle-part">Bizimle iletişime geçin!</span>
                        </div>
                        <div className="contact-info-part">
                            <div className="contact-info-container">
                                <FontAwesomeIcon color="white" icon={faPhone}/>
                                <span className="white">+90 546 844 19 48</span>
                            </div>
                            <div className="contact-info-container">
                                <FontAwesomeIcon color="white" icon={faMailBulk}/>
                                <span className="white">info@artemisyazilim.com</span>
                            </div>
                            <div className="contact-info-container">
                                <FontAwesomeIcon color="white" icon={faLocationDot}/>
                                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.0059812158524!2d32.868261975268375!3d39.90630286839628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fba370f087d%3A0x2ca5e7dead414f24!2zTXVoc2luIEVydHXEn3J1bCwgQmHFn8OnYXZ1xZ8gU2suIE5vOjE0NiwgMDY2NjAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1734718543059!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="social-info-container">
                            <FontAwesomeIcon color="white" icon={faFacebook}/>
                            <FontAwesomeIcon color="white" icon={faXTwitter}/>
                            <FontAwesomeIcon color="white" icon={faInstagram}/>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <div className="form-container">
                            <div className="input-container">
                                <span>Ad</span>
                                <input type="text" className="contactinput"/>
                            </div>
                            <div className="input-container">
                                <span>Soyadı</span>
                                <input type="text" className="contactinput"/>
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="input-container">
                                <span>Email</span>
                                <input type="text" className="contactinput"/>
                            </div>
                            <div className="input-container">
                                <span>Telefon</span>
                                <input type="text" className="contactinput"/>
                            </div>
                        </div>
                        <div className="form-radio-container">
                            <span className="select-span">Hizmet</span>
                            <div className="radio-main-container">
                                <div className="radio-container">
                                    <input type="radio" name="Service"/>
                                    <span>Mobil Uygulama</span>
                                </div>
                                <div className="radio-container">
                                    <input type="radio" name="Service"/>
                                    <span>Web Sitesi</span>
                                </div>
                                <div className="radio-container">
                                    <input type="radio" name="Service"/>
                                    <span>Güvenlik</span>
                                </div>
                            </div>
                        </div>
                        <div className="message-container">
                            <span>Mesaj</span>
                            <input type="text" className="contactinput"/>
                        </div>
                        <div className="Button-Form-Container">
                            <button className="form-button">Gönder</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;