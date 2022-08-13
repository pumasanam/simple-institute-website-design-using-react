import React, {useState} from 'react';
import './Navbar.css';
import Navimg from './../img/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const BackgroundColor = ()=>{
    if(window.scrollY>=100){
      setBgColor(true);
    }
    else{
      setBgColor(false);
    }
  };
  window.addEventListener('scroll', BackgroundColor);
  // background section


  const [icon, setIcon] = useState(false);
  const toggle =()=>{
    setIcon(!icon);
  }

  return (
    <>

    {/* <div className="navbar text-left" >
        <div className="primary_img">
            hello
        </div>

        <div className="main_ul">
            hy
        </div>
    </div> */}

       <nav className={bgColor? 'nav bg':'nav'}>
        <div className="primary_img">
          <Link style={{cursor:'pointer'}} className="img_link" to="banner" spy={true} smooth={true} offset={-100} duration={500}><img src={Navimg} alt="Logo" /></Link>

          <div className="icons" onClick={toggle}>
            {icon?<i className="fa fa-times" aria-hidden="true"></i>:<i className="fa fa-bars" aria-hidden="true"></i>}
          </div>
        </div>

        <div className={icon?'primary_nav active':'primary_nav'}>
            <div className="main_ul">
              <ul>
                <li><Link className='nav_link ' to="banner" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li><Link className='nav_link' to="service" spy={true} smooth={true} offset={-120} duration={500}>Services</Link></li>
                <li><Link className='nav_link' to="course" spy={true} smooth={true} offset={-120} duration={500}>Courses</Link></li>
                <li><Link className='nav_link' to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                <li><Link className='nav_link' to="contact" spy={true} smooth={true} offset={-110} duration={500}>Contact</Link></li>
              </ul>
            </div>

            <div className="social_links">
                <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/neweracli" target="_blank" ><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </div>
      </nav> 
    </>
  );
};

export default Navbar;
