import "./HomeProducts.scss";
import { Link } from "react-router-dom";

//icons
import { FiArrowRight } from "react-icons/fi";

const HomeProducts = ({ title, seemore, children }) => {
  return (
    <div className="home-products">
      <div className="container">
        <div className="home-products__title product-card-title">
          <h2>{title}</h2>
          {seemore ? (
            <Link className="home-products__link-seemore" to="/">
              Barchasini ko'rish <FiArrowRight className="seemore-icon" />
            </Link>
          ) : (
            <></>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default HomeProducts;