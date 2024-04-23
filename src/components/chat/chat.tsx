import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LuSend } from "react-icons/lu";

import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import { deleteChatroomAsync } from "../../redux/chat/chatOperation";
import { useNavigate } from "react-router-dom";
import { fetchMessagesForChatroom } from "../../redux/message/messageOperation";
import { useAuth } from "../../hooks/useAuth";
import { receiveMessage } from "../../redux/message/messageSlice";
import { useWebSocket } from "../../hooks/useConnectSocket";

import s from "./chat.module.scss";
import { InformationChat } from "../informationChat/informationChat";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const { user } = useAuth();
  const { id } = useParams();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { socket, usersStatus} = useWebSocket(user.id);

  const message = useAppSelector((state) => state.message.data);

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

  useEffect(() => {
    if (!socket) return;
    socket.on("receive_message", (dataSicket: any) => {
      dispatch(receiveMessage(dataSicket));
    });
  }, [socket, dispatch]);

  useEffect(scrollToBottom, [message]);

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

    if (inputValue.trim() && user.name && socket) {
      socket.emit("message", {
        content: inputValue,
        chatId: id,
        senderId: user.id,
      });
    }
    setInputValue("");
    scrollToBottom();
  };
  return (
    <div style={{ display: "flex" }}>
      <div className={s.container}>
        <div className={s.currentChat}>
          <h1>Chat Room ID: {id}</h1>
          <button onClick={handleDeleteChatroom}>Delete</button>
        </div>
        <div ref={chatContainerRef} className={s.scroll}>
          {message.map((msg, index) => (
            <div
              className={`${s.sender} ${
                msg.sender && msg.sender.id === user.id
                  ? s.senderMe
                  : s.senderOther
              }`}
              key={index}
            >
              <div className={s.avatar}>
                {msg.sender && msg.sender.id !== user.id && (
                  <div>
                    <img
                      src={msg.sender.avatar}
                      alt="avatar"
                      width={25}
                      height={25}
                    />
                    {usersStatus.find(
                      (status: { userId: string }) =>
                        status.userId === msg.sender.id
                    ) ? (
                      <p>online</p>
                    ) : (
                      <p>offline</p>
                    )}
                  </div>
                )}
              </div>
              <div className={s.senderContent}>
                <p>{msg.sender && msg.sender.name}</p>
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
      <InformationChat />
    </div>
  );
};

export default Chat;
