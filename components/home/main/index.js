import styles from "./styles.module.scss";
import MainSwiper from "./swiper";
import { useSession } from "next-auth/react";
// import Menu from "./Menu";

//-----------------------------
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Navigation } from "swiper";
import Header from "./Header";
export default function Main() {
  const { data: session } = useSession();
  return (
    <div className={styles.main}>
      <Header />
      <MainSwiper />
    </div>
  );
}
