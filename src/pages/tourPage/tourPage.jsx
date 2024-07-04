import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const TourPage = () => {
  return (
    <>
      <BreadCumb location={"Tour "} title={"Tour"} />

      <section className="ot-tour-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_1.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Madrid,
                          Spain
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">
                          Brooklyn Beach Resort Tour
                        </a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 10 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 50+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$250</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_2.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Chumphon,
                          Thailand
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">Pak Chumphon Town Tour</a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 12 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 70+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$450</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_3.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Lasvegus,
                          USA
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">Bali One Life Adventure</a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 07 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 52+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$350</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_4.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Barcelona,
                          Spain
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">
                          Places To Travel November
                        </a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 13 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 100+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$550</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_5.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Lasvegus,
                          USA
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">
                          Brooklyn Christmas Lights
                        </a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 15 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 312+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$600</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_6.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Madrid,
                          Spain
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">
                          Discovery Island Kayaking
                        </a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 18 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 500+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$250</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_7.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Chumphon,
                          Thailand
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">
                          Los Glaciares &amp; Fitz Trip
                        </a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 20 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 50+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$250</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                  <div className="tour-card">
                    <div className="tour-card__img">
                      <img
                        src="/src/assets/img/trip/tour_1_8.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-card__tag">
                        <i className="far fa-heart" />
                      </span>
                    </div>
                    <div className="tour-card__content">
                      <div className="tour-card__top">
                        <a
                          href="https://www.google.com/maps"
                          className="tour-card__location"
                        >
                          <i className="fa-light fa-location-dot" /> Lasvegus,
                          USA
                        </a>
                        <div className="tour-card__rating">
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                          <i className="fa-solid fa-star-sharp" />
                        </div>
                      </div>
                      <h3 className="tour-card__title">
                        <a href="tour-details.html">Kupland Christmas Tour</a>
                      </h3>
                      <div className="tour-meta">
                        <span>
                          <i className="fa-light fa-clock" /> 06 Days
                        </span>
                        <span>
                          <i className="fa-light fa-user-group" /> 60+
                        </span>
                      </div>
                      <div className="tour-card__bottom">
                        <span className="tour-card__price">
                          From <span className="price">$550</span>
                        </span>
                        <a href="tour-details.html" className="link-btn">
                          See Details <i className="fas fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ot-pagination text-center">
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

            <SideSection />
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default TourPage;
