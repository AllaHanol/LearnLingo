import css from "./Logo.module.css";
import flag from "./../../img/ukraine.png";
const Logo = () => {
  return (
    <div className={css.logo}>
      <img
        className={css.imgLogo}
        src={flag}
        alt="ukraine flag"
      />
      <p className={css.logoText}>
        LearnLingo
      </p>
    </div>
  );
};

export default Logo;
