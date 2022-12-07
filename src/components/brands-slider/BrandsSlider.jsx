import brandsData from "../../dummy-data/brands-data.json";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BrandsSlider.scss";

//icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// import required modules
import { Navigation } from "swiper";

const BrandsSlider = () => {
  return (
    <div className="brands-slider">
      <div className="container">
        <div className="brands-wrapper">
          <Swiper
            slidesPerView={8}
            spaceBetween={20}
            navigation={{
              prevEl: ".swiper-brand-prev",
              nextEl: ".swiper-brand-next",
            }}
            modules={[Navigation]}
            className="swiper-container"
          >
            {brandsData.map((brand) => (
              <SwiperSlide className="brand-item" key={uuidv4()}>
                <Link to="/">
                  <img src={brand} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-brand-prev">
            <FiChevronLeft />
          </button>
          <button className="swiper-brand-next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
