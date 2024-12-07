import axios from 'axios' ;
import React , {  useEffect, useState  }from 'react';
import { useParams } from 'react-router-dom';
import SendEnquiry from '../SendEnquiry';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState("");
  useEffect( () => {
    axios.get(`http://localhost:4000/courses/${id}`)
    .then((res)=> setCourse(res.data))
    .catch((err) => console.log(err));
  });

  return (
    <div className ="container p-5">
      <div className="row">
        <div className="col-lg-8">
      <h1>{course.course} - {id}</h1>
      <p>Learn with in  {course.duration}Days</p>
      <p className="btn btn-danger">{course.skills}</p>
      <p>{course.description}</p>
      <img src={course.refImg} className="w-50"/>
    </div>
    <div className="col-lg-4">
        <h2>Start Your Journey</h2>
      <SendEnquiry/>
     </div>
    </div>
    </div>
  );
};

export default CourseDetails;