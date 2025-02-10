// Correct import paths
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"; // Optional: If using EffectCoverflow

import ISpaceOne from "./_assets/space_first.jpg";
import ISpaceLast from "./_assets/space_last.jpg";
import ISpaceSecond from "./_assets/space_second.jpg";

// Your slides array
const slides = [ISpaceOne, ISpaceSecond, ISpaceLast];

import "./index.module.scss";

export const Carousel = () => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1} // Adjust slidesPerView as needed
      effect="coverflow" // Use coverflow effect
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide}
          style={{ backgroundImage: `url(${slide})`, backgroundSize: "cover" }}
        />
      ))}
    </Swiper>
  );
};
