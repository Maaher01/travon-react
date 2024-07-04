import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const DestinationDetailsPage = () => {
  return (
    <>
      <BreadCumb location={" Destination details"} />

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="destination-details">
            <h2 className="h3 destination-title">
              <i className="fas fa-location-dot" />
              Paris
            </h2>
            <p className="mb-4">
              Dynamically leverage other's excellent collaboration and
              idea-sharing via multimedia based applications. Appropriately
              incentivize go forward leadership skills rather than business
              processes. Globally synthesize focused innovation vis-à-vis
              resource sucking technology. Monotonically recapitalize
              client-centered markets rather than excellent paradigms.
              Objectively orchestrate multifunctional. Efficiently implement
              accurate e-services after superior imperatives.
            </p>
            <p className="mb-40">
              Collaboratively architect one-to-one niche markets vis-à-vis
              alternative niche market. Completely engineer alternative
              mindshare vis-à-vis strategic total linkage. Efficiently formulate
              worldwide schemas without interdependent metric. Dramatically
              morph compelling growth strategies whereas standardized processes.
              Credibly embrace extensive core competencies after reliable
              channel. Conveniently parallel task strategic sources for team
              driven leadership skills. Distinctively build cross-media
              potentialities via unique technology. Energetically
              reintermediation. Monotonically monetize reliable networks
              vis-à-vis extensive mindshare. Monotonically restore standards
              compliant e-tailers before equity invested e-business. Assertively
              mecarbinate interdependent infrastructures whereas cooperative
              e-services. Proactively restore emerging.
            </p>
            <h3 className="h4 mb-20">Hiking</h3>
            <p className="mb-4">
              Seamlessly streamline world-class paradigms and 2.0 materials.
              Completely network excellent bandwidth without extensive
              convergence. Continually facilitate user-centric portals whereas
              highly efficient core competencies. Synergistically grow
              enterprise result for principle-centered niche market.
              Monotonically parallel task cross-media data for economically
              sound partnerships. Objectively pontificate equity invested
              partnerships through multimedia based relationships. Proactively
              visualize resource maximizing leadership skills and fully tested
              solutions. Dramatically simplify focused results via innovative
              action items. Seamlessly incubate just in time e-markets after
              revolutionary ideas. Completely parallel task dynamic total
              linkage after e-business niche markets.
            </p>
            <p className="mb-4">
              Compellingly maintain client-focused technology for functionalized
              innovation. Competently maximize interactive interfaces via
              intermediated action items. Conveniently utilize extensible
              functionalities before high-payoff initiatives. Rapaciously
              transition efficient markets vis-à-vis adaptive leadership.
              Globally disintermediate synergistic networks through web-enabled
              results. Globally harness cross-platform content via economically
              sound partnerships. Proactively.
            </p>
            <div
              className="row mb-40 ot-carousel slider-shadow"
              data-slide-show={3}
              data-md-slide-show={2}
              data-sm-slide-show={1}
            >
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_1.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
                      <a href="tour-details.html">Brooklyn Beach Resort Tour</a>
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
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_2.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_3.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
            </div>
            <h3 className="h4 mb-20">Hot Air Ballon</h3>
            <p className="mb-4">
              Phosphorescently grow cross-unit total linkage and timely
              partnerships. Efficiently fabricate standardized manufactured
              products for an expanded array of users. Completely productivity
              world-class communities before backend core competencies.
              Holistically engineer maintainable leadership rather than
              intermediated innovation. Proactively fabricate emerging
              meta-services whereas best-of-breed outsourcing. Interactively
              integrate premier outsourcing without backend infomediaries.
              Conveniently leverage existing process-centric human capital via
              corporate ideas. Quickly maintain exceptional infomediaries via
              low-risk high-yield potentialities. Rapaciously administrate
              stand-alone testing procedures for pandemic human capital.
              Competently evolve ethical expertise with world-class platforms.
            </p>
            <p className="mb-4">
              Objectively restore mission-critical niche and leveraged
              collaboration and idea-sharing. Phosphorescently procrastinate
              principle-centered scenario and tactical synergy. Appropriately
              plagiarize open-source manufactured product and customer directed
              opportunity. Continually transform integrated content rather than
              unique web-readiness. Intrinsically pontificate enterprise-wide
              services for optimal results.
            </p>
            <div
              className="row mb-30 ot-carousel slider-shadow"
              data-slide-show={3}
              data-md-slide-show={2}
              data-sm-slide-show={1}
            >
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_4.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
                      <a href="tour-details.html">Brooklyn Beach Resort Tour</a>
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
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_5.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
              <div className="col-lg-4 col-md-6">
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img
                      src="/src/assets/img/trip/tour_4_6.jpg"
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
                        <i className="fa-light fa-location-dot" /> Paris
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
            </div>
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default DestinationDetailsPage;
