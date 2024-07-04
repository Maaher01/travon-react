import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DealArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className="space-top"
        data-bg-src="/src/assets/img/bg/deal_bg_1.jpg"
      >
        <div className="container">
          <div className="row text-center text-lg-start justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg-8 mb-n2 mb-lg-0">
              <div className="title-area">
                <span className="sub-title justify-content-center justify-content-lg-start">
                  <span className="shape left d-inline-block d-lg-none">
                    <span className="dots" />
                  </span>
                  Deals &amp; Offers
                  <span className="shape right">
                    <span className="dots" />
                  </span>
                </span>
                <h2 className="sec-title text-white">
                  Last Minute Amazing Deals
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <div className="icon-box style2">
                  <button
                    data-slick-prev="#dealSlide1"
                    className="slick-arrow default"
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button
                    data-slick-next="#dealSlide1"
                    className="slick-arrow default"
                  >
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row gx-0 ot-carousel"
          id="dealSlide1"
          //   data-slide-show={4}
          //   data-ml-slide-show={3}
          //   data-lg-slide-show={3}
          //   data-md-slide-show={2}
          //   data-sm-slide-show={1}
        >
          <Slider {...settings}>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tour-offer">
                <div className="tour-offer__img">
                  <img
                    src="/src/assets/img/trip/tour_2_1.jpg"
                    alt="Tour Image"
                  />
                  <span className="tour-offer__tag">40% Off</span>
                </div>
                <div className="tour-offer__content">
                  <div className="tour-offer__top">
                    <div>
                      <h3 className="tour-offer__title box-title">
                        <a href="tour-details.html">Maldivs Beach</a>
                      </h3>
                      <span className="tour-offer__subtitle">
                        Exploring Maldivs
                      </span>
                    </div>
                    <span className="tour-offer__price">
                      <span className="price">$250</span>
                    </span>
                  </div>
                  <p className="tour-offer__text">
                    Professionally optimize mission-critical networks rather
                    than resource maximizing ideas globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tour-offer">
                <div className="tour-offer__img">
                  <img
                    src="/src/assets/img/trip/tour_2_2.jpg"
                    alt="Tour Image"
                  />
                  <span className="tour-offer__tag">30% Off</span>
                </div>
                <div className="tour-offer__content">
                  <div className="tour-offer__top">
                    <div>
                      <h3 className="tour-offer__title box-title">
                        <a href="tour-details.html">Seychelles</a>
                      </h3>
                      <span className="tour-offer__subtitle">
                        Enjoy Seychelles
                      </span>
                    </div>
                    <span className="tour-offer__price">
                      <span className="price">$150</span>
                    </span>
                  </div>
                  <p className="tour-offer__text">
                    Professionally optimize mission-critical networks rather
                    than resource maximizing ideas globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tour-offer">
                <div className="tour-offer__img">
                  <img
                    src="/src/assets/img/trip/tour_2_3.jpg"
                    alt="Tour Image"
                  />
                  <span className="tour-offer__tag">25% Off</span>
                </div>
                <div className="tour-offer__content">
                  <div className="tour-offer__top">
                    <div>
                      <h3 className="tour-offer__title box-title">
                        <a href="tour-details.html">Adventure Mountain</a>
                      </h3>
                      <span className="tour-offer__subtitle">
                        Mountain Iceland
                      </span>
                    </div>
                    <span className="tour-offer__price">
                      <span className="price">$250</span>
                    </span>
                  </div>
                  <p className="tour-offer__text">
                    Professionally optimize mission-critical networks rather
                    than resource maximizing ideas globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tour-offer">
                <div className="tour-offer__img">
                  <img
                    src="/src/assets/img/trip/tour_2_4.jpg"
                    alt="Tour Image"
                  />
                  <span className="tour-offer__tag">30% Off</span>
                </div>
                <div className="tour-offer__content">
                  <div className="tour-offer__top">
                    <div>
                      <h3 className="tour-offer__title box-title">
                        <a href="tour-details.html">Adventures</a>
                      </h3>
                      <span className="tour-offer__subtitle">
                        Explore Adventures
                      </span>
                    </div>
                    <span className="tour-offer__price">
                      <span className="price">$350</span>
                    </span>
                  </div>
                  <p className="tour-offer__text">
                    Professionally optimize mission-critical networks rather
                    than resource maximizing ideas globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tour-offer">
                <div className="tour-offer__img">
                  <img
                    src="/src/assets/img/trip/tour_2_5.jpg"
                    alt="Tour Image"
                  />
                  <span className="tour-offer__tag">45% Off</span>
                </div>
                <div className="tour-offer__content">
                  <div className="tour-offer__top">
                    <div>
                      <h3 className="tour-offer__title box-title">
                        <a href="tour-details.html">Night City</a>
                      </h3>
                      <span className="tour-offer__subtitle">
                        City Night Beauty
                      </span>
                    </div>
                    <span className="tour-offer__price">
                      <span className="price">$200</span>
                    </span>
                  </div>
                  <p className="tour-offer__text">
                    Professionally optimize mission-critical networks rather
                    than resource maximizing ideas globally.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default DealArea;
