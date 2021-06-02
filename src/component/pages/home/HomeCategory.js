import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cart1 from "../../../assest/images/img/categories/cat-1.jpg";
import Cart2 from "../../../assest/images/img/categories/cat-2.jpg";
import Cart3 from "../../../assest/images/img/categories/cat-3.jpg";
import Cart4 from "../../../assest/images/img/categories/cat-3.jpg";
import Cart5 from "../../../assest/images/img/categories/cat-3.jpg";

const HomeCategory = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },

    LargeDesktop: {
      breakpoint: { max: 2999, min: 1801 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 1800, min: 1101 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className=" categories__slider basic-carousel">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={true}
              showDots={true}
              renderDotsOutside
              infinite={true}
              autoPlay
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 2s"
              transitionDuration={5000}
              s // want to know still about following props
              deviceType={props.deviceType}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-1.jpg"
                  style={{ backgroundImage: `url(${Cart1})` }}
                >
                  <h5>
                    <a href="void(0)">Fresh Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-2.jpg"
                  style={{ backgroundImage: `url(${Cart2})` }}
                >
                  <h5>
                    <a href="void(0)">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10 ">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-3.jpg"
                  style={{ backgroundImage: `url(${Cart3})` }}
                >
                  <h5>
                    <a href="void(0)">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-4.jpg"
                  style={{ backgroundImage: `url(${Cart4})` }}
                >
                  <h5>
                    <a href="void(0)">drink fruits</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-5.jpg"
                  style={{ backgroundImage: `url(${Cart5})` }}
                >
                  <h5>
                    <a href="void(0)">drink fruits</a>
                  </h5>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
