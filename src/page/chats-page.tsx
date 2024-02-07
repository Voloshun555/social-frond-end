import React from "react";
import { CurrentUser } from "../components/current-user/curent-user";
import { ChatsList } from "../components/chats-list/chats-list";
import { Chat } from "../components/chat/chat";
import s from "./chatsPage.module.scss"

const ChatsPage = () => {
  return <div
  
    style={{display: "grid",
    gridTemplateColumns: ".7fr 3fr"
  }}>
    <div className={s.wrap}>
    <CurrentUser />
    <ChatsList/>
    </div>
    <div>
      <Chat/>
    </div>
  </div>;
};

export default ChatsPage;
