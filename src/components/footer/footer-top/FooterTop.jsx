import "./FooterTop.scss";
import { Link } from "react-router-dom";

//icons
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

//images
import playLogo from '../../../assets/images/playmarket-logo.svg'

const FooterTop = () => {
  return (
    <div className="footer__top">
      <div className="footer__left">
        <div className="footer__content">
          <div
            className="text"
            style={{ fontSize: "13px", marginBottom: "14px" }}
          >
            Savolingiz bormi? Qo'ng'iroq qiling
          </div>
          <a className="number" href="tel:+998712099944">
            +998 71 209 99 44
          </a>
        </div>
        <ul className="footer__social">
          <li className="social__item">
            <a
              href="https://www.facebook.com/texnomart"
              rel="noreferrer"
              target="_blank"
              className="social__link"
            >
              <FaFacebookF/>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://t.me/texnomart"
              rel="noreferrer"
              target="_blank"
              className="social__link"
            >
              <FaTelegramPlane/>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.instagram.com/texnomart/"
              rel="noreferrer"
              target="_blank"
              className="social__link"
            >
              <FaInstagram/>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.youtube.com/c/Texnomart"
              rel="noreferrer"
              target="_blank"
              className="social__link"
            >
              <FaYoutube/>
            </a>
          </li>
        </ul>
        <a className="footer__play" href="https://play.google.com/store/apps/details?id=com.texnomart.app" rel="noreferrer" target="_blank">
          <img src={playLogo} alt="" />
        </a>
        <div className="footer__address">
          <Link to="/">Do`konlar manzillari <span>Toshkent</span></Link>
        </div>
        <a className="telegram-bot" href="https://t.me/Texnomart_retail_bot" rel="noreferrer" target="_blank" >
          <FaTelegramPlane className="telegram-bot__icon" /> <span>Bonusingizni bilib oling</span>
        </a>
      </div>
      <div className="footer__right"></div>
    </div>
  );
};

export default FooterTop;
