import { createChat } from "../../redux/chat/chatOperation";
import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import s from "./chatsList.module.scss";
import { useState } from "react";

export const ChatsList = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const data = useAppSelector(state => state.auth.user)
  console.log(data)

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
        <input
          type="text"
          placeholder="Name chat"
          className={s.searchChats}
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Create chat</button>
      </form>
    </div>
  );
};
