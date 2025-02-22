import { NavLink } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import clsx from "clsx";

import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

import {
  openModal,
  selectIsOpenModal,
} from "../../redux/modal.jsx";

import { useAuth } from "../../hooks/user.auth.jsx";

import { removeUser } from "../../redux/auth/slice.jsx";

import Logo from "../Logo/Logo.jsx";
import sprite from "../../img/sprite.svg";

import css from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const isOpenModal = useSelector(
    selectIsOpenModal,
  );

  const modalType = useSelector(
    (state) => state.modal.modalType,
  );

  const isOpenModalRegister = () => {
    dispatch(openModal("register"));
  };

  const isOpenModalLogin = () => {
    dispatch(openModal("login"));
  };
  return (
    <>
      <header className={css.header}>
        <div
          className={
            css.containerHeader
          }
        >
          <Logo />
          <nav className={css.nav}>
            <NavLink
              className={({
                isActive,
              }) =>
                clsx(
                  css.link,
                  isActive &&
                    css.active,
                )
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({
                isActive,
              }) =>
                clsx(
                  css.link,
                  isActive &&
                    css.active,
                )
              }
              to="/teachers"
            >
              Teachers
            </NavLink>
            {isAuth && (
              <NavLink
                className={({
                  isActive,
                }) =>
                  clsx(
                    css.link,
                    isActive &&
                      css.active,
                  )
                }
                to="/favorites"
              >
                Favorites
              </NavLink>
            )}
          </nav>
          <div className={css.boxBtn}>
            {isAuth ? (
              <>
                <p
                  className={
                    css.textEmail
                  }
                >
                  Email&nbsp;:&nbsp;
                  <span
                    className={
                      css.textEmailSpan
                    }
                  >
                    {email}
                  </span>
                </p>
                <button
                  className={
                    css.btnLogin
                  }
                  type="button"
                  onClick={() =>
                    dispatch(
                      removeUser(),
                    )
                  }
                >
                  <svg
                    className={css.svg}
                    width={20}
                    height={20}
                  >
                    <use
                      href={`${sprite}#icon-log_out`}
                    ></use>
                  </svg>
                  <p>Logout</p>
                </button>
              </>
            ) : (
              <>
                <button
                  className={
                    css.btnLogin
                  }
                  type="button"
                  onClick={
                    isOpenModalLogin
                  }
                >
                  <svg
                    className={css.svg}
                    width={20}
                    height={20}
                  >
                    <use
                      href={`${sprite}#icon-log_in`}
                    ></use>
                  </svg>
                  <p>Log in</p>
                </button>
                <button
                  className={
                    css.btnRegister
                  }
                  type="button"
                  onClick={
                    isOpenModalRegister
                  }
                >
                  Registration
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      {isOpenModal &&
        modalType === "register" && (
          <RegisterModal />
        )}

      {isOpenModal &&
        modalType === "login" && (
          <LoginModal />
        )}
    </>
  );
};

export default Navigation;
