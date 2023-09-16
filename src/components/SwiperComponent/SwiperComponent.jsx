'use client';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComponent = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={1}
      autoplay
      navigation          
    >
      {data.map(({ id, imageUrl }) => (
        <SwiperSlide key={id}>
          <Image style={{objectFit: 'contain'}} width={550} height={600} src={imageUrl} priority alt="Certificate" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;