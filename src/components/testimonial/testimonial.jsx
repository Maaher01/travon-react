import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

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

  const fetchTestimonialData = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/message`);
      setTestimonialData(response.data.rows);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  }, []);

  useEffect(() => {
    fetchTestimonialData();
  }, [fetchTestimonialData]);

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
              <h2 className="sec-title">What Customers Say About Us</h2>
            </div>
            <div className="row slider-shadow ot-carousel" id="testiSlide1">
              <Slider {...settings}>
                {testimonialData.map((data, index) => (
                  <div className="col-lg-6 p-3" key={index}>
                    <div className="testi-card">
                      <div className="testi-card__rating">
                        <i className="fa-solid fa-star-sharp" />
                        <i className="fa-solid fa-star-sharp" />
                        <i className="fa-solid fa-star-sharp" />
                        <i className="fa-solid fa-star-sharp" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <p className="testi-card__text">“{data.comment}”</p>
                      <div className="testi-card__profile">
                        <div className="testi-card__avater">
                          <img
                            src="/src/assets/img/testimonial/testi_1_4.jpg"
                            alt="Avater"
                          />
                        </div>
                        <div className="media-body">
                          <h3 className="testi-card__name">{data.name}</h3>
                          {/* <span className="testi-card__desig">
                            CEO at Travon
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
