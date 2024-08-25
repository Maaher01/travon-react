import { useContext } from "react";
import CategoryContext from "../../context/CategoryContext";
import FeaturedContext from "../../context/FeaturedContext";

const SideSection = () => {
  const { categoryComponent, categoryContent } = useContext(CategoryContext);
  const { featuredComponents } = useContext(FeaturedContext);

  return (
    <>
      <div className="col-xxl-4 col-lg-5">
        <aside className="sidebar-area">
          <div className="widget widget_search">
            <form className="search-form">
              <input type="text" placeholder="Enter Keyword" />
              <button type="submit">
                <i className="far fa-search" />
              </button>
            </form>
          </div>
          <div className="widget widget_categories">
            <h3 className="widget_title">{categoryContent.heading}</h3>
            <ul>
              {categoryComponent?.map((comp, index) => (
                <li key={index}>
                  <a>
                    {comp.title} ({comp.sub_title})
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="widget">
            <h3 className="widget_title">Last Minute Deals</h3>
            <div className="recent-post-wrap">
              {featuredComponents?.map((comp, index) => (
                <div className="recent-post" key={index}>
                  <div className="media-img">
                    <a href="blog-details.html">
                      <img src={comp.url} alt="Blog Image" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="post-title">
                      <a className="text-inherit" href="blog-details.html">
                        {comp.title}
                      </a>
                    </h4>
                    <span className="tour-price">
                      From <span className="price">${comp.sub_heading}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="widget widget_banner">
            <div className="offer-banner">
              <div className="banner-logo">
                <img src="/src/assets/img/logo-white.svg" alt="Travon" />
              </div>
              <span className="banner-subtitle">Happy Holiday</span>
              <h3 className="banner-title">Adventure Ture</h3>
              <div className="offer">
                <h6 className="offer-title">
                  <span className="text-theme">Travon</span> Special
                </h6>
                <p className="offer-text">
                  <span className="text-theme">30% off</span> On All Booking
                </p>
              </div>
              <a href="contact.html" className="ot-btn">
                Get A Quote
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideSection;
