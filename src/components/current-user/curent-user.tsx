import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import { CiLogout } from "react-icons/ci";
import { logOut } from "../../redux/auth/authOperation";
import s from "./currentUser.module.scss";
import useWebSocket from "../../hooks/useConnectSocket";
import { useAuth } from "../../hooks/useAuth";

export const CurrentUser = () => {
  const {user} = useAuth()
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  const { name, email, avatar } = useAppSelector((user) => user.auth.user);
//  const {isOnline} = useWebSocket(user.id)
  

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
      {/* <p>{isOnline ? "Онлайн" : "Офлайн"}</p> */}
      {/* Відображення статусу користувача */}
    </div>
  );
};
