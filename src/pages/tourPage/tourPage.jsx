import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const TourPage = () => {
  const [featuredComponent, setFeaturedComponent] = useState([]);

  useEffect(() => {
    fetchFeaturedComponents();
  }, []);

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
      <BreadCumb parent={"Home"} location={"Packages"} title={"Packages"} />

      <section className="ot-tour-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="row">
                {featuredComponent?.map((comp, index) => (
                  <div
                    className="col-xl-6 col-lg-12 col-md-6 mb-30"
                    key={index}
                  >
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
                            <i className="fa-light fa-clock" /> {comp.heading}{" "}
                            Days
                          </span>
                          {/* <span>
                            <i className="fa-light fa-user-group" />{" "}
                            {comp.sub_heading}+
                          </span> */}
                        </div>
                        <div className="tour-card__bottom">
                          <span className="tour-card__price">
                            From{" "}
                            <span className="price">${comp.sub_heading}</span>
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
