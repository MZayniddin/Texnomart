import "./HeaderCenter.scss";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import searchCatalogData from "../../../dummy-data/search-catalog-data.json";
//icons
import { FiMenu, FiChevronDown, FiUser, FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import { BsBoxSeam, BsGrid, BsCart3 } from "react-icons/bs";
import { GiScales } from "react-icons/gi";

//components
import HeaderNavMobile from "../header-nav-mobile/HeaderNavMobile";
//images
import logo from "../../../assets/images/texnomart-logo.svg";

const HeaderCenter = ({
  isHeaderFixed,
  setIsCatalogActive,
  isCatalogActive,
  setBasketActive,
  setMobSidebarActive,
}) => {
  const elSearchInput = useRef();
  const [isHeaderNavMobileActive, setIsHeaderNavMobileActive] = useState(false);
  const [isSearchCatalogActive, setIsSearchCatalogActive] = useState(false);
  const [activeSearchCatalog, setActiveSearchCatalog] = useState([
    0,
    "Barcha ketegoriyalar",
  ]);
  const [searchIsValid, setSearchIsValid] = useState(false);
  const basketProducts = useSelector((state) => state);
  return (
    <div
      className="header-center"
      style={isHeaderFixed ? { padding: "12px 0px" } : null}
    >
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
        setMobSidebarActive={setMobSidebarActive}
      />
      <span className="header-center-logo">
        <Link to="/">
          <img src={logo} alt="Logo of site" />
        </Link>
      </span>
      <button
        style={isHeaderFixed ? { display: "flex" } : { display: "none" }}
        className="header-catalog-btn"
        onClick={() => {
          setIsCatalogActive(!isCatalogActive);
        }}
      >
        <span
          style={isCatalogActive ? { display: "none" } : { display: "block" }}
        >
          <BsGrid className="catalog__icon" />
        </span>
        <span
          style={isCatalogActive ? { display: "block" } : { display: "none" }}
        >
          <IoClose className="catalog__icon" />
        </span>
        <span className="catalog__text">Katalog</span>
      </button>
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
                <span>{activeSearchCatalog[1]}</span>
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
                    setIsSearchCatalogActive(false);
                  }}
                >
                  {searchCatalogData.map((option, index) => (
                    <li key={uuidv4()}>
                      <Link
                        onClick={(e) => {
                          setActiveSearchCatalog([index, e.target.textContent]);
                        }}
                        style={
                          activeSearchCatalog[0] === index
                            ? { background: "rgba(251,193,0,.2)" }
                            : null
                        }
                        to="/"
                      >
                        {option}
                      </Link>
                    </li>
                  ))}
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
                  searchIsValid ? "clear-search" : "clear-search z-hidden"
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
          <div
            onClick={() => {
              setBasketActive(true);
            }}
            className="icon-svg"
          >
            <BsCart3 />
            {basketProducts?.cart?.length > 0 ? (
              <span className="header-basket-count">
                {basketProducts?.cart?.length}
              </span>
            ) : (
              <></>
            )}
          </div>
          <span className="right-action__title">Savatcha</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCenter;
