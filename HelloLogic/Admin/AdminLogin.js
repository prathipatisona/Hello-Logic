import React,{ useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../../../App";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password,setpassword] = useState("");
  const [login,setLogin] = useContext(loginStatus)
  const navigate = useNavigate();
  const loginCheck = (e) => {
    e.preventDefault();
    if(username === "sona" && password === "1234"){
      setLogin(true);
      navigate("/dashboardfhgfhfddd")
      } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="container pin p-5">
      <div className=" login shadow col-lg-6 p-5 mx-auto">
        <form onSubmit={loginCheck}>
        <input type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        />
        <input type="password"
        name="password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        placeholder="password"
        />
        <input type="submit" value ="Login"/>
        </form>
      </div>
 </div>
  );
};

export default AdminLogin;
