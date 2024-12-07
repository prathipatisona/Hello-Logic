import axios from "axios";
import React , { useEffect, useState} from "react";

const BasicRead = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data);
            console.log("Data update to State");
        })
         .catch((err) => {
            console.log(err);
       });
   });
  return (
    <div className ="read p-5">
    <h1 className="text-center">BasicRead</h1>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return(
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.website}</td>
                            </tr>
                        
                    )
            })
        }
        </tbody>
    </table>
    </div>
)};

export default BasicRead;