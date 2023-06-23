import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";
import ReviewCard from "./reviewCard";
import { Rating } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
export default function Index() {
  const isMedium = useMediaQuery({ query: "(min-width:500px)" });
  return (
    <>
      <h2 className={styles.h2}>See what people think of our products</h2>
      <div className={styles.review}>
        <div className={styles.absolute}>
          <Card
            sx={{ minWidth: 250 }}
            style={{ boxShadow: "none", border: "none" }}
          >
            <div className={styles.absolute__card}>
              <p>Excellent</p>
              <Rating
                name="half-rating-read"
                defaultValue={3}
                precision={0.5}
                readOnly
                size="large"
                style={{ color: "green" }}
              />
              <h3>based on 419 reviews</h3>
            </div>
          </Card>
        </div>
        {isMedium && (
          <Swiper
            slidesPerView={0}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="my_Swiper"
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              800: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </>
  );
}
