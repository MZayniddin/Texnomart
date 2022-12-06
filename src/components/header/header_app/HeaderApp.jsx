import "./HeaderApp.scss";

//icons
import { IoClose } from "react-icons/io5";

//images
import goldLogo from "../../../assets/images/logo-gold.svg";
import logo from "../../../assets/images/texnomart-logo.svg";

const HeaderApp = () => {
  return (
    <div className="header-app">
      <div className="header-app__left">
        <button
          onClick={(e) => {
            e.target.closest("div").parentElement.style.display = "none";
          }}
        >
          <IoClose className="header-app__close-icon" />
        </button>
        <img src={goldLogo} className="gold-logo" alt="Site gold logo" />
        <div>
          <div className="header-app__text">Приложение</div>
          <img src={logo} alt="Logo of site" width={107} height={23} />
        </div>
      </div>
      <a
        className="app-link"
        href="https://play.google.com/store/apps/details?id=com.texnomart.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        УСТАНОВИТЬ
      </a>
    </div>
  );
};

export default HeaderApp;
