import React from "react";
import useCallApi from "./CallApi";
const Welcome = () => {
  const courses = useCallApi("http://localhost:4000/courses");
  const enquiries  = useCallApi("http://localhost:4000/enquiries");
  const batches = useCallApi("http://localhost:4000/batches");
  return (
    <section className="begin">
      <div>
   <h1>Welcome to Admin Dashboard</h1>
   <div className="row set welcomeset">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {courses.length}</h5>
          <h5 className="card-title">Courses</h5>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {enquiries.length}</h5>
          <h5 className="card-title">Enquiries</h5>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {batches.length}</h5>
          <h5 className="card-title">Batches</h5>
        </div>
      </div>
    </div>
   </div>
      </div>
      </section>
  );
};

export default Welcome;