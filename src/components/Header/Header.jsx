import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div
        className={css.headerWrapper}
      >
        <h1 className={css.headerTitle}>
          Teachers App
        </h1>
      </div>
    </header>
  );
};

export default Header;
