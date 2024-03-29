import { useState } from "react";
import cn from "classnames";

import { TTAb } from "./types/ChatTypes";

import ChatField from "./components/ChatField/ChatField";
import Notes from "./components/Notes/Notes";

import "./Chat.scss";

const tabs: TTAb[] = [
  { label: "Чат", component: <ChatField /> },
  { label: "Заметки", component: <Notes /> },
];

const Chat = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const currentTab = tabs[currentTabIndex].component;

  return (
    <section className="chat">
      <div className="chat__tabs">
        {tabs.map((tab, index) => (
          <div
            onClick={() => {
              setCurrentTabIndex(index);
            }}
            className={cn("chat__tab", {
              "active-tab": currentTabIndex === index,
              "not-active-tab": currentTabIndex !== index,
            })}
            key={tab.label}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="chat__content">{currentTab}</div>
    </section>
  );
};

export default Chat;
