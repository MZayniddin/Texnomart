import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderBottom.scss";

//icons
import { BsGrid } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const HeaderBottom = ({isHeaderFixed}) => {
  const [isCatalogActive, setIsCatalogActive] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="header-bottom" style={isHeaderFixed ? {display: "none"} : null}>
      <button
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
      <ul className="header-bottom-list">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link className="header-bottom__link" to="/">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderBottom;