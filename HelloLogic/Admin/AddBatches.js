import axios from "axios" ;
import React , { useState }from 'react'

const AddBatches = () => {
 const [course,setCourse] = useState("");
 const [startDate,setStartDate] = useState("");
 const [duration,setDuration] = useState("");
 const [timings,setTimings] = useState("");
 const [trainer,setTrainer] = useState("");
 const postBatch = (e) => { 
    e.preventDefault()
    axios
     .post('http://localhost:4000/batches', {
        course,
        startDate,
        duration,
        timings,
        trainer
    })
    .then(()=>alert("New Batch Added"))
    .catch((err)=>console.log(err));
 };
  return (
    <div className="container work p-5">
        <form onSubmit={postBatch}>
        
            <input 
             type ="text"
             name="course"
             placeholder="course Name"
             value={course}
             onChange={(e) => setCourse(e.target.value)}
            />
            <input 
             type ="date"
             name="startDate"
             value={startDate}
             onChange={(e) => setStartDate(e.target.value)}
            />
            <input 
             type ="text"
             name="duration"
             placeholder="course duration"
             value={duration}
             onChange={(e) => setDuration(e.target.value)}
            />
            <input 
             type ="text"
             name="timings"
             placeholder="course Timings"
             value={timings}
             onChange={(e) => setTimings(e.target.value)}
            />
            <input 
             type ="text"
             name="trainer"
             placeholder="Trainer"
             value={trainer}
             onChange={(e) => setTrainer(e.target.value)}
            />
            <input type="submit" value="Add Batch"/>
        </form>
        </div>
);
};

export default AddBatches;