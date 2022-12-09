import { v4 as uuidv4 } from 'uuid';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './InstallmentInfo.scss';

// import required modules
import { Pagination } from "swiper";

const InstallmentInfo = () => {
  return (
    <div className='installment-info'>
      <div className="container">
        <h1 className='installment-info__title'>
          Telefonlar va maishiy texnika muddatli to'lovga
        </h1>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="installment-swiper"
        >
          
        </Swiper>
      </div>
    </div>
  )
}

export default InstallmentInfo