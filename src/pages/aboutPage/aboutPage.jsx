import Slider from "react-slick";

import { AboutUs } from "../../components/aboutUs/aboutUs";
import BreadCumb from "../../components/breadcumb/breadcumb";
import CounterUp from "../../components/counterUp/counterUp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeVideo from "../../components/homeVideo/homeVideo";
import Testimonial from "../../components/testimonial/testimonial";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const AboutPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <BreadCumb location={"About Us"} title={"Abotu Us"} />
      <AboutUs />

      <div className="overflow-hidden bg-smoke space">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xxl-5 text-center text-xl-start">
              <div className="title-area mb-35">
                <span className="sub-title justify-content-center justify-content-xl-start">
                  <span className="shape left d-inline-block d-xl-none">
                    <span className="dots" />
                  </span>
                  Tour Percentage
                  <span className="shape right">
                    <span className="dots" />
                  </span>
                </span>
                <h2 className="sec-title">
                  The Perfect Travel Place For You &amp; Your Family
                </h2>
              </div>
              <p className="mt-n2 mb-40">
                Progressively impact multidisciplinary leadership skills via
                e-business leadership skills. Holisticly repurpose
                multifunctional data before turnkey information. Globally
                restore client-focused potentialities before scalable core
                competencies.
              </p>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Countryside</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    <div className="progress-value">85%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Vineyard</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    <div className="progress-value">95%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Wine Tasting</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}>
                    <div className="progress-value">60%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="img-box2">
                <div className="img1">
                  <img src="/src/assets/img/normal/about_2_1.jpg" alt="About" />
                </div>
                <div className="ot-video" data-overlay="title" data-opacity={2}>
                  <img src="/src/assets/img/normal/about_2_2.jpg" alt="Video" />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="shape1">
                  <img
                    src="/src/assets/img/normal/about_shape_2.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark2 py-5">
        <CounterUp color={"text-white"} />
      </div>

      <section className="space" id="team-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>
              Travel exparts
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title">Meet Our Expert Guide</h2>
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
              {/* Single Item */}
              <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="/src/assets/img/team/team_1_1.jpg" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Mishel Marsh</a>
                    </h3>
                    <span className="team-desig">Switzerland Guide</span>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="/src/assets/img/team/team_1_2.jpg" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Michel Richard</a>
                    </h3>
                    <span className="team-desig">Maldivs Guide</span>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="/src/assets/img/team/team_1_3.jpg" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Famhida Ruko</a>
                    </h3>
                    <span className="team-desig">Iceland Guide</span>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="/src/assets/img/team/team_1_4.jpg" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Alex Anfantino</a>
                    </h3>
                    <span className="team-desig">Indonesia Guide</span>
                  </div>
                </div>
              </div>
              {/* Single Item */}
              <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="/src/assets/img/team/team_1_5.jpg" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Joseph Carter</a>
                    </h3>
                    <span className="team-desig">Morokko Guide</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <HomeVideo />
      <Testimonial />
      <SubscriptionArea />
    </>
  );
};

export default AboutPage;
