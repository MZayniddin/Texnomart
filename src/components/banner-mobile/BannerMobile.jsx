import imagesData from "../../dummy-data/swiper-img-data.json";
import { v4 as uuidv4 } from 'uuid';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import './BannerMobile.scss';

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";

const BannerMobile = () => {
  return (
    <div className='banner-mobile'>
      <div className="banner-carousel">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect={"fade"}
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {
            imagesData[1].mobileImages.map(image =>
              <SwiperSlide key={uuidv4()}>
                <img src={image} alt="" />
              </SwiperSlide>  
            )}
        </Swiper>
      </div>
    </div>
  )
}

export default BannerMobile;