import React from 'react';
import './Banner.css'
import { Link } from 'react-scroll';


const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_list">
            <h5>Welcome To</h5>
            <h3>New Era Computer  & Language Institute</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita  dolore ipsam unde corrupti deleniti sit ex, <br /> delectus odio! Voluptas!</p>

            <div className="banner_btn">
            <Link className='nav_link' to="contact" spy={true} smooth={true} offset={-110} duration={500}><button className='first_btn'>Contact Us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>

            <Link className='nav_link' to="course" spy={true} smooth={true} offset={-120} duration={500}><button className='second_btn'>View Courses <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
