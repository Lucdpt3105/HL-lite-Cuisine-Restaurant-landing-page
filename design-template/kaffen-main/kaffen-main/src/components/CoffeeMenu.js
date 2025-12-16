import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-menu kf-menu-tabs">
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
          KAFE Coffee Menu
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("fast-food")}
            data-href="fast-food"
          >
            Fast food
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-coffee")}
            data-href="hot-coffee"
          >
            Hot coffee
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("dessert")}
            data-href="dessert"
          >
            Dessert
          </a>
        </div>
        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Americano</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$4.9</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$4.9</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu3.jpg" className="has-popup-image">
                    <img src="images/menu3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Barista Pouring Syrup</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$3.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu4.jpg" className="has-popup-image">
                    <img src="images/menu4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Late</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$6.0</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu5.jpg" className="has-popup-image">
                    <img src="images/menu5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino Arabica</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$2.8</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu6.jpg" className="has-popup-image">
                    <img src="images/menu6.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Milk Cream</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$7.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/ins_gal1.jpg" className="has-popup-image">
                    <img src="images/ins_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Italian Burger</h5>
                  <div className="subname">
                    Tomatoes, italian sausage, ground, onions, cheese
                  </div>
                  <div className="price">$12.8</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/ins_gal3.jpg" className="has-popup-image">
                    <img src="images/ins_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Chicken Burger</h5>
                  <div className="subname">
                    Ground chicken breast, mustard, paprika, onion
                  </div>
                  <div className="price">$17.5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeeMenu;
