// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CarouselProducts.scss";

//icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// import required modules
import { Navigation } from "swiper";
//component
import ProductItem from "./product-item/ProductItem";

const CarouselProducts = ({ productData, id, status }) => {
  const zorNarx = { background: "#333", color: "#fec20f" };
  const xitSavdo = { background: "#ff3600", color: "#fff" };
  const other = { background: "#54c6eb", color: "#fff" };
  return (
    <div className="carousel-swiper-products">
      <Swiper

        slidesPerView={"auto"}
        navigation={{
          prevEl: `.button-prev${id}`,
          nextEl: `.button-next${id}`,
        }}
        breakpoints = {{
          1200: {
            slidesPerView: 5
          },
          1300: {
            slidesPerView: 6
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {productData.map(({ id, category: { image }, title, price }) => (
          <SwiperSlide className="product-card-item" key={id}>
            <div className="product-item-wrapper">
              {status && (
                <div className="product-status">
                  <div
                    style={
                      status === "Zo'r narx"
                        ? zorNarx
                        : status === "Xit savdo"
                        ? xitSavdo
                        : other
                    }
                    className="color-box"
                  >
                    {status}
                  </div>
                </div>
              )}
              <div className="product-item-bg"></div>
              <ProductItem id={id} image={image} title={title} price={price} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`button-prev${id} custom-btn-prev`}>
        <FiChevronLeft />
      </button>
      <button className={`button-next${id} custom-btn-next`}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CarouselProducts;
