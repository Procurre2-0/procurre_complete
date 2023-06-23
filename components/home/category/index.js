import styles from "./styles.module.scss";
import axios from "axios";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import CategorySwiper from "./Card";
export default function Categories(categories) {
  console.log("ppppp",categories);
  return (
    <div className={styles.categories}>
      <div className={styles.categories__header}>
        <h1>CATEGORIES</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="categories__swiper"
        breakpoints={{
          440: {
            slidesPerView: 2,
          },
          735: {
            slidesPerView: 3,
          },
          1090: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        <div className={styles.categories__list}>
          {categories.categories.map((category, i) => (
            <SwiperSlide key={i}>
              <CategorySwiper category={category} key={i} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}