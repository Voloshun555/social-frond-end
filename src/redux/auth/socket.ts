import { Socket, io } from "socket.io-client";

export class SocketApi {
    static socket: null | Socket = null;

    static createConnection() {
        this.socket = io("http://localhost:3005/")
        
        this.socket.on("connect", () => { 
            console.log("connect")
        })
        this.socket.on("disconnect", (e) => {
console.log("diskonect")
         })
    }
}