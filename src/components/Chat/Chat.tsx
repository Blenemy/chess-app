import { useState } from "react";
import cn from "classnames";

import ChatField from "./components/ChatField/ChatField";
import Notes from "./components/Notes/Notes";

import "./Chat.scss";

const tabs = [
  { label: "Chat", component: <ChatField /> },
  { label: "Notes", component: <Notes /> },
];

const Chat = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const currentTab = tabs[currentTabIndex];

  return (
    <section className="chat">
      <div className="chat__tabs">
        <div
          onClick={() => {
            setCurrentTabIndex(0);
          }}
          className={cn("chat__tab", {
            "active-tab": currentTabIndex === 0,
            "not-active-tab": currentTabIndex !== 0,
          })}
        >
          Чат
        </div>
        <div
          onClick={() => {
            setCurrentTabIndex(1);
          }}
          className={cn("chat__tab", {
            "active-tab": currentTabIndex === 1,
            "not-active-tab": currentTabIndex !== 1,
          })}
        >
          Заметки
        </div>
      </div>
      <div className="chat__content">{currentTab.component}</div>
    </section>
  );
};

export default Chat;
