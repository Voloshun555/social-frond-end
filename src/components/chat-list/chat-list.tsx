import s from "./chat-list.module.scss";

interface PropsChatList {
  chats?: string | undefined,
 
}
export const ChatList = ({ chats}: PropsChatList) => {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
      </div>
      <h1>{chats}</h1>
    </div>
  );
};
