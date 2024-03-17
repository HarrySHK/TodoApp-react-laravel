import React, { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  const deleteUser = (id) => {
    http.delete("/users/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  return (
    <div>
      <div className="flex w-3/4 mx-auto mt-6 overflow-x-auto">
        <table className="table-hover table">
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#5a0c6e",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sno.
              </th>
              <th
                style={{
                  backgroundColor: "#5a0c6e",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Name
              </th>
              <th
                style={{
                  backgroundColor: "#5a0c6e",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Email
              </th>
              <th
                style={{
                  backgroundColor: "#5a0c6e",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{++index}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="flex gap-4">
                  <Link
                    className=" text-sky-400 text-3xl"
                    to={{ pathname: "/edit/" + user.id }}
                  >
                    <FaEdit />
                  </Link>
                  <Link
                    className=" text-green-700 text-3xl"
                    to={{ pathname: "/view/" + user.id }}
                  >
                    <FaEye />
                  </Link>
                  <button
                    className=" text-red-700 text-3xl"
                    onClick={()=>{deleteUser(user.id)}}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default home;
