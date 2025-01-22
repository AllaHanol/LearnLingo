import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Logo from "../Logo/Logo";
const Navigation = () => {
  const activeLink =
    "navList__link navList__link--active";
  const normalLink = "navList__link";
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <div className={css.navRow}>
          <ul className={css.navList}>
            <li
              className={
                css.navListItem
              }
            >
              <Logo />
              <NavLink
                to="/"
                className={({
                  isActive,
                }) =>
                  isActive
                    ? activeLink
                    : normalLink
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/teachers"
                className={({
                  isActive,
                }) =>
                  isActive
                    ? activeLink
                    : normalLink
                }
              >
                Teachers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
