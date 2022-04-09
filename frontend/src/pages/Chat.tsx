import { io, Socket } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import http from "../apis/http-common";
import { AxiosError } from "../types/axios";
import { i_chatStateData, i_chat_error_res } from "../types/chat";

const host = "http://localhost:3080"; //backend
const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [inbox, setInbox] = useState<i_chatStateData[]>([]);
  const [id, setId] = useState<string>();
  const socketRef = useRef<Socket>();
  const [error, setError] = useState<string[]>([]);

  //! doan nay hom sau doi thanh post de lay msg tu backend
  useEffect(() => {
    http.get<i_chatStateData[]>("/chat").then((res) => {
      const reverseData=res.data.reverse();
      setInbox(reverseData);
    })
    socketRef.current = io(host);
    socketRef.current.on("chat message", (newMsg) => {
      console.log(newMsg);
      setInbox((oldInbox) => [...oldInbox, newMsg]);
      console.log(inbox);
    });

    socketRef.current.on("id", (id: string) => {
      setId(id);
    });
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setMessage(value);
  };
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (message !== null) {
      http
        .post<i_chatStateData>("chat", {
          userID: localStorage.getItem("userID"),
          message: message,
          time: new Date(),
        })
        .then((res) => {
          console.log(res.data);
          setMessage("");
        })
        .catch((err: AxiosError) => {
          if (err.response?.data) {
            let errList: i_chat_error_res = err.response?.data;
            let errMsgList: string[] = errList.errors.map((err) => err.msg);
            setError(errMsgList);
          }
        });
    }
  };
  return (
    <div className="chat-container">
      <div className="inbox">
        <div className="inbox-people">
          <h4>Active users</h4>
        </div>
        <ul className="inbox-messages">
          <div className="messages-history">
            {inbox.map((chat, index) => {
              return (
                <li
                  className={
                    chat.userID === localStorage.getItem("userID")
                      ? "chat-me"
                      : "chat-another"
                  }
                  key={index}
                >
                  <p>{chat.message}</p>
                  <span>{chat.userID}</span>
                  <span>{chat.time}</span>
                </li>
              );
            })}
          </div>
          <div className="fallback"></div>
        </ul>
      </div>

      <form id="message-form">
        <input
          type="text"
          id="input-message"
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
        />
        <button className="send-message" onClick={sendMessage}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default Chat;
