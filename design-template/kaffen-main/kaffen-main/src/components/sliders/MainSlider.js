import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n6.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to theKAFE</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The London <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link href="menu-restaurant" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n5.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to theKAFE</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Paris
                  <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link href="menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n3.jpg)" }}
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">Welcome to theKAFE</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Great Coffee <br />
                  Good Vibes
                </h2>
                <div className="kf-bts">
                  <Link href="menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link href="reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;
