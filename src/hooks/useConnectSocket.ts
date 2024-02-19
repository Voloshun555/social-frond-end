import { useEffect, useState } from "react"
import { SocketApi } from "../redux/auth/socket"

export const useConnecktSoket = () => {
    const [message, setMessage] = useState('')
    const connectSocket = () => {
        SocketApi.createConnection()
        SocketApi.socket?.on('server-path', (data) => {
            setMessage(JSON.stringify(data))
        })
   }
    useEffect(() => {
        connectSocket()
    }, [])

    return {message}
}