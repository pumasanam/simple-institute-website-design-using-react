import React from 'react';
import './Course.css';
import CourseData from './CourseData';
import CourseStorage from './CourseStorage';

const Course = () => {
  return (
    <>
      <div className="course">
        <h5>COURSES</h5>
        <h3>Browse Our Available Courses</h3>

        <div className="course_data">
            {CourseData.map((list)=>{
              return <CourseStorage key={list.id} list={list}/>
            })}
        </div>
      </div>
    </>
  );
};

export default Course;
