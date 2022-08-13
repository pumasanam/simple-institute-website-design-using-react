import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Link from '../Link/Link';
import Course from '../Course/Course';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Banner/>
      <Services/>
      <Link/>
      <Course/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
