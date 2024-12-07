import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Batches from "./Batches";
import Contact from "./Contact";
import Courses from "./Courses";
import NoPage from "./NoPage";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import CourseDetails from "./Admin/CourseDetails";


const Routing = () => {
  return (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/batches" element={<Batches/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/courseDetails/:id" element={<CourseDetails/>}/>
    <Route path="/admin" element={<AdminLogin/>}/>
    <Route path="/dashboardfhgfhfddd" element={<Dashboard/>}/>
    <Route path="*" element={<NoPage/>}/>
    </Routes>
);
};

export default Routing;