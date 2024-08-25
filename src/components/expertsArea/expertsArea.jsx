import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { Link } from "react-router-dom";

const ExpertsArea = () => {
  const [expertsContent, setExpertsContent] = useState([]);
  const [expertsComponent, setExpertsComponent] = useState([]);

  useEffect(() => {
    fetchExpertsContent();
    fetchExpertsComponents();
  }, []);

  const fetchExpertsContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const expertsContent = data.filter((content) => content.id === 23);
      setExpertsContent(expertsContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchExpertsComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const expertsComponents = data.filter(
        (component) => component.content === "23"
      );
      setExpertsComponent(expertsComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

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
    <section className="space" id="team-sec">
      <div className="container">
        {expertsContent?.map((content, index) => (
          <div className="title-area text-center" key={index}>
            <span className="sub-title justify-content-center">
              <span className="shape left">
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
        <div className="row slider-shadow ot-carousel">
          <Slider {...settings}>
            {expertsComponent?.map((comp, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 p-3" key={index}>
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src={comp.url} alt="Team" />
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
                      <Link to={`/team-details/${comp.id}`}>{comp.title}</Link>
                    </h3>
                    <span className="team-desig">{comp.sub_title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExpertsArea;
