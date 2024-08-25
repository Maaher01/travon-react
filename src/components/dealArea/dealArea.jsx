import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

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

  const [dealContent, setDealContent] = useState([]);
  const [dealComponent, setDealComponent] = useState([]);

  useEffect(() => {
    fetchDealContent();
    fetchDealComponents();
  }, []);

  const fetchDealContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const dealContent = data.filter((content) => content.id === 21);
      setDealContent(dealContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchDealComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const dealComponents = data.filter(
        (component) => component.content === "21"
      );
      setDealComponent(dealComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const sanitizeContent = (content) => {
    return DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
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
              {dealContent?.map((content, index) => (
                <div className="title-area" key={index}>
                  <span className="sub-title justify-content-center justify-content-lg-start">
                    <span className="shape left d-inline-block d-lg-none">
                      <span className="dots" />
                    </span>
                    {content.sub_heading}
                    <span className="shape right">
                      <span className="dots" />
                    </span>
                  </span>
                  <h2 className="sec-title">{content.heading}</h2>
                </div>
              ))}
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
        <div className="row gx-0 ot-carousel" id="dealSlide1">
          <Slider {...settings}>
            {dealComponent?.map((comp, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="tour-offer">
                  <div className="tour-offer__img">
                    <img src={comp.url} alt="Tour Image" />
                    <span className="tour-offer__tag">
                      {comp.sub_heading} OFF
                    </span>
                  </div>
                  <div className="tour-offer__content">
                    <div className="tour-offer__top">
                      <div>
                        <h3 className="tour-offer__title box-title">
                          <Link to={`/package-details/${comp.id}`}>
                            {comp.title}
                          </Link>
                        </h3>
                        <span className="tour-offer__subtitle">
                          {comp.sub_title}
                        </span>
                      </div>
                      <span className="tour-offer__price">
                        <span className="price">${comp.heading}</span>
                      </span>
                    </div>
                    <p className="tour-offer__text">
                      {sanitizeContent(comp.description)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default DealArea;
