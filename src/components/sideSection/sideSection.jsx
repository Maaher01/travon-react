const SideSection = () => {
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
            <h3 className="widget_title">Tour Categories</h3>
            <ul>
              <li>
                <a href="blog.html">Hill Tracking(8)</a>
              </li>
              <li>
                <a href="blog.html">Adventure(5)</a>
              </li>
              <li>
                <a href="blog.html">Village Beauty(6)</a>
              </li>
              <li>
                <a href="blog.html">Night View(8)</a>
              </li>
              <li>
                <a href="blog.html">Religious Place(7)</a>
              </li>
              <li>
                <a href="blog.html">Lake View(3)</a>
              </li>
              <li>
                <a href="blog.html">Sea Area(5)</a>
              </li>
              <li>
                <a href="blog.html">Resourt(4)</a>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h3 className="widget_title">Last Minute Deals</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/trip/recent-tour-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Brooklyn Christmas Lights
                    </a>
                  </h4>
                  <span className="tour-price">
                    From <span className="price">250$</span>
                  </span>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/trip/recent-tour-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Java &amp; Bali One Life Adventure
                    </a>
                  </h4>
                  <span className="tour-price">
                    From <span className="price">250$</span>
                  </span>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/trip/recent-tour-1-3.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Places To Travel In November
                    </a>
                  </h4>
                  <span className="tour-price">
                    From <span className="price">250$</span>
                  </span>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/trip/recent-tour-1-3.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Pak Nam Chumphon Town Tour
                    </a>
                  </h4>
                  <span className="tour-price">
                    From <span className="price">250$</span>
                  </span>
                </div>
              </div>
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
