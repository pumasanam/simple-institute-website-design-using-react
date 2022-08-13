import React, {useEffect} from 'react';
import './Link.css';
import LinkImg from './../img/back.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Link = () => {
  useEffect(()=>{
    AOS.init({
      duration:1300,
    });
  },[]);
  return (
    <>
      <div className="link">
        <div className="prime_link"  data-aos="fade-up">
            <h3>Join With Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique eligendi illo facilis dolorem id magnam amet nulla officiis atque saepe debitis omnis odio mollitia laudantium repellat provident sunt iste unde, ullam ipsam rerum minima ratione! Omnis aspernatur non quisquam vero! Temporibus dolor assumenda totam omnis quod dignissimos accusamus, reprehenderit ipsa officia quo, recusandae iure quisquam magnam aperiam fugiat sequi corrupti consectetur dolores. Asperiores illo fugiat perspiciatis adipisci inventore eius. Omnis delectus beatae, facere autem ab non dolorem harum distinctio sed, modi architecto unde temporibus in officia minus nulla consectetur quasi atque iusto tenetur dolorum doloribus. Quis sunt aspernatur corrupti!</p>
        </div>

        <div className="link_img"  data-aos="fade-up">
            <img src={LinkImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Link;
