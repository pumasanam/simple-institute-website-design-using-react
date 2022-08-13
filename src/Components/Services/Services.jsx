import React,{useEffect} from 'react';
import './Services.css';
import ServiceImg from './../img/service.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(()=>{
        AOS.init({
            duration:1300,
        });
    },[]);
  return (
    <>
      <div className="service">
        <div className="service_list">
            <div className="service_img" data-aos="fade-up">
                <img src={ServiceImg} alt="" />
            </div>

            <div className="service_item" data-aos="fade-up">
                <h2>Why With Us ?</h2>

                <div className="inner_service">
                    <div className="inner_service_list">
                        <div className="service_fa">
                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                        </div>
                        
                        <div className="inner_service_item">
                           <h4>Peaceful Environment</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus fuga sunt esse officia dicta ad tenetur pariatur earum iusto!</p>
                        </div>
                    </div>

                    <div className="inner_service_list">
                        <div className="service_fa">
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                        </div>
                        
                        <div className="inner_service_item">
                           <h4>Earn Certificate</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus fuga sunt esse officia dicta ad tenetur pariatur earum iusto!</p>
                        </div>
                    </div>


                    <div className="inner_service_list">
                        <div className="service_fa">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        
                        <div className="inner_service_item">
                           <h4>Learn With Experts</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus fuga sunt esse officia dicta ad tenetur pariatur earum iusto!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Services;
