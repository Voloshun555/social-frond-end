import { useAppSelector } from "../hooks/hook-redux";
import { useAuth } from "../hooks/useAuth";
import { useWebSocket } from "../hooks/useConnectSocket";

const Users = () => {
  const users = useAppSelector((user) => user.user);
  const { user } = useAuth()
  const {usersStatus} = useWebSocket(user.id)
  

  return (
    <div style={{ margin: "50px" }}>
      {users.user.map((user, index) => (
        <div key={index} style={{ margin: "50px" }}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          {usersStatus.find((status: { userId: string; }) => status.userId === user.id) ? (
            <p>online</p>
          ) : (
            <p>offline</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
