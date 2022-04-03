import socketIOClient from "socket.io-client";
import { useEffect, useState, useRef } from "react";
const host = "http://localhost:3080"; //backend
const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [inbox, setInbox] = useState<string[]>([]);
  const [id, setId] = useState<string>();
  const socketRef = useRef();

//! doan nay co van de
//   useEffect(() => {
//     socketRef.current = socketIOClient(host);
//     socketRef.current.on("message", (msg: string) => {
//       setInbox((inbox) => [...inbox, msg]);
//     });
//     socketRef.current.on("id", (id: string) => {
//       setId(id);
//     });
//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, []);

  return (
    <div className="chat-container">
      <div className="inbox">
        <div className="inbox-people">
          <h4>Active users</h4>
        </div>
        <ul className="inbox-messages">
          <div className="messages-history"></div>
          <div className="fallback"></div>
        </ul>
      </div>

      <form id="message-form">
        <input
          type="text"
          id="input-message"
          placeholder="Type a message"
        />
        <button className="send-message" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default Chat;
