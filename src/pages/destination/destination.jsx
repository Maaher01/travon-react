import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const Destination = () => {
  return (
    <>
      <BreadCumb location={"Destination"} />

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="dest-sort-bar">
            <div className="row gy-3 align-items-center justify-content-between">
              <div className="col-sm-auto">
                <p className="result">Showing 8 out of 24 destination</p>
              </div>
              <div className="col-sm-auto">
                <form className="tour-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby form-select nice-select"
                    aria-label="Tour order"
                  >
                    <option
                      value="menu_order"
                      disabled="disabled"
                      selected="selected"
                    >
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img
                    src="/src/assets/img/trip/dest_2_6.jpg"
                    alt="Trip image"
                  />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot" />
                    <a href="destination-details.html">Indonesia</a>
                  </h2>
                  <span className="trip-box__count">6+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img
                    src="/src/assets/img/trip/dest_2_7.jpg"
                    alt="Trip image"
                  />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot" />
                    <a href="destination-details.html">Bangkok</a>
                  </h2>
                  <span className="trip-box__count">5+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 mb-35">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img
                    src="/src/assets/img/trip/dest_2_8.jpg"
                    alt="Trip image"
                  />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot" />
                    <a href="destination-details.html">Nepal</a>
                  </h2>
                  <span className="trip-box__count">7+ Trips</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ot-pagination mt-3 text-center">
            <ul>
              <li>
                <a href="blog.html">1</a>
              </li>
              <li>
                <a href="blog.html">2</a>
              </li>
              <li>
                <a href="blog.html">3</a>
              </li>
              <li>
                <a href="blog.html">
                  <i className="far fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default Destination;
