import "./Dropdown.scss";

interface IDropdownProps {
  notifications: string[];
}

const Dropdown: React.FC<IDropdownProps> = ({ notifications }) => {
  return (
    <div id="notify-app" className="links dropdown">
      <div className="pager prev disabled data-icon-prev" data-icon="^"></div>
      {notifications.length > 0 ? (
        <div>notifications here</div>
      ) : (
        <div className="empty text notification-icon" data-icon="i">
          No notifications.
        </div>
      )}
    </div>
  );
};

export default Dropdown;
