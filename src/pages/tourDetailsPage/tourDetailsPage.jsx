import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const TourDetailsPage = () => {
  return (
    <>
      <BreadCumb location={"TOur Details"} title={"TOur Details"} />

      <section className="ot-tour-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="tour-details">
                <div className="tour-header">
                  <h2 className="tour-title">Brooklyn Christmas Lights Tour</h2>
                  <div className="meta-box-wrap">
                    <div className="meta-box">
                      <div className="meta-box_icon">
                        <i className="fal fa-circle-dollar" />
                      </div>
                      <div className="media-body">
                        <h5 className="meta-box_title">From</h5>
                        <p className="meta-box_text">$250.00</p>
                      </div>
                    </div>
                    <div className="meta-box">
                      <div className="meta-box_icon">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="media-body">
                        <h5 className="meta-box_title">Duration</h5>
                        <p className="meta-box_text">10 Days, 11 Nights</p>
                      </div>
                    </div>
                    <div className="meta-box">
                      <div className="meta-box_icon">
                        <i className="fal fa-location-dot" />
                      </div>
                      <div className="media-body">
                        <h5 className="meta-box_title">Location</h5>
                        <p className="meta-box_text">Madrid, Spain</p>
                      </div>
                    </div>
                    <div className="meta-box">
                      <div className="meta-box_icon">
                        <i className="fal fa-users" />
                      </div>
                      <div className="media-body">
                        <h5 className="meta-box_title">Group Size</h5>
                        <p className="meta-box_text">50+ People</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tour-img">
                  <img
                    src="assets/img/trip/tour_details.jpg"
                    alt="Tour Image"
                  />
                </div>
                <ul className="nav tour-tab" id="tourTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link ot-btn active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      href="#tourDescription"
                      role="tab"
                      aria-controls="tourDescription"
                      aria-selected="true"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link ot-btn"
                      id="plan-tab"
                      data-bs-toggle="tab"
                      href="#plan"
                      role="tab"
                      aria-controls="plan"
                      aria-selected="false"
                    >
                      Tour Plan
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link ot-btn"
                      id="photos-tab"
                      data-bs-toggle="tab"
                      href="#photos"
                      role="tab"
                      aria-controls="photos"
                      aria-selected="false"
                    >
                      Tour Photos
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link ot-btn"
                      id="location-tab"
                      data-bs-toggle="tab"
                      href="#location"
                      role="tab"
                      aria-controls="location"
                      aria-selected="false"
                    >
                      Location
                    </a>
                  </li>
                </ul>
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
                        Objectively leverage existing tactical core competencies
                        for innovative innovation. Continually matrix unique
                        resources for impactful solutions. Uniquely coordinate
                        competitive e-tailers after resource maximizing
                        benefits. Uniquely actualize principle-centered best
                        practices rather than front-end testing procedures.
                        Efficiently repurpose high-quality outsourcing vis-a-vis
                        leading-edge schemas.
                      </p>
                      <p className="mb-30">
                        Collaboratively predominate team building
                        functionalities vis-a-vis holistic quality vectors.
                        Appropriately plagiarize interdependent customer service
                        without enterprise web-readiness. Holisticly formulate
                        leading-edge resources through out-of-the-box internal
                        or "organic" sources. Synergistically utilize
                        user-centric opportunities after world-class ideas.
                        Synergistically facilitate.
                      </p>
                      <div className="description-table-wrap">
                        <table className="description-table">
                          <tbody>
                            <tr>
                              <th>Destination</th>
                              <td>NYC International Airport</td>
                            </tr>
                            <tr>
                              <th>Depature</th>
                              <td>Yes Required</td>
                            </tr>
                            <tr>
                              <th>Departure Time</th>
                              <td>01 January, 2023 10.00AM</td>
                            </tr>
                            <tr>
                              <th>Return Time</th>
                              <td>08 January, 2023 10.00AM</td>
                            </tr>
                            <tr>
                              <th>Included</th>
                              <td>
                                <span>
                                  <i className="fal fa-check" /> Specilaized
                                  Bilingual Guide
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-check" /> Private
                                  Transport
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-check" /> Entrance Fees
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-check" /> Box
                                  Lunch,Water,Dinner and Snacks
                                </span>
                                <br />
                              </td>
                            </tr>
                            <tr>
                              <th>Excluded</th>
                              <td>
                                <span>
                                  <i className="fal fa-xmark" /> Additional
                                  Services
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-xmark" /> Insurance
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-xmark" /> Drink
                                </span>
                                <br />
                                <span>
                                  <i className="fal fa-xmark" /> Tickets
                                </span>
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="plan"
                    role="tabpanel"
                    aria-labelledby="plan-tab"
                  >
                    <div className="tour-plan">
                      <h3 className="inner-title">Tour Plan</h3>
                      <div className="accordion" id="planAccordion">
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-1"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                              aria-expanded="false"
                              aria-controls="collapse-1"
                            >
                              Day 01: Departure
                            </button>
                          </div>
                          <div
                            id="collapse-1"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-1"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card active">
                          <div
                            className="accordion-header"
                            id="collapse-item-2"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                              aria-expanded="true"
                              aria-controls="collapse-2"
                            >
                              Day 02: Adventure Begins
                            </button>
                          </div>
                          <div
                            id="collapse-2"
                            className="accordion-collapse collapse show"
                            aria-labelledby="collapse-item-2"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-3"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              Day 03: Airplain Tour
                            </button>
                          </div>
                          <div
                            id="collapse-3"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-3"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-4"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-4"
                              aria-expanded="false"
                              aria-controls="collapse-4"
                            >
                              Day 04: Jungle Sufary
                            </button>
                          </div>
                          <div
                            id="collapse-4"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-4"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-5"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-5"
                              aria-expanded="false"
                              aria-controls="collapse-5"
                            >
                              Day 05: Explore Culloden
                            </button>
                          </div>
                          <div
                            id="collapse-5"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-5"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-6"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-6"
                              aria-expanded="false"
                              aria-controls="collapse-6"
                            >
                              Day 06: Loch Ness and the Isle of Skye
                            </button>
                          </div>
                          <div
                            id="collapse-6"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-6"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-7"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-7"
                              aria-expanded="false"
                              aria-controls="collapse-7"
                            >
                              Day 07: Walk the Walls of Stirling Castle
                            </button>
                          </div>
                          <div
                            id="collapse-7"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-7"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-8"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-8"
                              aria-expanded="false"
                              aria-controls="collapse-8"
                            >
                              Day 08: Journey to Thriving Glasgow
                            </button>
                          </div>
                          <div
                            id="collapse-8"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-8"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-9"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-9"
                              aria-expanded="false"
                              aria-controls="collapse-9"
                            >
                              Day 09: Farewell Glasgow
                            </button>
                          </div>
                          <div
                            id="collapse-9"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-9"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div
                            className="accordion-header"
                            id="collapse-item-10"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-10"
                              aria-expanded="false"
                              aria-controls="collapse-10"
                            >
                              Day 10: Return
                            </button>
                          </div>
                          <div
                            id="collapse-10"
                            className="accordion-collapse collapse"
                            aria-labelledby="collapse-item-10"
                            data-bs-parent="#planAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">
                                Authoritatively engage transparent users for
                                standard compliant vortal. Continually seize
                                technically sound applications rather than an
                                expanded array of methodologies. Competently
                                envisioneer fully researched "outside the box"
                                thinking via team building technologies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="photos"
                    role="tabpanel"
                    aria-labelledby="photos-tab"
                  >
                    <div className="tour-photos">
                      <div className="row g-4 masonary-active">
                        <div className="col-md-6 filter-item">
                          <div className="tour-photo">
                            <img
                              src="assets/img/trip/tour_inner_1.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 filter-item">
                          <div className="tour-photo">
                            <img
                              src="assets/img/trip/tour_inner_2.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 filter-item">
                          <div className="tour-photo">
                            <img
                              src="assets/img/trip/tour_inner_3.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 filter-item">
                          <div className="tour-photo">
                            <img
                              src="assets/img/trip/tour_inner_4.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 filter-item">
                          <div className="tour-photo">
                            <img
                              src="assets/img/trip/tour_inner_5.jpg"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="location"
                    role="tabpanel"
                    aria-labelledby="location-tab"
                  >
                    <div className="tour-location">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuzsoft!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                      />
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
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/trip/recent-tour-1-1.jpg"
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
                            src="assets/img/trip/recent-tour-1-2.jpg"
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
                            src="assets/img/trip/recent-tour-1-3.jpg"
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
                            src="assets/img/trip/recent-tour-1-3.jpg"
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
