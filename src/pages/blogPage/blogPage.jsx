import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const BlogPage = () => {
  const [newsComponent, setNewsComponent] = useState([]);

  useEffect(() => {
    fetchNewsComponents();
  }, []);

  const fetchNewsComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const newsComponents = data.filter(
        (component) => component.content === "22"
      );

      setNewsComponent(newsComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <BreadCumb parent={"Home"} location={"Blogs"} title={"Blogs"} />

      <section className="ot-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {newsComponent?.map((comp, index) => (
                <div
                  className="ot-blog blog-single has-post-thumbnail"
                  key={index}
                >
                  <div className="blog-img">
                    <Link to={`/blog-details/${comp.id}`}>
                      <img
                        src={comp.url}
                        alt="Blog Image"
                        width={860}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a>
                        <i className="fa-solid fa-calendar-days" />
                        {comp.sub_title}
                      </a>
                      <a>
                        <i className="fa-solid fa-tag" />
                        {comp.sub_heading}
                      </a>
                    </div>
                    <h2 className="blog-title">
                      <Link to={`/blog-details/${comp.id}`}>{comp.title}</Link>
                    </h2>
                    <p className="blog-text">{comp.heading}</p>
                    <Link to={`/blog-details/${comp.id}`} className="ot-btn">
                      Read More
                      <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              ))}
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
