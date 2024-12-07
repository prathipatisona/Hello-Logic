import axios from "axios";
import React,{useState} from "react";
import {toast, ToastContainer } from "react-toastify";

const AddCourses = () => {
  const [course, setCourse] = useState("");
  const [refImg, setRefImg] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [skills, setSkills] = useState("");
  const postCourse = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/courses`,{course,refImg,description,duration,skills})
    .then((res) => toast("New Course Added"))
    .catch((err) => console.log(err))
  };
 return (
  <section className="add">
    <form onSubmit={postCourse}>
      <ToastContainer/>
      <input
      type="text"
      name="course"
      value={course}
      onChange={(e) => setCourse(e.target.value)}
      placeholder="Course Name"
      />
      <input
      type="text"
      name="refImg"
      value={refImg}
      onChange={(e) => setRefImg(e.target.value)}
      placeholder="Course refImg"
      />
      <input
      type="text"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Course description"
      />
      <input
      type="text"
      name="duration"
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      placeholder="Course duration"
      />
      <input
      type="text"
      name="skills"
      value={skills}
      onChange={(e) => setSkills(e.target.value)}
      placeholder="Skills that You'll Learn"
      />
      <input type="submit" value="Add Course"/>
    </form>
    </section>
  )
}

export default AddCourses