import axios from "axios";
import React, { useState } from "react";

const SendEnquiry = () => {
    const [username,setUsername] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");
    const [message,setMessage] = useState("");

    const postEnquiry = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/enquiries`,{username,mobile,email,course,message})
        .then(()=>alert("you enquiry sent"))
        .catch((err)=>console.log(err))
    };

 return (
    <form onSubmit={postEnquiry}>
 <input
  type="text"
  name="username" 
  placeholder="Enter Name" 
  className="form-control mb-3"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  />
  <input 
 type="text" 
 name="mobile"
 placeholder="Mobile Number"
 className="form-control mb-3"
 value={mobile}
 onChange={(e) => setMobile(e.target.value)}
   />
<input
  type="text"
  name="email"
  placeholder="Email Address"
  className="form-control mb-3"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  
     />
 <input
  type="text" 
  name="course"
  placeholder="Course"
  className="form-control mb-3"
  value={course}
  onChange={(e) => setCourse(e.target.value)}
    />
 <input
  type="text" 
  name="message" 
  placeholder="Message"
  className="form-control mb-3"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
   />
   <input type="submit" className="btn btn-danger"/>
    </form>
  );
};

export default SendEnquiry;