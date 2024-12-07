import axios from "axios";
import React,{ useEffect,useState }from "react";

const ViewEnquiries = () => {
  const  [viewenquiriesData,setViewEnquiriesData]= useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:4000/enquiries`)
    .then((res)=>setViewEnquiriesData(res.data))
    .catch((err)=> console.log(err));
  });
   return (
    <div className =" entry container ">
      <table className="table2">
        <thead>
          <tr>
            <th>Username</th>
            <th>mobile</th>
           <th>email</th>
            <th>Course</th>
            <th>message</th>
            </tr>
        </thead>
        <tbody>
          {viewenquiriesData.map((bat) =>{
            return (
              <tr>
                <td>{bat.username}</td>
                <td>{bat.mobile}</td>
                <td>{bat.email}</td>
                <td>{bat.course}</td>
                <td>{bat.message}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  };

export default ViewEnquiries;