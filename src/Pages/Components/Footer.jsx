import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
const Footer = () =>{
    return(
        <footer className="footer">
        <div className='footer-column'>
            <span className='footer-logo'>ARTEMİS YAZILIM</span>
            <span className='Copyright-span'>Copyright © Bütün Hakları Saklıdır</span>
            <div className='Brands-container'>
                <FontAwesomeIcon style={{color:"white"}} icon={faFacebook} />
                <Link to="https://www.instagram.com/artemisyazilim/"><FontAwesomeIcon style={{color:"white"}} icon={faInstagram} /></Link>
                <FontAwesomeIcon style={{color:"white"}} icon={faXTwitter} />
            </div>
        </div>
        <div className='footer-column'>
            <span className='footer-logo'>Şirket</span>
            <Link to="/aboutus" className='Copyright-span'>Hakkımızda</Link>
            <Link to="/contact" className='Copyright-span'>İletişim</Link>
        </div>
        <div className='footer-column'>
            <span className='footer-logo'>Toplantı</span>
            <Link to="/contact" className='Copyright-span'>İletişim</Link>
            <div className='email-container'>
                <input placeholder='email adresiniz' type='text' className='email-input'/>
                <button className='email-send-container'><FontAwesomeIcon style={{color:"white"}} icon={faPaperPlane}/></button>
            </div>
        </div>
    </footer>
    )
}
export default Footer;