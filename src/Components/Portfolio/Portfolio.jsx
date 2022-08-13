import React, {useEffect} from 'react';
import './Portfolio.css';
import Carousel from 'react-bootstrap/Carousel';
import PortfolioImg from "./../img/person.jpg";
import PortfolioImg1 from "./../img/banner.jpg";
import PortfolioImg2 from "./../img/p2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(()=>{
    AOS.init({
        duration:1300,
    });
},[]);
  return (
    <>
        <div className='portfolio'>
        <Carousel className='carousel' fade={true} controls={false} data-aos="fade-up" pause={false}>
      <Carousel.Item className='carouse_item' interval={5000}>
        <img
          className=" d-block carousel_img"
          src={PortfolioImg}
          alt="First slide"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
        
        <Carousel.Caption className='caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



      

      <Carousel.Item className='carouse_item' interval={5000}>
        <img
          className=" d-block carousel_img"
          src={PortfolioImg1}
          alt="First slide"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>




         <Carousel.Item className='carouse_item' interval={5000}> 
        <img
          className=" d-block carousel_img"
          src={PortfolioImg2}
          alt="First slide"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </>
  );
};

export default Portfolio;
