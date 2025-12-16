import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";

const Contacts = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/menu_reservation_inner_bg.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Us
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Main Location</h5>
                  <ul>
                    <li>
                      55 Main Street, 2nd Block, <br />
                      3rd Floor, New York
                    </li>
                    <li>
                      394 Main Street, 2nd Block, <br />
                      3rd Floor, USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon2.png" alt="" />*/}
                  <i className="las la-envelope-open-text" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                      supportKAFE@gmail.com <br />
                      www.KAFEinfo.net
                    </li>
                    <li>
                      supportKAFE@gmail.com <br />
                      www.KAFEinfo.net
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li>
                      +012 (345) 678 99 <br />
                      123456780
                    </li>
                    <li>
                      +012 (345) 678 99 <br />
                      123456780
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Contact Us</div>
              <h3 className="kf-title">Send Us Message</h3>
            </div>
            <form id="cform" method="post">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Full Name" />
                    <i className="far fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <i className="fas fa-at" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="tel" name="tel" placeholder="Phone Number" />
                    <i className="fas fa-mobile-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <a
                      href="#"
                      className="kf-btn"
                      onclick="$('#cform').submit(); return false;"
                    >
                      <span>Send us message</span>
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
export default Contacts;
