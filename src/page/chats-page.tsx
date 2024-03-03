import React, { Suspense, useEffect } from "react";
import { CurrentUser } from "../components/current-user/curent-user";
import { CreateChat } from "../components/create-chat/create-chat";
import s from "./chatsPage.module.scss";
import { ChatList } from "../components/chat-list/chat-list";
import { useAppDispatch, useAppSelector } from "../hooks/hook-redux";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { getChatroomsForUserAsync } from "../redux/chat/chatOperation";
import { RootState } from "../redux/store";
import { getAllUsers } from "../redux/user/userOperation";

const ChatsPage = () => {
  const { chats } = useAppSelector((state) => state.chat);
  const { user } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getChatroomsForUserAsync(user.id));
  }, [dispatch, user.id]);

  return (
    <div style={{ display: "flex" }}>
      <div className={s.wrap}>
        <CurrentUser />
        <CreateChat />
        {chats &&
          chats.map((state) => (
            <div key={state.id} className={s.chatListItem}>
              <Link to={`${state.id}`}>
                <ChatList chats={state.name} />
              </Link>
            </div>
          ))}
      </div>
      <Suspense fallback="Завантаження...">
        <Outlet />
      </Suspense>
    </div>
  );
}; 
export default ChatsPage;
