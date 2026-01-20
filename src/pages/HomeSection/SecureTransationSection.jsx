import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SecureTransationSection = () => {
    return (
        <>
           <section className="secure-transactions-section">
      <div className="container-fluid">
        <div className="secure-transactions-row">

          <Swiper
            modules={[Autoplay]}
            className="secure-transactions-slider"
            loop={true}
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 4, spaceBetween: 40 },
              575: { slidesPerView: 5, spaceBetween: 40 },
              700: { slidesPerView: 6, spaceBetween: 40 },
              1200: { slidesPerView: 6, spaceBetween: 40 },
              1300: { slidesPerView: 6, spaceBetween: 60 },
              1400: { slidesPerView: 6, spaceBetween: 80 },
              1500: { slidesPerView: 6, spaceBetween: 100 },
              1600: { slidesPerView: 6, spaceBetween: 10 },
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="secure-transactions">
                  <h3>Secure Transactions</h3>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </section>
        </>
    )
}
export default SecureTransationSection;