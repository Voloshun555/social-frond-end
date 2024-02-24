import { createAsyncThunk } from '@reduxjs/toolkit';

const createWebSocket = () => {
    const socket = new WebSocket('ws://example.com/socket');
    return socket;
};

const socket = createWebSocket();
const sendMessageToWebSocket = async (message: string) => {
    return new Promise((resolve, reject) => {
        socket.send(JSON.stringify(message));
        resolve(message);
    });
};

