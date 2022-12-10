import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import linkData from "../../../dummy-data/site-links-data.json";
import "./MenuMobile.scss";

//icon
import { FiChevronDown } from "react-icons/fi";

const MenuMobile = () => {
  const [isCompanyActive, setCompanyActive] = useState(false);
  const [isInfoActive, setInfoActive] = useState(false);
  const [isUserHelpActive, setUserHelpActive] = useState(false);

  return (
    <div className="menu-mobile">
      <div className="accordion">
        <div className="accordion__item menu-wrap">
          <button
            className="accordion__trigger"
            onClick={() => {
              setCompanyActive(!isCompanyActive);
            }}
          >
            <span className="menu-wrap__title">Kompaniya</span>
            <span className="accordion__icon">
              <FiChevronDown />
            </span>
          </button>
          <div
            className={
              isCompanyActive
                ? "accordion__content accordion__content_active"
                : "accordion__content"
            }
          >
            {linkData[0].links.map((link) => (
              <Link className="menu-wrap__link" key={uuidv4()} to="/">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="accordion__item menu-wrap">
          <button
            className="accordion__trigger"
            onClick={() => {
              setInfoActive(!isInfoActive);
            }}
          >
            <span className="menu-wrap__title">Ma'lumot</span>
            <span className="accordion__icon">
              <FiChevronDown />
            </span>
          </button>
          <div
            className={
              isInfoActive
                ? "accordion__content accordion__content_active"
                : "accordion__content"
            }
          >
            {linkData[1].links.map((link) => (
              <Link className="menu-wrap__link" key={uuidv4()} to="/">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="accordion__item menu-wrap">
          <button
            className="accordion__trigger"
            onClick={() => {
              setUserHelpActive(!isUserHelpActive);
            }}
          >
            <span className="menu-wrap__title">Haridorga yordam</span>
            <span className="accordion__icon">
              <FiChevronDown />
            </span>
          </button>
          <div
            className={
              isUserHelpActive
                ? "accordion__content accordion__content_active"
                : "accordion__content"
            }
          >
            {linkData[2].links.map((link) => (
              <Link className="menu-wrap__link" key={uuidv4()} to="/">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
