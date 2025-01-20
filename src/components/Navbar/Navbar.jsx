import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";
const Navbar = () => {
  const activeLink =
    "navList__link navList__link--active";
  const normalLink = "navList__link";
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <div className={css.navRow}>
          <NavLink
            to="/"
            className={css.logo}
          >
            <strong>
              LearningLingo
            </strong>
          </NavLink>
          <ul className={css.navList}>
            <li
              className={
                css.navListItem
              }
            >
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

export default Navbar;
