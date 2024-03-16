import { useEffect, useState } from "react";
import io from "socket.io-client";

export const useWebSocket = (userId: string) => {
    const [isOnline, setIsOnline] = useState(false);
    const [socket, setSocket] = useState<any>(null);
    const [usersStatus, setUsersStatus] = useState<any>([])

    useEffect(() => {
        if (!userId) {
            return;
        }
        const newSocket = io("http://localhost:3006", {
            query: { userId: userId },
        });
        setSocket(newSocket);

        const userChatIsOnlineHandler = (data: any) => {
            setUsersStatus(data);
        };

        newSocket.on("connect", () => {
            newSocket.on('usersStatus', userChatIsOnlineHandler);
        });

        newSocket.on("disconnect", () => {
            newSocket.off('usersStatus', userChatIsOnlineHandler);
        });

        newSocket.on("onlineStatus", (status: boolean) => {
            console.log(status)
            setIsOnline(status);
        });


        return () => {
            newSocket.disconnect();
        };
    }, [userId]);

    return { isOnline, socket, usersStatus };
};


