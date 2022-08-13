import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const CourseStorage = ({list}) => {
  useEffect(()=>{
    AOS.init({
      duration:1300,
    });
  },[]);
  return (
    <>
      <div className='course_storage' data-aos="fade-up">
        <div className="course_img"><img src={list.img} alt="" /></div>
         
         <div className="course_title">
            <h5>{list.title}</h5>
         </div>
      </div>
    </>
  );
};

export default CourseStorage;
