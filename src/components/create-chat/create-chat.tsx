import { createChat } from "../../redux/chat/chatOperation";
import { useAppDispatch } from "../../hooks/hook-redux";
import s from "./create-chat.module.scss";
import { useState } from "react";

export const CreateChat = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createChat({ name: value }));
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.containerChats}>
      <form onSubmit={handleSubmit}>
        <div className={s.searchChats}>
          <input
            type="text"
            placeholder="Name chat"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">Create chat</button>
        </div>
      </form>
    </div>
  );
};
