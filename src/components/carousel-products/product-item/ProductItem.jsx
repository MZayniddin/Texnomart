import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//icons 
import { BsCart3, BsCartCheck } from 'react-icons/bs';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { GiScales } from 'react-icons/gi';

import './ProductItem.scss';
const ProductItem = ({ id, image, title, price}) => {
  const dispatch = useDispatch();
  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }
  return (
    <div className="product-item-component">
      <div className="product-top">
        <Link className="product-link" to={`/product/detail/${id}`}>
          <img className="product-image" src={image} alt={title} />
        </Link>
      </div>
      <div className="product-bottom">
          <div className="product-bottom__left">
            <h3>
              <Link className="product-name" to={`/product/detail/${id}`}>{title}</Link>
            </h3>
          </div>
          <div className="product-bottom__right">
            <p><strong className="product-price">{price} $</strong></p>
            <div className="product-actions">
              <div className="product-card-allbtn">
                <button className="product-card-btn btn-full">
                  <span className="icon-after">
                    <BsCart3/>
                  </span>
                  <span className="icon-before">
                    <BsCartCheck/>
                  </span>
                  <span className="basket-btn-text" onClick={()=>{
                    dispatch({type: "ADD_TO_CART", product: product})
                  }}>Savatchaga</span>
                </button>
              </div>
              <div className="basket-count">
                <button className="product-full">
                  <HiMinusSm/>
                </button>
                <div className="count">0</div>
                <button className="">
                  <HiPlusSm/>
                </button>
              </div>
              <div className="action__right">
                <button className="card-like">
                  <FiHeart/>
                </button>
                <button className="card-installment">
                  <GiScales/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductItem