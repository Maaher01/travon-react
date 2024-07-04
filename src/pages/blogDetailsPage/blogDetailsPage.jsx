import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const BlogDetailsPage = () => {
  return (
    <>
      <BreadCumb location={"Blog Details "} title={"Blog Details"} />

      <section className="ot-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="ot-blog blog-single">
                <div className="blog-img">
                  <img
                    src="/src/assets/img/blog/blog-s-1-1.jpg"
                    alt="Blog Image"
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
                    Get Tips For Making the Most of Your Summer
                  </h2>
                  <p>
                    Rapidiously repurpose leading edge growth strategies with
                    just in time web readiness service Objectively communicate
                    timely meta services for synergistic initiatives
                    functionalities.
                  </p>
                  <p>
                    Uniquely pursue emerging experiences before emerging
                    content. Efficiently underwhelm customer directed total
                    linkage after B2C synergy. Dynamically simplify superior
                    human capital whereas efficient infrastructures.
                    Authoritatively generate e-business web-readiness after
                    wireless outsourcing. Seamlessly evisculate visionary
                    scenarios for resource maximizing mindshare.
                  </p>
                  <p>
                    Assertively recaptiualize interdependent alignments via
                    backend leadership skills. Monotonectally formulate focused
                    quality vectors whereas proactive infomediaries.
                    Energistically utilize ethical initiatives without impactful
                    applications. Authoritatively coordinate seamless e-services
                    and user friendly information. Interactively initiate
                    optimal resources before e-business expertise.
                  </p>
                  <blockquote>
                    <p>
                      “Efficiently pontificate strategic synergy without
                      distributed growth strategies. Collaboratively restore.”
                    </p>
                    <cite>Md Sumon Mia</cite>
                  </blockquote>
                  <p>
                    Appropriately mesh standards compliant communities vis-a-vis
                    client-centric channels. Seamlessly reinvent open-source
                    data via bricks-and-clicks bandwidth. Globally leverage
                    other's inexpensive technologies vis-a-vis user friendly
                    systems. Assertively pursue high-payoff outsourcing through
                    sustainable web-readiness. Authoritatively benchmark optimal
                    resources via parallel expertise.
                  </p>
                  <p>
                    Uniquely seize open-source synergy without leveraged
                    functionalities. Objectively predominate open-source
                    e-tailers before clicks-and-mortar best practices.
                    Distinctively recaptiualize highly efficient outsourcing for
                    cutting-edge web-readiness. Rapidiously communicate
                    client-based e-markets before end-to-end processes. Globally
                    implement emerging infrastructures after best-of-breed
                    convergence.
                  </p>
                  <h3 className="h4 mt-40">
                    EazyPNR is the only theme you will ever need
                  </h3>
                  <p>
                    Phosfluorescently incubate market-driven networks and
                    synergistic e-services. Collaboratively harness ubiquitous
                    applications via accurate results. Conveniently incubate
                    mission-critical e-business with high-quality systems.
                    Interactively provide access to open-source e-business
                    without compelling e-markets. Intrinsicly visualize
                    user-centric meta-services after vertical e-business.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="/src/assets/img/blog/blog_inner_1.jpg"
                        alt="Blog Image"
                        className="rounded-3 w-100 mb-30"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/src/assets/img/blog/blog_inner_2.jpg"
                        alt="Blog Image"
                        className="rounded-3 w-100 mb-30"
                      />
                    </div>
                  </div>
                  <p>
                    Globally cultivate ubiquitous growth strategies before team
                    building users. Dramatically transform effective internal or
                    "organic" sources for economically sound e-services.
                    Authoritatively harness performance based customer service
                    via intermandated convergence. Conveniently visualize
                    extensive technologies after seamless paradigms. Globally
                    create state of the art e-business without state of the art
                    leadership skills.
                  </p>
                  <p className="mb-0">
                    Completely seize seamless e-tailers whereas mission-critical
                    ideas. Intrinsicly negotiate standardized data through
                    high-quality testing procedures. Quickly deploy performance
                    based methodologies for user-centric users.
                    Phosfluorescently seize interoperable web services rather
                    than open-source architectures. Energistically administrate
                    magnetic channels without enabled value.
                  </p>
                </div>
                <div className="share-links clearfix">
                  <div className="row justify-content-between">
                    <div className="col-md-auto">
                      <span className="share-links-title">Tags:</span>
                      <div className="tagcloud">
                        <a href="blog.html">Education</a>
                        <a href="blog.html">Online</a>
                      </div>
                    </div>
                    <div className="col-md-auto text-xl-end">
                      <span className="share-links-title">Share:</span>
                      <ul className="social-links">
                        <li>
                          <a href="https://facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                      {/* End Social Share */}
                    </div>
                    {/* Share Links Area end */}
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="auhtor-img">
                  <img
                    src="/src/assets/img/blog/blog-author.jpg"
                    alt="Blog Author Image"
                  />
                </div>
                <div className="media-body">
                  <h3 className="author-name">
                    <a className="text-inherit" href="team-details.html">
                      Imon Hossain
                    </a>
                  </h3>
                  <p className="author-text">
                    Optimize resource eveling innoation whereas visionary value.
                    Compellingly engage extensible visionary value process with
                    business process innoation whereas visionary value
                    improvements engage.
                  </p>
                  <div className="social-links">
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://youtube.com/" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                  {/* End Social Share */}
                </div>
              </div>
              <div className="blog-navigation">
                <a href="blog-details.html" className="nav-btn prev">
                  <img
                    src="/src/assets/img/blog/blog-nav-1.jpg"
                    alt="blog img"
                    className="nav-img"
                  />
                  <span className="nav-text">Previous Post</span>
                </a>
                <a href="blog.html" className="blog-btn">
                  <i className="fa-solid fa-grid" />
                </a>
                <a href="blog-details.html" className="nav-btn next">
                  <img
                    src="/src/assets/img/blog/blog-nav-2.jpg"
                    alt="blog img"
                    className="nav-img"
                  />
                  <span className="nav-text">Next Post</span>
                </a>
              </div>
              <div className="ot-comments-wrap">
                <h2 className="blog-inner-title h3">Comments (03)</h2>
                <ul className="comment-list">
                  <li className="ot-comment-item">
                    <div className="ot-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/src/assets/img/blog/comment-author-1.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="fal fa-calendar-alt" />
                          14 March, 2022
                        </span>
                        <h3 className="name">David Smithin</h3>
                        <p className="text">
                          Prospective ollaboratively empower multifunctional
                          e-commerce for applications. Seamlessly productivate
                          plug and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="ot-comment-item">
                        <div className="ot-post-comment">
                          <div className="comment-avater">
                            <img
                              src="/src/assets/img/blog/comment-author-2.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <span className="commented-on">
                              <i className="fal fa-calendar-alt" />
                              15 March, 2022
                            </span>
                            <h3 className="name">Tendar Tino</h3>
                            <p className="text">
                              Researched competently provide access to fully
                              methods of empowerment without sticky models.
                            </p>
                            <div className="reply_and_edit">
                              <a href="blog-details.html" className="reply-btn">
                                <i className="fas fa-reply" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="ot-comment-item">
                    <div className="ot-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/src/assets/img/blog/comment-author-3.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on">
                          <i className="fal fa-calendar-alt" />
                          16 March, 2022
                        </span>
                        <h3 className="name">David Arther</h3>
                        <p className="text">
                          Applications collaboratively empower multifunctional
                          e-commerce for prospective. Seamlessly productivate
                          plug and play markets.
                        </p>
                        <div className="reply_and_edit">
                          <a href="blog-details.html" className="reply-btn">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Comment end */}
              {/* Comment Form */}
              <div className="ot-comment-form">
                <div className="form-title">
                  <h3 className="blog-inner-title mb-0">Leave a Comment</h3>
                  <p className="form-text">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="form-control"
                    />
                    <i className="fal fa-user" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email*"
                      className="form-control"
                    />
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                    />
                    <i className="fal fa-globe" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Write a Comment*"
                      className="form-control"
                      defaultValue={""}
                    />
                    <i className="fal fa-pencil" />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="ot-btn">Post Comment</button>
                  </div>
                </div>
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

export default BlogDetailsPage;
