import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import FeaturedContext from "../../context/FeaturedContext";

const TourDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { featuredComponents } = useContext(FeaturedContext);

  const [featuredComponent, setFeaturedComponent] = useState([]);

  useEffect(() => {
    fetchFeaturedComponent(id);
  }, [id]);

  const fetchFeaturedComponent = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/component/${id}`);
      const featurdComponent = await response.data;
      setFeaturedComponent(featurdComponent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const sanitizeContent = (content) => {
    return DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
  };

  return (
    <>
      <BreadCumb
        parent={"Packages"}
        location={featuredComponent.title}
        title={featuredComponent.title}
      />

      <section className="ot-tour-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="tour-details">
                <div className="tour-img">
                  <img src={featuredComponent.url} alt="Tour Image" />
                </div>
                <div className="tab-content" id="productTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tourDescription"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="tour-description">
                      <h3 className="inner-title">Description</h3>
                      <p className="mt-n2 mb-4">
                        {sanitizeContent(featuredComponent.description)}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Comment Form */}
                <div className="ot-comment-form">
                  <div className="form-title">
                    <h3 className="blog-inner-title">Leave A Reply</h3>
                    <p className="text">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <div className="row">
                    <div className="form-group rating-select d-flex align-items-center">
                      <label>Your Rating</label>
                      <p className="stars">
                        <span>
                          <a className="star-1" href="#">
                            1
                          </a>
                          <a className="star-2" href="#">
                            2
                          </a>
                          <a className="star-3" href="#">
                            3
                          </a>
                          <a className="star-4" href="#">
                            4
                          </a>
                          <a className="star-5" href="#">
                            5
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Write a Message"
                        className="form-control"
                        defaultValue={""}
                      />
                      <i className="text-title far fa-pencil-alt" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                      />
                      <i className="text-title far fa-user" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control"
                      />
                      <i className="text-title far fa-envelope" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        id="reviewcheck"
                        name="reviewcheck"
                        type="checkbox"
                      />
                      <label htmlFor="reviewcheck">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="ot-btn">Post Review</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_book">
                  <div className="widget-tour-book">
                    <div className="top">
                      <h4 className="title">Book This Tour</h4>
                      <p className="price">$250.00 per person</p>
                    </div>
                    <form
                      action="mail.php"
                      method="POST"
                      className="widget-form"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                        <i className="fal fa-user" />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                        <i className="fal fa-phone" />
                      </div>
                      <div className="form-group">
                        <select
                          name="subject"
                          id="ticketType"
                          className="form-select nice-select"
                        >
                          <option value="" disabled="" selected="" hidden="">
                            Ticket Types
                          </option>
                          <option value="Basic Ticket">Basic Ticket</option>
                          <option value="Standard Ticket">
                            Standard Ticket
                          </option>
                          <option value="VIP Ticket">VIP Ticket</option>
                        </select>
                        <i className="fal fa-chevron-down" />
                      </div>
                      <div className="row">
                        <div className="col-6 form-group">
                          <select
                            name="person"
                            id="person"
                            className="form-select nice-select"
                          >
                            <option value="" disabled="" selected="" hidden="">
                              Adult
                            </option>
                            <option value="1 Person">1 Person</option>
                            <option value="2 Person">2 Person</option>
                            <option value="3 Person">3 Person</option>
                          </select>
                          <i className="fal fa-chevron-down" />
                        </div>
                        <div className="col-6 form-group">
                          <select
                            name="child"
                            id="child"
                            className="form-select nice-select"
                          >
                            <option value="" disabled="" selected="" hidden="">
                              Child
                            </option>
                            <option value="1 Person">1 Person</option>
                            <option value="2 Person">2 Person</option>
                            <option value="3 Person">3 Person</option>
                          </select>
                          <i className="fal fa-chevron-down" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="date"
                          id="date"
                          placeholder="mm/dd/yyyyy"
                        />
                        <i className="fal fa-calendar-alt" />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          className="form-control"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <i className="fal fa-pencil" />
                      </div>
                      <div className="form-btn">
                        <button className="ot-btn w-100">Book now</button>
                      </div>
                      <p className="form-messages mb-0 mt-3" />
                    </form>
                  </div>
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
                            <a
                              className="text-inherit"
                              href="blog-details.html"
                            >
                              {comp.title}
                            </a>
                          </h4>
                          <span className="tour-price">
                            From{" "}
                            <span className="price">${comp.sub_heading}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="widget widget_banner">
                  <div className="offer-banner">
                    <div className="banner-logo">
                      <img src="assets/img/logo-white.svg" alt="Travon" />
                    </div>
                    <span className="banner-subtitle">Happy Holiday</span>
                    <h3 className="banner-title">Adventure Ture</h3>
                    <div className="offer">
                      <h6 className="offer-title">
                        <span className="text-theme">Travon</span> Special
                      </h6>
                      <p className="offer-text">
                        <span className="text-theme">30% off</span> On All
                        Booking
                      </p>
                    </div>
                    <a href="contact.html" className="ot-btn">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default TourDetailsPage;
