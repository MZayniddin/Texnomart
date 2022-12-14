import { Link } from "react-router-dom";

//icons
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";

import "./ModalProductItem.scss";

const ModalProductItem = ({ id, image, title, price }) => {
  return (
    <div className="modal-product__item">
      <div className="product__left">
        <Link to="/">
          <div className="product__img">
            <img src={image} alt="" />
          </div>
        </Link>
        <div className="product__info">
          {/* lasdkj */}
          <p>{title}</p>
          <strong>{price}$</strong>
        </div>
      </div>
      <div className="product__right">
        <div className="product__count">
          <button className="count-btn product-full">
            <HiMinusSm />
          </button>
          <span className="count-value"> 1 </span>
          <button className="count-btn">
            <HiPlusSm />
          </button>
        </div>
        <div className="product__minbtn">
          <button className="product-favorite">
            <FiHeart className="product__icon" />
          </button>
          <button className="product__delete remove-from-cart">
            <HiOutlineTrash className="product__icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProductItem;
