import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import { CiLogout } from "react-icons/ci";
import { logOut } from "../../redux/auth/authOperation";
import s from "./currentUser.module.scss";
import io from "socket.io-client";

export const CurrentUser = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  const { name, email, avatar, id } = useAppSelector((user) => user.auth.user);
  const [isOnline, setIsOnline] = React.useState(false); 
  useEffect(() => {
    const socket = io("http://localhost:3006", {
      query: { userId: id },
    });

    socket.on("onlineStatus", (status) => {
      console.log("Received online status from server:", status);
      setIsOnline(status);
    });

  }, [id]);

  return (
    <div className={s.currentUser}>
      <div className={s.wrapUser}>
        <img className={s.icon} src={avatar} alt="avatar" />

        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <button onClick={logout}>
          <CiLogout size={40} />
        </button>
      </div>
      <p>{isOnline ? "Онлайн" : "Офлайн"}</p>
      {/* Відображення статусу користувача */}
    </div>
  );
};
