import VideoPlayer from "@/src/components/VideoPlayer";
import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <section className="section kf-started-slider">
        <Swiper
          {...sliderProps.mainSliderSelector}
          className="swiper-container"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="kf-started-item">
                <div
                  className="slide js-parallax"
                  style={{ backgroundImage: "url(images/started_img7.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to The KAFE</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Reserve Your <br />
                      Table Today
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
                  style={{ backgroundImage: "url(images/started_img5.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to theKAFE</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Explore The <br />
                      Lobsters
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
                  style={{ backgroundImage: "url(images/started_img6.jpg)" }}
                />
                <div className="container">
                  <div className="description align-left element-anim-1">
                    <div className="subtitles">Welcome to theKAFE</div>
                    <h2 className="name text-anim-1" data-splitting="chars">
                      Premium <br />
                      MeatKAFE
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
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </Swiper>
      </section>
      {/* Section Category */}
      <section
        className="section kf-category"
        style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-category-items element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category1.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chiken Roll</h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category2.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Salad Bowl</h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/category3.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Lobsters</h5>
                  </div>
                </div>
                <div className="kf-category-item">
                  <div className="image kf-image-hover">
                    <Link href="menu-restaurant">
                      <img src="images/ins_gal1.jpg" alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <h5 className="name">Italian Burger</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Popular Categories
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Choose Your Best Food <br />
                  From Categories
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Sed ut perspiciatis unde omnis iste natus error accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa quae
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
                  aspernatur aut odit aut fugit sed quia con
                </p>
              </div>
              <Link
                href="menu-restaurant"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more Category</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section className="section kf-menu-classic section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Best Menus
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
            KAFE Popular Foods Menu
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(images/menu_logo.png)" }}
          >
            <div className="row">
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Chicken</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Salad Bowl</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$199</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Barista Pouring Syrup</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$3.5</div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Smoothie</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$55.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Gin Trifles</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$37.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Quesadillas</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Italian Burger</h5>
                    <div className="subname">
                      Tomatoes, sausage, ground, onions, cheese
                    </div>
                    <div className="price">$12.8</div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Chicken Burger</h5>
                    <div className="subname">
                      Ground chicken breast, mustard, paprika
                    </div>
                    <div className="price">$17.5</div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Sea Fish</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$79.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Okonomiyaki</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$99.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Benedict</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$68.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div>
                    <h5 className="name">Milk Cream</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$7.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Team */}
      <section className="section kf-team kf-section-transparent">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundColor: "#090c0f" }}
              >
                <div className="desc">
                  <h5 className="name">Anthony J. Bowman</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team1.jpg" alt="image" />
                  <div className="info">
                    <div className="label">bowmankf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundColor: "#090c0f" }}
              >
                <div className="desc">
                  <h5 className="name">Kenny V. Gonzalez</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team2.jpg" alt="image" />
                  <div className="info">
                    <div className="label">gonzalezkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundColor: "#090c0f" }}
              >
                <div className="desc">
                  <h5 className="name">Joseph M. Lawrence</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team3.jpg" alt="image" />
                  <div className="info">
                    <div className="label">lawrencekf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-team-item element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundColor: "#090c0f" }}
              >
                <div className="desc">
                  <h5 className="name">Charles K. Smith</h5>
                  <div className="subname">Senior Chefs</div>
                </div>
                <div className="image kf-image-hover">
                  <img src="images/team4.jpg" alt="image" />
                  <div className="info">
                    <div className="label">smithkf@gmail.com</div>
                    <div className="label">+012 (345) 678 99</div>
                  </div>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Reservation */}
      <section className="section kf-reservation kf-section-no-margin">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div
              className="image-left"
              style={{ backgroundImage: "url(images/reservation5.jpg)" }}
            />
            <div
              className="image-right"
              style={{ backgroundImage: "url(images/reservation6.jpg)" }}
            />
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Booking Table</div>
              <h3 className="kf-title">Make Your Reservation</h3>
            </div>
            <form id="rform" method="post">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Full Name" />
                    <i className="far fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <i className="fas fa-at" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="tel" name="tel" placeholder="Phone Number" />
                    <i className="fas fa-mobile-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <select name="persons">
                      <option>1 Person</option>
                      <option>2 Persons</option>
                      <option>3 Persons</option>
                      <option>4 Persons</option>
                    </select>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="date" name="date" />
                    <i className="far fa-calendar-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input type="text" name="time" placeholder="Time" />
                    <i className="far fa-clock" />{" "}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <a
                      href="#"
                      className="kf-btn"
                      onclick="$('#rform').submit(); return false;"
                    >
                      <span>booking table</span>
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section About-2 */}
      <section
        className="section kf-about-2"
        style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  AboutKAFE
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Have Nice &amp; Enjoyable <br />
                  Time With Our Foods
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore veritatis
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% ISO Certification</h5>
                      <div className="subname">
                        Sed ut perspiciatis unde omnis iste natus error
                        voluptate accusantium doloremque
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more us</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
              <div className="kf-services-items-2 row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/service_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Birthday Cakes</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/service_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Fresh Foods</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/service_icon3.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Skills Chefs</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    className="kf-services-item-2 element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <img src="images/service_icon4.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Organic Juice</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Video */}
      <div className="section kf-video kf-video-full">
        <VideoPlayer
          videoBg={"images/video_bg.jpg"}
          extraClass={"kf-parallax"}
        />
      </div>
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-gem" />
                </div>
                <div className="num">256+</div>
                <div className="desc">
                  <h5 className="name">Premium Clients</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-user-tie" />
                </div>
                <div className="num">36+</div>
                <div className="desc">
                  <h5 className="name">Professional Chefs</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-trophy" />
                </div>
                <div className="num">753+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="lar la-grin-stars" />
                </div>
                <div className="num">100+</div>
                <div className="desc">
                  <h5 className="name">5 Star Reviews</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
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
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      <InstaCarousel />
      {/* Section Brands */}
      <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
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
    </Layouts>
  );
};
export default Index;
