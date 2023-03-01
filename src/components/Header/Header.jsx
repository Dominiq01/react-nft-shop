import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderBtn from "./HeaderBtn";

const Header = ({ onShow }) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img
            className={classes["logo-img"]}
            src={logo}
            alt="A logo with NFT text"
          />
          <h1>Open Luxuries</h1>
        </div>
        <HeaderBtn onShow={onShow} />
      </header>
    </>
  );
};

export default Header;
