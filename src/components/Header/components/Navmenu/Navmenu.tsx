import { Link } from "react-router-dom";
import { routes } from "../../../../utils/routes/config";

import "./Navmenu.scss";

const Navmenu = () => {
  return (
    <article className="header__site-title-nav site-navmenu">
      <Link to={routes.home} className="site-navmenu__logo">
        <div className="site-navmenu__title">
          Bussing <span>chess</span>
        </div>
      </Link>
      <nav id="navmenu" className="site-navmenu__nav">
        <ul className="site-navmenu__list">
          <li className="site-navmenu__link">
            <Link to={routes.game}>Игра</Link>
          </li>
          <li className="site-navmenu__link">
            <Link to={routes.puzzles}>Задачи</Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Navmenu;
