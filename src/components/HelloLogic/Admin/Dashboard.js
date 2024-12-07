import React, { useContext, useMemo, useState } from 'react';
import Welcome from "./Welcome";
import AddBatches from './AddBatches';
import BatchesData from './BatchesData';
import AddCourses from './AddCourses';
import ViewCourses from './ViewCourses';
import ViewEnquiries from './ViewEnquiries';
import { loginStatus } from '../../../App';
import AdminLogin from './AdminLogin';



const DashBoard = () => {
    const [view, setView] = useState("");
    const [login,setLogin] = useContext(loginStatus);
    

    const DashboardView = useMemo(()=>{
         if (view === "") {
                return <Welcome />;
            } else if (view === "addBatches") {
                return <AddBatches />;
            } else if (view === "viewBatches") {
                return <BatchesData />;
            } else if (view === "addCourses") {
                return <AddCourses />;
            } else if (view === "viewCourses") {
                return <ViewCourses />;
            } else if (view === "viewEnquiries") {
                return <ViewEnquiries />;
            }
        },[view]);
    
       
     if(login) {
        return (
            <div className="container-fluid">
                <div className="row dash">
                    <aside className="col-lg-3">
                        <h2 onClick={() => setView("")}>Admin Dashboard</h2>
                        <button onClick={() => setView("addBatches")}>Add Batch</button>
                        <button onClick={() => setView("viewBatches")}> View Batches</button>
                        <button onClick={() => setView("addCourses")}>Add Course</button>
                        <button onClick={() => setView("viewCourses")}>View Courses</button>
                        <button onClick={() => setView("viewEnquiries")}>View Enquiries</button>
                    </aside>
                    <div className="col-lg-9 d-flex justify-content-center align-items-center p-5">
                        {DashboardView}
                    </div>
                </div>
            </div>
        );
    }else {
        return <AdminLogin/>;
    }
};

export default DashBoard;