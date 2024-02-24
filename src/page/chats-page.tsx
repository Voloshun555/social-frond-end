import React, { Suspense } from "react";
import { CurrentUser } from "../components/current-user/curent-user";
import { CreateChat } from "../components/create-chat/create-chat";
import s from "./chatsPage.module.scss";
import { ChatList } from "../components/chat-list/chat-list";
import { useAppSelector } from "../hooks/hook-redux";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const ChatsPage = () => {
  const { chats } = useAppSelector((state) => state.chat);
  return (
    <div style={{ display: "grid", gridTemplateColumns: ".7fr 3fr" }}>
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
