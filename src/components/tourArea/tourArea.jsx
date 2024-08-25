import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { Link } from "react-router-dom";

const TourArea = () => {
  const [featuredContent, setFeaturedContent] = useState([]);
  const [featuredComponent, setFeaturedComponent] = useState([]);

  useEffect(() => {
    fetchFeaturedContent();
    fetchFeaturedComponents();
  }, []);

  const fetchFeaturedContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const homeContent = data.filter((content) => content.id === 20);
      setFeaturedContent(homeContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchFeaturedComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const homeComponents = data.filter(
        (component) => component.content === "20"
      );
      setFeaturedComponent(homeComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <section
        className="space bg-repeat bg-smoke"
        id="tour-sec"
        data-bg-src="/src/assets/img/bg/pattern_bg_1.png"
        style={{ marginTop: "-10rem", paddingTop: "20rem" }}
      >
        <div className="container">
          {featuredContent?.map((content, index) => (
            <div className="title-area text-center" key={index}>
              <span className="sub-title justify-content-center">
                <span className="shape left">
                  <span className="dots" />
                </span>
                {content.heading}
                <span className="shape right">
                  <span className="dots" />
                </span>
              </span>
              <h2 className="sec-title">{content.sub_heading}</h2>
            </div>
          ))}
          <div className="row gy-30">
            {featuredComponent?.map((comp, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="tour-card">
                  <div className="tour-card__img">
                    <img src={comp.url} alt="Tour Image" />
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
                        <i className="fa-light fa-location-dot" />{" "}
                        {comp.sub_title}
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
                      <Link to={`/package-details/${comp.id}`}>
                        {comp.title}
                      </Link>
                    </h3>
                    <div className="tour-meta">
                      <span>
                        <i className="fa-light fa-clock" /> {comp.heading} Days
                      </span>
                      {/* <span>
                        <i className="fa-light fa-user-group" />{" "}
                        {comp.sub_heading}+
                      </span> */}
                    </div>
                    <div className="tour-card__bottom">
                      <span className="tour-card__price">
                        From <span className="price">${comp.sub_heading}</span>
                      </span>
                      <Link
                        to={`/package-details/${comp.id}`}
                        className="link-btn"
                      >
                        See Details <i className="fas fa-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourArea;
