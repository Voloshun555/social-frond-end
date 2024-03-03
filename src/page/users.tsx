import React, { useState } from "react";
import { useAppSelector } from "../hooks/hook-redux";

const Users = () => {
    const users = useAppSelector((user) => user.user);
    const { id } = useAppSelector(
      (user) => user.auth.user
    );
  const [onlineUsers, setOnlineUsers] = useState([]);

 

  return (
    <div style={{ margin: "50px" }}>
      {users.user.map((user, index) => (
        <div key={index} style={{ margin: "50px" }}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>{onlineUsers ? "Online" : "Offline"}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
