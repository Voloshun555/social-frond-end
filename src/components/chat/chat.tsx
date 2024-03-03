import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import { deleteChatroomAsync } from "../../redux/chat/chatOperation";
import { useNavigate } from "react-router-dom";
import { LuSend } from "react-icons/lu";
import {
  sendMessage,
  fetchMessagesForChatroom,
} from "../../redux/message/messageOperation";

import s from "./chat.module.scss";

const Chat = () => {
  const ownerId = useAppSelector((stat) => stat.chat.chats[0]?.ownerId);
  const message = useAppSelector((state) => state.message);
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const chatContainerRef = useRef<HTMLDivElement>(null);
console.log(chatContainerRef);
  useEffect(() => {
    if (id) {
      dispatch(fetchMessagesForChatroom(id));
    }
  }, [dispatch, id]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  useEffect(scrollToBottom, [message.data]); 

  const handleDeleteChatroom = () => {
    if (id !== undefined) {
      dispatch(deleteChatroomAsync(id));
      navigate("/messages");
    } else {
      console.error("Chat ID is undefined");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue || !id) {
      return;
    }

    dispatch(
      sendMessage({ chatroomId: id, content: inputValue, userId: ownerId })
    );

    setInputValue("");
    scrollToBottom();
  };

  return (
    <div className={s.container}>
      <div className={s.currentChat}>
        <h1>Chat Room ID: {id}</h1>
        <button onClick={handleDeleteChatroom}>Delete</button>
      </div>
      <div ref={chatContainerRef} className={s.scroll}>
        {message.data.map((msg, index) => (
          <div
            className={`${s.sender} ${
              msg.sender.id === ownerId ? s.senderMe : s.senderOther
            }`}
            key={index}
          >
            <div className={s.avatar}>
              {msg.sender.id !== ownerId && (
                <img
                  src={msg.sender.avatar}
                  alt="avatar"
                  width={25}
                  height={25}
                />
              )}
            </div>
            <div className={s.senderContent}>
              <p>{msg.sender.name}</p>
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={s.wrapForm}>
        <form onSubmit={handleSubmit}>
          <div className={s.wrapper}>
            <input
              className={s.inputField}
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="напишіть повідомлення"
            />
            <button type="submit">
              <LuSend size={25} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
