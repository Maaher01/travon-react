import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const BlogPage = () => {
  return (
    <>
      <BreadCumb location={"Blog post"} title={"Blog Post"} />

      <section className="ot-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="ot-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/blog-s-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog-details.html">
                      <i className="fa-solid fa-user" />
                      David Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      21 June, 2023
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      Travel
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Get Tips For Making the Most of Your Summer
                    </a>
                  </h2>
                  <p className="blog-text">
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <a href="blog-details.html" className="ot-btn">
                    Read More
                    <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
              <div className="ot-blog blog-single has-post-thumbnail">
                <div
                  className="blog-img ot-carousel"
                  data-arrows="true"
                  data-slide-show={1}
                  data-fade="true"
                >
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/blog-s-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                  {/* <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/blog-s-1-3.jpg"
                      alt="Blog Image"
                    />
                  </a> */}
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog-details.html">
                      <i className="fa-solid fa-user" />
                      David Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      21 June, 2023
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      Travel
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Top 15 Holiday Can Enjoy in India Trips
                    </a>
                  </h2>
                  <p className="blog-text">
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <a href="blog-details.html" className="ot-btn">
                    Read More
                    <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
              <div className="ot-blog blog-single">
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog-details.html">
                      <i className="fa-solid fa-user" />
                      David Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      21 June, 2023
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      Travel
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      The Impact of Covid-19 on Tour Industry
                    </a>
                  </h2>
                  <p className="blog-text">
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <a href="blog-details.html" className="ot-btn">
                    Read More
                    <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
              <div className="ot-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/blog-s-1-4.jpg"
                      alt="Blog Image"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog-details.html">
                      <i className="fa-solid fa-user" />
                      David Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      21 June, 2023
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      Travel
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Five Ways to Get Best Photos On Picnic Spot
                    </a>
                  </h2>
                  <p className="blog-text">
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <a href="blog-details.html" className="ot-btn">
                    Read More
                    <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
              <div className="ot-blog blog-single has-post-thumbnail">
                <div className="blog-audio">
                  <iframe
                    title="Tell Me U Luv Me (with Trippie Redd) by Juice WRLD"
                    src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&show_artwork=true&maxwidth=751&maxheight=1000&dnt=1"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog-details.html">
                      <i className="fa-solid fa-user" />
                      David Smith
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      21 June, 2023
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      Travel
                    </a>
                  </div>
                  <h2 className="blog-title">
                    <a href="blog-details.html">
                      Read to Get Your Dream Photos On Picnic Spot
                    </a>
                  </h2>
                  <p className="blog-text">
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <a href="blog-details.html" className="ot-btn">
                    Read More
                    <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
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

export default BlogPage;
