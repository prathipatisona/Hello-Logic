import axios from 'axios';
import React , { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses]= useState([]);
    useEffect(()=> {
        axios
         .get('http://localhost:4000/courses')
         .then((res) => setCourses(res.data))
         .catch((err) => console.log(err));
 });
  return (
    <div className=" fix container p-5">
        <h1>Our Courses</h1>
        <div className="row">
        {courses.map((course,index) => {
            return(
                <div className="col-md-6 col-lg-3" key={index}>
                    <div className="card">
                        <img 
                         src={course.refImg}
                         alt={course.course} 
                         className="w-100"
                         />
                        <div className="card-body">
                            <h5 className="card-title">{course.course}</h5>
                        </div>
                        <div className="card-footer">
                            <NavLink to={`/courseDetails/${course.id}`}><button>KNOW MORE</button></NavLink>
                    </div>
                    </div>
                    </div>
            );
            })}
            </div>
            </div>
         )};

export default Courses;