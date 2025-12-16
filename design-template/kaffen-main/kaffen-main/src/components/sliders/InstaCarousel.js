import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const InstaCarousel = () => {
  return (
    <div
      className="section kf-insta-carousel element-anim-1 scroll-animate"
      data-animate="active"
    >
      <div className="container">
        <Swiper {...sliderProps.kfInstaCarousel} className="swiper-container">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal1.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal2.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal3.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal4.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal5.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal6.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal1.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal2.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal3.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal4.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal5.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img src="images/ins_gal6.jpg" alt="image" />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default InstaCarousel;
