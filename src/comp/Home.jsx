import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    Loadusers();
  }, []);

  const Loadusers = async () => {
    const result = await axios.get("https://vitejs-vite-dyhgcp--3001.local.webcontainer.io/users");
    setusers(result.data.reverse());
  };

  const deleteuser = async id => {
  await axios.delete(`https://vitejs-vite-dyhgcp--3001.local.webcontainer.io/users/${id}`);
    Loadusers()
  };





  return (
    <>
      <table className="table">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Users name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>

              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-warning m-2" to={`/user/${user.id}`}>
                  preview
                </Link>

                <Link className="btn btn-success mr-2" to={`/users/edit/${user.id}`}>
                  Edit
                </Link>
                <button className="btn btn-danger m-2" onClick={()=>deleteuser(user.id)} >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
