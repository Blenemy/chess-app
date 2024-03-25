import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import cn from "classnames";

import { TChatPreset } from "../../types/ChatTypes";

import "./ChatField.scss";

const CHAT_PRESETS: TChatPreset[] = [
  {
    ["data-title"]: "Hello!",
    message: "Hi",
  },
  {
    ["data-title"]: "Good luck!",
    message: "GL",
  },
  {
    ["data-title"]: "Have fun!",
    message: "hf",
  },
  {
    ["data-title"]: "You too!",
    message: "u2",
  },
];

const ChatField = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [disabledPresets, setDisabledPresets] = useState<string[]>([]);

  const socket = io(`wss://langcards.fun`, {
    transports: ["websocket", "polling"],
  });

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const isDisabledPreset = (preset: string) => {
    return disabledPresets.some((el) => el === preset);
  };

  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentMessage) {
      sendMessage(currentMessage);
      setCurrentMessage("");
    }
  };

  const handlePresetClick = (preset: TChatPreset) => () => {
    sendMessage(preset["data-title"]);
    setDisabledPresets((prev) => [...prev, preset.message]);
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
        onKeyDown={handleOnEnter}
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <div className="group-chat__presets">
        {CHAT_PRESETS.map((preset) => (
          <article
            key={preset["data-title"]}
            className={cn("group-chat__title", {
              "disabled-preset": isDisabledPreset(preset.message),
            })}
            data-title={preset["data-title"]}
            onClick={handlePresetClick(preset)}
          >
            {preset.message}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ChatField;
