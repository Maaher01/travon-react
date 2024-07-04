import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TripArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="space" id="trip-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>
              Top Destinations
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title">Popular Destinations</h2>
          </div>
          <div
            className="row slider-shadow ot-carousel"
            // data-slide-show={4}
            // data-lg-slide-show={3}
            // data-md-slide-show={2}
            // data-xs-slide-show={1}
            // data-arrows="true"
          >
            <Slider {...settings}>
              <div className="col-xl-3 col-lg-4 col-md-6 p-3">
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img
                      src="/src/assets/img/trip/dest_2_1.jpg"
                      alt="Trip image"
                    />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <a href="destination-details.html">Switzerland</a>
                    </h2>
                    <span className="trip-box__count">6+ Trips</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 p-3">
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img
                      src="/src/assets/img/trip/dest_2_2.jpg"
                      alt="Trip image"
                    />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <a href="destination-details.html">Barcelona</a>
                    </h2>
                    <span className="trip-box__count">8+ Trips</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 p-3">
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img
                      src="/src/assets/img/trip/dest_2_3.jpg"
                      alt="Trip image"
                    />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <a href="destination-details.html">Amsterdam</a>
                    </h2>
                    <span className="trip-box__count">6+ Trips</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 p-3">
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img
                      src="/src/assets/img/trip/dest_2_4.jpg"
                      alt="Trip image"
                    />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <a href="destination-details.html">Budapest City</a>
                    </h2>
                    <span className="trip-box__count">5+ Trips</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 p-3">
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img
                      src="/src/assets/img/trip/dest_2_5.jpg"
                      alt="Trip image"
                    />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <a href="destination-details.html">Maldives</a>
                    </h2>
                    <span className="trip-box__count">7+ Trips</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TripArea;
