import catalogData from "../../dummy-data/special-catalog.json";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CatalogSlider.scss";

//icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { BsGrid } from 'react-icons/bs';
// import required modules
import { Navigation } from "swiper";

const CatalogSlider = () => {
  return (
    <div className="catalog-slider">
      <div className="container">
        <div className="special-catalog">
          <div className="product-card-title">
            <h2 style={{ fontWeight: "500", fontSize: "20px" }}>
              Ommabop kategoriyalar
            </h2>
          </div>
          <div className="swiper-wrapper">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                prevEl: ".special-catalog-prev",
                nextEl: ".special-catalog-next",
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 16
                },
                1200: {
                  slidesPerView: 5
                }
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
            {
              catalogData.map(({imgURL, title}) =>
                <SwiperSlide className="swiper-catalog-item" key={uuidv4()}>
                  <Link className="special-catalog__link" to="/">
                    <div className="catalog-image">
                      <img src={imgURL} alt="" />
                    </div>
                    <div className="special-catalog__title">
                      {title}
                    </div>
                  </Link>
                </SwiperSlide>
              )
            }
            </Swiper>
            <button className="special-catalog-prev custom-btn-prev">
              <FiChevronLeft />
            </button>
            <button className="special-catalog-next custom-btn-next">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <button className="btn-catalog-home">
            <BsGrid/>
            <span>Maxsulotlar katalogi</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogSlider;
