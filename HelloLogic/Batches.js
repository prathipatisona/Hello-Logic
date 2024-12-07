import axios from "axios";
import React,{ useEffect,useState }from "react";

const Batches = () => {
  const  [batchesData,setBatchesData]= useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:4000/batches`)
    .then((res)=>setBatchesData(res.data))
    .catch((err)=> console.log(err));
  });
   return (
    <div className ="container p-5">
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Start Date</th>
           <th>Timings</th>
            <th>Duration</th>
            <th>Trainer</th>
            </tr>
        </thead>
        <tbody>
          {batchesData.map((bat) =>{
            return (
              <tr>
                <td>{bat.course}</td>
                <td>{bat.startDate}</td>
                <td>{bat.timings}</td>
                <td>{bat.duration}</td>
                <td>{bat.trainer}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  };

export default Batches;