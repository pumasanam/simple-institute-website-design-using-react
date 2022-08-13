import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(()=>{
    AOS.init({
      duration:1300,
    });
  },[]);

  const SendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_hppszkm', 'template_yelg9gl', e.target, 'M0vhnRDt4gJo3jq_5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <div className="contact">
        <h3>Contact Us</h3>
        <div className="contact_list" data-aos="fade-up">
            <div className="form">
                <form action="" onSubmit={SendEmail}>
                    <input type="text" placeholder='Name' name="name"/>
                    <input type="email" placeholder='Email' name="email" />
                    <textarea name="message" placeholder="Message" resize="off" id="" cols="30" rows="10"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>

            <div className="contact_map" data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.85100491853845!2d85.3234755034661!3d27.66734753719457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d0807cbd65%3A0xac476f7f190ad51b!2sNEW%20ERA%20COMPUTER%20%26%20LANGUAGE%20INSTITUTE!5e0!3m2!1sen!2snp!4v1660229855341!5m2!1sen!2snp" title='map' style={{width:'100%', height:'411px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
