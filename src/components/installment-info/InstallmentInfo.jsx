import installmentData from '../../dummy-data/installment-info-data.json'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './InstallmentInfo.scss';

// import required modules
import { Pagination } from "swiper";

import CarouselItem from './CarouselItem/CarouselItem';

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
          breakpoints={{
            1024: {
              slidesPerView: 5
            }
          }}
        >
        {
          installmentData.map(({ id, imgURL, title, text }) =>
            <SwiperSlide className='swiper-item' key={id}>
              <CarouselItem img={imgURL} title={title} text={text} />
            </SwiperSlide>
          )
        }
        </Swiper>
      </div>
    </div>
  )
}

export default InstallmentInfo