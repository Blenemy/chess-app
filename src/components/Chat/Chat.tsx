import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import "./Chat.scss";
// import { generateRandomName, nameList } from "../../constants/names";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  // const [users, setusers] = useState<any>([]);
  const socket = io(`wss://langcards.fun`, {
    transports: ["websocket", "polling"],
  });

  useEffect(() => {
    // const randomId = Math.round(Math.random() * 100);

    // socket.on("connect", () => {
    //   const userName = generateRandomName(nameList);
    //   socket.emit("username", userName);
    // });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  return (
    <section className="chat">
      <div className="chat__container">
        <article className="chat__group">
          <ul className="chat__list">
            {messages.map((msg, index) => (
              <li key={index} className="chat__message">
                {msg}
              </li>
            ))}
          </ul>
        </article>
        <article className="chat__enter-field">
          <input
            type="text"
            className="chat__input"
            placeholder="Text your message here"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                const message = e.currentTarget.value;
                sendMessage(message);
                e.currentTarget.value = "";
              }
            }}
          />
        </article>
        {/* <article className="chat__users">
          <ul className="chat__users-list">
            {users.map((user: string) => (
              <li className="chat__user-name" key={user}>
                {user}
              </li>
            ))}
          </ul>
        </article> */}
        {/* <button
          onClick={() => {
            socket.connect();
          }}
        >
          Connect
        </button>
        <button
          onClick={() => {
            socket.disconnect();
          }}
        >
          Disconnect
        </button> */}
      </div>
    </section>
  );
};

export default Chat;
