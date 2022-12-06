import "./HeaderCenter.scss";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
//icons
import {
  FiMenu,
  FiChevronDown,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { GiScales } from "react-icons/gi";

//components
import HeaderNavMobile from "../header-nav-mobile/HeaderNavMobile";
//images
import logo from "../../../assets/images/texnomart-logo.svg";

const HeaderCenter = () => {
  const elSearchInput = useRef();

  const [isHeaderNavMobileActive, setIsHeaderNavMobileActive] = useState(false);
  const [isSearchCatalogActive, setIsSearchCatalogActive] = useState(false);
  const [activeSearchCatalog, setActiveSearchCatalog] =
    useState("Barcha mahsulotlar");
  const [serachIsValid, setSearchIsValid] = useState(false);
  useEffect(() => {
    console.log(elSearchInput.current.value);
  }, [serachIsValid]);
  return (
    <div className="header-center">
      <button
        className="header-center-catalog-bars"
        onClick={() => {
          setIsHeaderNavMobileActive(true);
        }}
      >
        <FiMenu />
      </button>
      {isHeaderNavMobileActive ? (
        <div
          onClick={() => {
            setIsHeaderNavMobileActive(false);
          }}
          className="full-overlay"
        ></div>
      ) : (
        <></>
      )}
      <HeaderNavMobile
        isHeaderNavMobileActive={isHeaderNavMobileActive}
        setIsHeaderNavMobileActive={setIsHeaderNavMobileActive}
      />
      <span className="header-center-logo">
        <Link to="/">
          <img src={logo} alt="Logo of site" />
        </Link>
      </span>
      <div className="header-search-all">
        <div className="header-search-top">
          <div className="header-search">
            <div
              className="header-search-catalog"
              onMouseLeave={() => {
                setIsSearchCatalogActive(false);
              }}
              onMouseOver={() => {
                setIsSearchCatalogActive(true);
              }}
            >
              <button className="search-catalog-btn">
                <span>{activeSearchCatalog}</span>
                <FiChevronDown className="down-icon" />
              </button>
              <div
                className="header-search-catalog-list scroll-dropdown"
                style={
                  isSearchCatalogActive
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <ul
                  onClick={(e) => {
                    setActiveSearchCatalog(e.target.textContent);
                    setIsSearchCatalogActive(false);
                  }}
                >
                  <li>
                    <Link to="/">Barcha ketogoriyalar</Link>
                  </li>
                  <li>
                    <Link to="/">Maishiy texnika</Link>
                  </li>
                  <li>
                    <Link to="/">Ofis jihozlari</Link>
                  </li>
                  <li>
                    <Link to="/">Oshxona uchun texnika</Link>
                  </li>
                  <li>
                    <Link to="/">Uy uchun idishlar</Link>
                  </li>
                  <li>
                    <Link to="/">Avtomobil uchun mahsulotlar</Link>
                  </li>
                  <li>
                    <Link to="/">Iqlim texnikasi</Link>
                  </li>
                  <li>
                    <Link to="/">Televizor va telekartalar</Link>
                  </li>
                  <li>
                    <Link to="/">Telefonlar va gadjetlar</Link>
                  </li>
                  <li>
                    <Link to="/">Kompyuter texnikasi</Link>
                  </li>
                  <li>
                    <Link to="/">Audiotexnika va Hi-Fi</Link>
                  </li>
                  <li>
                    <Link to="/">Bolalar uchun maxsulotlar</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-left">
              <label htmlFor="site-header-search">label</label>
              <input
                id="site-header-search"
                type="text"
                ref={elSearchInput}
                autoComplete="off"
                onInput={(e) => {
                  e.target.value.length === 0
                    ? setSearchIsValid(false)
                    : setSearchIsValid(true);
                }}
                onInvalid={() => {
                  setSearchIsValid(false);
                }}
              />
              <button
                className={
                  serachIsValid ? "clear-search" : "clear-search z-hidden"
                }
                onClick={() => {
                  elSearchInput.current.value = "";
                  setSearchIsValid(false);
                }}
              >
                {" "}
                <IoClose />
              </button>
            </div>
            <div className="header-search-btn-click">
              <button className="header-search-btn">
                <HiOutlineSearch className="header-search__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center__right">
        <Link className="right-action-btn" to="/">
          <div className="icon-svg">
            <BsBoxSeam />
          </div>
          <span className="right-action__title">Buyurtma holati</span>
        </Link>
        <button className="right-action-btn">
          <div className="icon-svg">
            <FiUser />
          </div>
          <span className="right-action__title">Kirish</span>
        </button>
        <Link className="right-action-btn" to="/">
          <div className="icon-svg">
            <GiScales />
          </div>
          <span className="right-action__title">Taqqoslash</span>
        </Link>
        <Link className="right-action-btn" to="/">
          <div className="icon-svg">
            <FiHeart />
          </div>
          <span className="right-action__title">Sevimlilar</span>
        </Link>
        <button className="right-action-btn" to="/">
          <div className="icon-svg">
            <FiShoppingCart />
          </div>
          <span className="right-action__title">Savatcha</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCenter;