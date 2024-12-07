import React from "react";
import SendEnquiry from "./SendEnquiry";

const Contact = () => {
  return (
    <div className="container p-5">
        <div className="row">
            <div className="col-md-6 shadow p-5">
                <h2 className="text-center">Contact Us</h2>
                <SendEnquiry/>
            </div>
            <div className="col-md-6 shadow p-5">
                <h5>prathipatisona@gmail.com</h5>
            </div>
        </div>
    </div>
  );
};

export default Contact;