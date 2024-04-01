import { useRef, useState, useEffect } from "react";

import Dropdown from "../Dropdown/Dropdown";

import notification_bell from "../../../../assets/notification-bell.svg";

import "./SiteButtons.scss";

const SiteButtons = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        notifyButtonRef.current &&
        !notifyButtonRef.current.contains(target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowNotifications((prev) => !prev);
  };

  return (
    <article className="site-buttons">
      <button
        id="notify-toggle"
        className="site-buttons__button"
        onClick={handleNotificationsClick}
        ref={notifyButtonRef}
      >
        <img
          src={notification_bell}
          alt="notification-bell"
          className="site-buttons__notification-bell"
        />
      </button>
      {showNotifications && (
        <div ref={dropdownRef}>
          <Dropdown notifications={[]} />
        </div>
      )}
    </article>
  );
};

export default SiteButtons;
