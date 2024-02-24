import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook-redux";
import { deleteChatroomAsync } from "../../redux/chat/chatOperation";
import { useNavigate } from "react-router-dom";
import { LuSend } from "react-icons/lu";

import s from "./chat.module.scss";

const Chat = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteChatroom = () => {
    if (id !== undefined) {
      dispatch(deleteChatroomAsync(id));
      navigate("/messages");
    } else {
      console.error("Chat ID is undefined");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    setMessages((prevMessages) => [...prevMessages, value]);
    setValue("");
  };

  return (
    <div className={s.container}>
      <div className={s.currentChat}>
        <h1>Chat Room ID: {id}</h1>
        <button onClick={handleDeleteChatroom}>Delete</button>
      </div>
      <div className={s.wrapForm}>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <div className={s.wrapper}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="напишіть повідомлення"
            />
            <button type="submit">
              <LuSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
