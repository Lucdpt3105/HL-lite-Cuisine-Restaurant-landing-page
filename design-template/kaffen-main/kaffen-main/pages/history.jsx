import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const History = () => {
  useEffect(() => {
    const bullets = document.querySelectorAll(
      ".kf-history-carousel .swiper-pagination-bullet"
    );
    const sliders = document.querySelectorAll(
      ".kf-history-carousel .swiper-slide"
    );
    bullets.forEach((bullet, bulletIndex) => {
      sliders.forEach((slider, sliderIndex) => {
        if (bulletIndex == sliderIndex) {
          bullet.innerHTML =
            slider.getElementsByClassName("date-value")[0].innerHTML;
        }
      });
    });
  }, []);

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/history_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Our History
          </h1>
        </div>
      </section>
      {/* Section Quote */}
      <section className="section kf-quote">
        <div className="container">
          <div className="kf-parallax-icon pi-4" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/quote_line_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-5" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/quote_line_icon2.png)" }}
            />
          </div>
          <div
            className="kf-quote-box element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et voluptatem sequi nesciunt
              neque porro quisqe
            </div>
            <div className="info">
              <div className="img">
                <img src="images/quote_img2.jpg" alt="image" />
              </div>
              <h5 className="name">Dante J. Castaneda</h5>
              <div className="subname">CEO &amp; Founder</div>
            </div>
          </div>
        </div>
      </section>
      {/* Section History */}
      <section className="section kf-history section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              OurKAFE History
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Something Know About Our History
            </h3>
          </div>
          <div className="kf-history-carousel">
            <Swiper {...sliderProps.kfHistory} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/history1.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                      KAFE restaurant was founded
                      </div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">1996</div>
                    <div className="label">25 January 1996</div>
                    <div className="date-value">1996</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/history2.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">We started cooking for you</div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">1998</div>
                    <div className="label">14 December 1998</div>
                    <div className="date-value">1998</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/history3.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">We got a Michelin star</div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">2004</div>
                    <div className="label">10 June 2004</div>
                    <div className="date-value">2004</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="kf-history-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/history4.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <div className="subname">
                        A new restaurant was opened in Paris
                      </div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">2008</div>
                    <div className="label">15 October 2008</div>
                    <div className="date-value">2008</div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination" />
              <div className="swiper-scrollbar" />
              <div className="swiper-button-prev">
                <i className="fas fa-angle-left" />
              </div>
              <div className="swiper-button-next">
                <i className="fas fa-angle-right" />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Section Brands */}
      <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    Decisions For Building Flexible Components DevTools Browser
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <a
              href="#"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Coffee House
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default History;
