import React from 'react'
import '../style/footer.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="footer-section">
        <div className="footer">
        <div className="heading5">Address</div>
        <div className="write">Chai Coffee Café</div>
        <div className="write">Plot No. AF-110 3 Road,</div>
        <div className="write">Karachi Cantonment Askari 2, Pakistan</div>
          
       <div className="num">
         Call +21090078601</div>

         <div className="mail">aaleali999@gmail.com</div>
         <div className="in">
            <input type="text" placeholder='SEND EMAIL' />
         </div>
         

    </div>
    <div className="cover">
        <div className="copyright">2024 All Rights Reserved| Designed by Aynn Fatima</div>
        <div className="icons">
       <Link href="https://www.linkedin.com/in/aynnfatima3003/" target="_blank"> <FaLinkedin size={30}/>
        </Link>
        <Link href="https://github.com/AynnFatima999" target="_blank"> <FaGithub size={30}/>
        </Link>
        <Link href="https://facebook.com/" target="_blank"> <FaFacebook size={30}/>
        </Link>
        <Link href="https://instagram.com/" target="_blank"> <FaInstagram size={30}/>
        </Link>
        </div>
    </div>
    </section>
  )
}

export default Footer;
