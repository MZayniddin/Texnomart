//icons
import { CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
//SCSS
import "./BasketModal.scss";
//component
import ModalProductItem from "../modal-product-item/ModalProductItem";

const BasketModal = () => {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="basket-modal modal-content">
        <div className="modal-dialog">
          <div className="modal-site-inner">
            <button className="modal-close-btn">
              <CgClose />
            </button>
            <div className="modal-content__inner">
              <div className="modal-content__title">Hozir xarid qilish</div>
              <div className="empty-basket">
                <div className="empty-basket__icon">
                  <FiShoppingCart />
                </div>
                <div className="empty-basket__mini-title">
                  Savatchada hozir <br />
                  hech nima ho'q
                </div>
              </div>
              <div className="buy-now__content">
                <ModalProductItem/>
              </div>
              <div className="basket-modal__bottom">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketModal;
