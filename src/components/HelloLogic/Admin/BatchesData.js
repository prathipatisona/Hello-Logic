import axios from "axios";
import React, { useEffect,useState } from "react";
const BatchesData = () => {
    const [batches,setBatchesData] = useState([]);
    const [id, setId] = useState("");
    const [course,setCourse] = useState("");
    const [startDate,setStartDate] = useState("");
    const [duration,setDuration] = useState("");
    const [timings,setTimings] = useState("");
    const [trainer,setTrainer] = useState("");
    useEffect(()=>{
        axios
        .get('http://localhost:4000/batches')
        .then((res)=>setBatchesData(res.data))
        .catch((err)=>console.log(err));
    });
    const deleteBatch = (batchId) => {
     axios
     .delete(`http://localhost:4000/batches/${batchId}`)
     .then(()=> alert("Batch Delete"))
     .catch((err)=>console.log(err));
};
 const getOneBatch = (batchId) => {
    axios
    .get(`http://localhost:4000/batches/${batchId}`)
    .then((res)=> {
        setId(res.data.id);
        setCourse(res.data.course);
        setStartDate(res.data.startDate);
        setDuration(res.data.duration);
        setTimings(res.data.timings);
        setTrainer(res.data.trainer);
    })
    .catch((err)=> console.log(err));
 };
 const updateBatch = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:4000/batches/${id}`, {
     id,
     course,
     startDate,
     duration,
     timings,
     trainer,
 })
  .then((res)=> alert("Batch Updated"))
  .catch((err)=> console.log(err));
 };
 return (
  <div className="table">
    <table className="table1">
        <thead>
            <tr>
                <th>Course</th>
                <th>Start Date</th>
                <th>Timings</th>
                <th>Duration</th>
                <th>Trainer</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {batches.map((bat, index) => {
                return (
                    <tr key={index}>
                        <td>{bat.course}</td>
                        <td>{bat.startDate}</td>
                        <td>{bat.timings}</td>
                        <td>{bat.duration}</td>
                        <td>{bat.trainer}</td>
                        <td>
                          <button
                              onClick={()=> getOneBatch(bat.id)}
                              className="btn btn-primary"
                              data-bs-target= "#update"
                              data-bs-toggle="modal"
                            >  
                             Edit
                           </button>
                           <button
                            className="btn btn-danger"
                            onClick={()=> deleteBatch(bat.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  <div className="modal fade" id="update">
    <div className="modal-dialog">
    <div className="modal-content">
     <div className="modal-body">
     <form onSubmit={updateBatch}>
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
            <input type="submit" value="update Batch"/>
        </form>
        </div>   
    </div>

    </div>
  </div>
           
  </div>
  )};
  


export default BatchesData;





