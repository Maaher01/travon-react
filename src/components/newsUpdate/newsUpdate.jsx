import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <>
      <section className="space-bottom">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg-8 mb-n2 mb-lg-0">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title justify-content-center justify-content-lg-start">
                  <span className="shape left d-inline-block d-lg-none">
                    <span className="dots" />
                  </span>
                  News &amp; Updates
                  <span className="shape right">
                    <span className="dots" />
                  </span>
                </span>
                <h2 className="sec-title">Our Latest News &amp; Articles</h2>
              </div>
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
              <div className="col-md-6 col-xl-4 p-3">
                <div className="blog-card">
                  <div className="blog-img">
                    <img
                      src="/src/assets/img/blog/blog_1_1.jpg"
                      alt="blog image"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-calendar-days" />
                        15 July, 2023
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-tags" /> Mountain
                      </a>
                    </div>
                    <h3 className="blog-title box-title">
                      <a href="blog-details.html">
                        Get Tips For Making the Most of Your Summer
                      </a>
                    </h3>
                    <a href="blog-details.html" className="link-btn">
                      Read More <i className="fas fa-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-3">
                <div className="blog-card">
                  <div className="blog-img">
                    <img
                      src="/src/assets/img/blog/blog_1_2.jpg"
                      alt="blog image"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-calendar-days" />
                        16 July, 2023
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-tags" /> Parasailing
                      </a>
                    </div>
                    <h3 className="blog-title box-title">
                      <a href="blog-details.html">
                        Top 15 Holiday Can Enjoy in India Trips
                      </a>
                    </h3>
                    <a href="blog-details.html" className="link-btn">
                      Read More <i className="fas fa-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-3">
                <div className="blog-card">
                  <div className="blog-img">
                    <img
                      src="/src/assets/img/blog/blog_1_3.jpg"
                      alt="blog image"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-calendar-days" />
                        17 July, 2023
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-tags" /> Lake View
                      </a>
                    </div>
                    <h3 className="blog-title box-title">
                      <a href="blog-details.html">
                        The Impact of Covid-19 on Tour Industry
                      </a>
                    </h3>
                    <a href="blog-details.html" className="link-btn">
                      Read More <i className="fas fa-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 p-3">
                <div className="blog-card">
                  <div className="blog-img">
                    <img
                      src="/src/assets/img/blog/blog_1_4.jpg"
                      alt="blog image"
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-calendar-days" />
                        18 July, 2023
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-tags" /> Newyork City
                      </a>
                    </div>
                    <h3 className="blog-title box-title">
                      <a href="blog-details.html">
                        Five Ways to Get Best Photos On Picnic Spot
                      </a>
                    </h3>
                    <a href="blog-details.html" className="link-btn">
                      Read More <i className="fas fa-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsUpdate;
