const TopArea = () => {
  return (
    <div className="space bg-smoke overflow-hidden">
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
        <div className="row align-items-center">
          <div className="col-xl-3 mb-40 mb-xl-0">
            <div className="trip-details-slide ot-carousel" data-fade="true">
              <div>
                <div className="trip-card-details">
                  <span className="subtitle">Locations</span>
                  <h3 className="trip-title">
                    <a href="destination.html">Switzerland</a>
                  </h3>
                  <p className="trip-text">
                    Globally drive pandemic e-business via functionalized
                    e-business. Rapidiously simplify covalent leadership whereas
                    distributed results.
                  </p>
                </div>
              </div>
              <div>
                <div className="trip-card-details">
                  <span className="subtitle">Locations</span>
                  <h3 className="trip-title">
                    <a href="destination.html">Barcelona</a>
                  </h3>
                  <p className="trip-text">
                    Simplify Globally pandemic e-business via functionalized
                    e-business. Rapidiously covalent leadership whereas
                    distributed results drive.
                  </p>
                </div>
              </div>
              <div>
                <div className="trip-card-details">
                  <span className="subtitle">Locations</span>
                  <h3 className="trip-title">
                    <a href="destination.html">Amsterdam</a>
                  </h3>
                  <p className="trip-text">
                    Drive pandemic e-business via functionalized e-business.
                    Rapidiously simplify covalent leadership whereas distributed
                    results Globally.
                  </p>
                </div>
              </div>
              <div>
                <div className="trip-card-details">
                  <span className="subtitle">Locations</span>
                  <h3 className="trip-title">
                    <a href="destination.html">Budapest City</a>
                  </h3>
                  <p className="trip-text">
                    Pandemic Globally drive e-business via functionalized
                    e-business. Rapidiously simplify covalent leadership whereas
                    distributed results.
                  </p>
                </div>
              </div>
            </div>
            <div className="icon-box text-center text-xl-start">
              <button
                data-slick-prev=".trip-details-slide"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slick-next=".trip-details-slide"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="trip-tab" data-asnavfor=".trip-details-slide">
              <div className="trip-card active">
                <div className="trip-card__img">
                  <img src="assets/img/trip/dest_1_1.jpg" alt="Trip image" />
                </div>
                <div className="trip-card__content">
                  <div className="trip-card__location">
                    <i className="fas fa-location-dot" />
                  </div>
                  <h2 className="trip-card__title box-title">
                    <a href="destination-details.html">Switzerland</a>
                  </h2>
                  <span className="trip-card__count">6+ Trips</span>
                  <a href="destination.html" className="ot-btn">
                    Explore All
                  </a>
                </div>
              </div>
              <div className="trip-card">
                <div className="trip-card__img">
                  <img src="assets/img/trip/dest_1_2.jpg" alt="Trip image" />
                </div>
                <div className="trip-card__content">
                  <div className="trip-card__location">
                    <i className="fas fa-location-dot" />
                  </div>
                  <h2 className="trip-card__title box-title">
                    <a href="destination-details.html">Barcelona</a>
                  </h2>
                  <span className="trip-card__count">8+ Trips</span>
                  <a href="destination.html" className="ot-btn">
                    Explore All
                  </a>
                </div>
              </div>
              <div className="trip-card">
                <div className="trip-card__img">
                  <img src="assets/img/trip/dest_1_3.jpg" alt="Trip image" />
                </div>
                <div className="trip-card__content">
                  <div className="trip-card__location">
                    <i className="fas fa-location-dot" />
                  </div>
                  <h2 className="trip-card__title box-title">
                    <a href="destination-details.html">Amsterdam</a>
                  </h2>
                  <span className="trip-card__count">6+ Trips</span>
                  <a href="destination.html" className="ot-btn">
                    Explore All
                  </a>
                </div>
              </div>
              <div className="trip-card">
                <div className="trip-card__img">
                  <img src="assets/img/trip/dest_1_4.jpg" alt="Trip image" />
                </div>
                <div className="trip-card__content">
                  <div className="trip-card__location">
                    <i className="fas fa-location-dot" />
                  </div>
                  <h2 className="trip-card__title box-title">
                    <a href="destination-details.html">Budapest City</a>
                  </h2>
                  <span className="trip-card__count">5+ Trips</span>
                  <a href="destination.html" className="ot-btn">
                    Explore All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup jump-reverse d-none d-lg-block"
        data-top="2%"
        data-left="0%"
      >
        <img src="assets/img/shape/plane_shape_1.svg" alt="shapes" />
      </div>
      <div
        className="shape-mockup jump d-none d-xl-block"
        data-bottom="2%"
        data-right="0%"
      >
        <img src="assets/img/shape/plane_shape_2.svg" alt="shapes" />
      </div>
    </div>
  );
};

export default TopArea;
