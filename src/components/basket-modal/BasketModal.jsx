import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
//icons
import { CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
//SCSS
import "./BasketModal.scss";
//component
import ModalProductItem from "../modal-product-item/ModalProductItem";

const BasketModal = ({ isBasketActive, setBasketActive }) => {
  const allAddedProduct = useSelector((state) => state);
  console.log(allAddedProduct);
  return (
    <div style={isBasketActive ? { display: "block" } : { display: "none" }}>
      <div className="modal-backdrop"></div>
      <div className="basket-modal modal-content">
        <div className="modal-dialog">
          <div className="modal-site-inner">
            <button
              onClick={() => {
                setBasketActive(false);
              }}
              className="modal-close-btn"
            >
              <CgClose />
            </button>
            <div className="modal-content__inner">
              <div className="modal-content__title">Hozir xarid qilish</div>
              <div
                className="empty-basket"
                style={
                  allAddedProduct?.cart?.length === 0
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                <div className="empty-basket__icon">
                  <FiShoppingCart />
                </div>
                <div className="empty-basket__mini-title">
                  Savatchada hozir <br />
                  hech nima ho'q
                </div>
                <button
                  className="empty-basket__link"
                  onClick={() => {
                    setBasketActive(false);
                  }}
                >
                  Xarid qilish
                </button>
              </div>
              <div className="buy-now__content">
                {allAddedProduct?.cart.map((product) => (
                  <ModalProductItem
                    key={uuidv4()}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </div>
              <div className="basket-modal__bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
