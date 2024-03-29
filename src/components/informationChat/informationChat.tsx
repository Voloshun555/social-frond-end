import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hook-redux";
import { useUsersData } from "../../hooks/useUsersDats";
import s from "./informationChat.module.scss";
import { addUsersToChatroom } from "../../redux/chat/chatOperation";

export const InformationChat = () => {
  const { users, user, usersStatus } = useUsersData();
  const filteredUsers = users.user.filter((u) => u.id !== user.id);
  const { id } = useParams<{ id: string | undefined }>(); // Define the type of id as string | undefined

  const dispatch = useAppDispatch();

  const addUserForChat = (userEmail: string) => {
    // Check if id is defined before dispatching the action
    if (id) {
      dispatch(addUsersToChatroom({ chatroomId: id, email: userEmail }));
    } else {
      console.error("chatroomId is undefined");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      {filteredUsers.map((user, index) => (
        <div key={index} style={{ margin: "50px" }}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          {usersStatus.find(
            (status: { userId: string }) => status.userId === user.id
          ) ? (
            <p>online</p>
          ) : (
            <p>offline</p>
          )}
          <button onClick={() => addUserForChat(user.email)}>Add</button>
        </div>
      ))}
    </div>
  );
};
