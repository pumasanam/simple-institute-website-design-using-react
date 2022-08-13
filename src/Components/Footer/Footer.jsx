import React from 'react';
import './Footer.css';
import footerimg from './../img/logo.png';
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <>
      <footer>
            <div className="footer_list first_footer_list">
                <img src={footerimg} alt="logo" />
                <h6>New Era Computer & Language Institute</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, itaque sequi sed accusantium dolor vel.</p>

                <div className="social_links">
                    <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </div>

            <div className="footer_list footer_list_SEcond">
                <h4>Links</h4>

                <div className="footerul">
                    <ul>
                    <li><Link className='nav_link' to="banner" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li><Link className='nav_link' to="service" spy={true} smooth={true} offset={-120} duration={500}>Services</Link></li>
                    <li><Link className='nav_link' to="course" spy={true} smooth={true} offset={-120} duration={500}>Courses</Link></li>
                    <li><Link className='nav_link' to="portfolio" spy={true} smooth={true} offset={-150} duration={500}>About</Link></li>
                    <li><Link className='nav_link' to="contact" spy={true} smooth={true} offset={-110} duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer_list">
                    <h4>Newsletter</h4>

                    <div className="footer_link">
                         <i className="fa fa-map-marker" aria-hidden="true"></i>
                         <p>Lagankhel, Nearby Everest Mo:Mo House</p>
                    </div>

                    <div className="footer_link">
                         <i className="fa fa-phone" aria-hidden="true"></i>
                         <p>985746354754</p>
                    </div>


                    <div className="footer_link">
                         <i className="fa fa-location-arrow" aria-hidden="true"></i>
                         <p>Something@gmail.com</p>
                    </div>
            </div>

      </footer>
    </>
  );
};

export default Footer;
