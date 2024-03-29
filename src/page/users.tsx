import { useUsersData } from "../hooks/useUsersDats";

const Users = () => {
  const { users, usersStatus } = useUsersData();

  return (
    <div style={{ margin: "50px" }}>
      {users.user.map((user, index) => (
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
        </div>
      ))}
    </div>
  );
};

export default Users;
