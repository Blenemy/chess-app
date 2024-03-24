import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import "./ChatField.scss";

const ChatField = () => {
  const [messages, setMessages] = useState<string[]>([]);

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
    <div className="group-chat">
      <ul className="group-chat__list">
        {messages.map((msg, index) => (
          <li key={index} className="group-chat__message">
            {msg}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="group-chat__input"
        placeholder="Будьте вежливы в чате!"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.currentTarget.value) {
            const message = e.currentTarget.value;
            sendMessage(message);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default ChatField;
