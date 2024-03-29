import { useAppSelector } from "../hooks/hook-redux";
import { useAuth } from "../hooks/useAuth";
import { useWebSocket } from "../hooks/useConnectSocket";

export const useUsersData = () => {
    const users = useAppSelector((user) => user.user);
    const { user } = useAuth()
    const { usersStatus } = useWebSocket(user.id)

    return { users, user, usersStatus };
};
