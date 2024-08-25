import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NewsUpdate = () => {
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
  const [newsContent, setNewsContent] = useState([]);
  const [newsComponent, setNewsComponent] = useState([]);

  useEffect(() => {
    fetchNewsContent();
    fetchNewsComponents();
  }, []);

  const fetchNewsContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const newsContent = data.filter((content) => content.id === 22);
      setNewsContent(newsContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchNewsComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const newsComponents = data
        .filter((component) => component.content === "22")
        .slice(0, 4);
      setNewsComponent(newsComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <section className="space-bottom">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg-8 mb-n2 mb-lg-0">
              {newsContent?.map((content, index) => (
                <div
                  className="title-area text-center text-lg-start"
                  key={index}
                >
                  <span className="sub-title justify-content-center justify-content-lg-start">
                    <span className="shape left d-inline-block d-lg-none">
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
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <a href="blog.html" className="ot-btn">
                  View All Post
                </a>
              </div>
            </div>
          </div>
          <div
            className="row slider-shadow ot-carousel"
            data-slide-show={3}
            data-lg-slide-show={2}
            data-md-slide-show={2}
            data-sm-slide-show={1}
            data-arrows="true"
          >
            <Slider {...settings}>
              {newsComponent?.map((comp, index) => (
                <div className="col-md-6 col-xl-4 p-3" key={index}>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src={comp.url} alt="blog image" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fas fa-calendar-days" />
                          {comp.sub_title}
                        </a>
                        <a href="blog.html">
                          <i className="fas fa-tags" />
                          {comp.sub_heading}
                        </a>
                      </div>
                      <h3 className="blog-title box-title">
                        <Link to={`/blog-details/${comp.id}`}>
                          {comp.title}
                        </Link>
                      </h3>
                      <Link
                        to={`/blog-details/${comp.id}`}
                        className="link-btn"
                      >
                        Read More <i className="fas fa-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsUpdate;
