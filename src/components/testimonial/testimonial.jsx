import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className="space-bottom"
        style={{ marginTop: "-30rem", paddingTop: "25rem" }}
      >
        <div
          className="testi-sec space"
          data-bg-src="/src/assets/img/bg/bg_map_2.png"
        >
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title justify-content-center">
                <span className="shape left">
                  <span className="dots" />
                </span>
                Testimonials
                <span className="shape right">
                  <span className="dots" />
                </span>
              </span>
              <h2 className="sec-title">What Customer Say About Us</h2>
            </div>
            <div
              className="row slider-shadow ot-carousel"
              id="testiSlide1"
              //   data-slide-show={3}
              //   data-lg-slide-show={2}
              //   data-md-slide-show={2}
              //   data-sm-slide-show={1}
            >
              <Slider {...settings}>
                <div className="col-lg-6 p-3">
                  <div className="testi-card">
                    <div className="testi-card__rating">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <p className="testi-card__text">
                      “Objectively deploy open-source web-readiness impactful
                      bandwidth. Compellingly coordinate business deliverables
                      rather equity invested technologies. Phosfluorescently
                      reinvent.”
                    </p>
                    <div className="testi-card__profile">
                      <div className="testi-card__avater">
                        <img
                          src="/src/assets/img/testimonial/testi_1_1.jpg"
                          alt="Avater"
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card__name">Mary Cruzleen</h3>
                        <span className="testi-card__desig">
                          CEO of Maithon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-3">
                  <div className="testi-card">
                    <div className="testi-card__rating">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <p className="testi-card__text">
                      “Objectively deploy open-source web-readiness impactful
                      bandwidth. Compellingly coordinate business deliverables
                      rather equity invested technologies. Phosfluorescently
                      reinvent.”
                    </p>
                    <div className="testi-card__profile">
                      <div className="testi-card__avater">
                        <img
                          src="/src/assets/img/testimonial/testi_1_2.jpg"
                          alt="Avater"
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card__name">David Milton</h3>
                        <span className="testi-card__desig">CEO of Gazal</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-3">
                  <div className="testi-card">
                    <div className="testi-card__rating">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <p className="testi-card__text">
                      “Objectively deploy open-source web-readiness impactful
                      bandwidth. Compellingly coordinate business deliverables
                      rather equity invested technologies. Phosfluorescently
                      reinvent.”
                    </p>
                    <div className="testi-card__profile">
                      <div className="testi-card__avater">
                        <img
                          src="/src/assets/img/testimonial/testi_1_3.jpg"
                          alt="Avater"
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card__name">Abraham Khalil</h3>
                        <span className="testi-card__desig">CEO Adivaha</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-3">
                  <div className="testi-card">
                    <div className="testi-card__rating">
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                      <i className="fa-solid fa-star-sharp" />
                    </div>
                    <p className="testi-card__text">
                      “Objectively deploy open-source web-readiness impactful
                      bandwidth. Compellingly coordinate business deliverables
                      rather equity invested technologies. Phosfluorescently
                      reinvent.”
                    </p>
                    <div className="testi-card__profile">
                      <div className="testi-card__avater">
                        <img
                          src="/src/assets/img/testimonial/testi_1_4.jpg"
                          alt="Avater"
                        />
                      </div>
                      <div className="media-body">
                        <h3 className="testi-card__name">Pisoori Janu</h3>
                        <span className="testi-card__desig">CEO at Travon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
