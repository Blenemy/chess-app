import Navmenu from "./components/Navmenu/Navmenu";
import SiteButtons from "./components/SiteButtons/SiteButtons";

import "./Header.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <Navmenu />
      <SiteButtons />
    </header>
  );
};

export default Header;
