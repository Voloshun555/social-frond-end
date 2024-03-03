import { useEffect, useState } from "react";
import io from "socket.io-client";

const useWebSocket = (userId: string) => {
    const [isOnline, setIsOnline] = useState(false);
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:3006", {
            query: { userId: userId },
        });
        setSocket(newSocket);

        newSocket.on("connect", () => {
            console.log("Connected to server");
        });

        newSocket.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        newSocket.on("onlineStatus", (status: boolean | ((prevState: boolean) => boolean)) => {
            console.log("Received online status from server:", status);
            setIsOnline(status);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [userId]);

    return { isOnline, socket };
};

export default useWebSocket;