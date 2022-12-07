import imagesData from "../../dummy-data/swiper-img-data.json";
import { v4 as uuidv4 } from 'uuid';
//icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./BannerDesktop.scss";

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

const BannerDesktop = () => {
  return (
    <div className="banner-desktop">
      <div className="banner-carousel">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
          pagination={{ clickable: true }}
          effect={"fade"}
          loop={true}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {
            imagesData[0].desktopImages.map(image =>
              <SwiperSlide key={uuidv4()}>
                <img src={image} alt="" />
              </SwiperSlide>  
            )}
        </Swiper>
        <button className="btn-next">
          <FiChevronRight className="chevron-icon" />
        </button>
        <button className="btn-prev">
          <FiChevronLeft className="chevron-icon" />
        </button>
      </div>
    </div>
  );
};

export default BannerDesktop;
