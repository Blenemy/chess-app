import { Link } from "react-router-dom";
import { routes } from "../../utils/routes/config";

import "./Header.scss";

const Header = () => {
  return (
    <header id="header" className="header">
      <article className="header__site-title-nav">
        <Link to={routes.home} className="header__title">
          <div>
            Bussing <span>chess</span>
          </div>
        </Link>
        <nav id="" className="header__nav">
          <ul className="header__list">
            <li className="header__link">
              <Link to={routes.home}>Игра</Link>
            </li>
            <li className="header__link">
              <Link to={routes.home}>Задачи</Link>
            </li>
          </ul>
        </nav>
      </article>
      <article className="header__site-buttons"></article>
    </header>
  );
};

export default Header;
