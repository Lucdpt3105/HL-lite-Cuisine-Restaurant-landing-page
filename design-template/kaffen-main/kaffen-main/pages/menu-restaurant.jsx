import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const MenuRestaurant = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/menu_rest_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Restaurant Menu
          </h1>
        </div>
      </section>
      {/* Section Menu-2 */}
      <section className="section kf-menu">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Best of
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
            KAFE Lunch Menu
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r1.jpg" className="has-popup-image">
                      <img src="images/menu_r1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chicken</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r2.jpg" className="has-popup-image">
                      <img src="images/menu_r2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Salad Bowl</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$199</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r3.jpg" className="has-popup-image">
                      <img src="images/menu_r3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Smoothie</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$55.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r4.jpg" className="has-popup-image">
                      <img src="images/menu_r4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Gin Trifles</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$37.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="kf-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l1.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l2.jpg)" }}
              />
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r5.jpg" className="has-popup-image">
                      <img src="images/menu_r5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Quesadillas</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r6.jpg" className="has-popup-image">
                      <img src="images/menu_r6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Sea Fish</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$79.0</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r7.jpg" className="has-popup-image">
                      <img src="images/menu_r7.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Okonomiyaki</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$99.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r8.jpg" className="has-popup-image">
                      <img src="images/menu_r8.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Benedict</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$68.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg3.jpg)" }}
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
      {/* Section Menu-2 */}
      <section className="section kf-menu">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Best of
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
            KAFE Dinner Menu
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r1.jpg" className="has-popup-image">
                      <img src="images/menu_r1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chicken</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r2.jpg" className="has-popup-image">
                      <img src="images/menu_r2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Salad Bowl</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$199</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r3.jpg" className="has-popup-image">
                      <img src="images/menu_r3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Smoothie</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$55.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r4.jpg" className="has-popup-image">
                      <img src="images/menu_r4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Gin Trifles</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$37.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="kf-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l3.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l4.jpg)" }}
              />
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r5.jpg" className="has-popup-image">
                      <img src="images/menu_r5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Quesadillas</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$4.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r6.jpg" className="has-popup-image">
                      <img src="images/menu_r6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Sea Fish</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$79.0</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r7.jpg" className="has-popup-image">
                      <img src="images/menu_r7.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Okonomiyaki</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$99.9</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r8.jpg" className="has-popup-image">
                      <img src="images/menu_r8.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Benedict</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                    <div className="price">
                      <span>$68.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      <InstaCarousel />
    </Layouts>
  );
};
export default MenuRestaurant;
