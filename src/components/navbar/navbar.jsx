import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/api";

const Navbar = () => {
  const [comapnyData, setCompanyData] = useState([]);
  const [parentMenuData, setParentMenuData] = useState([]);
  const [childMenuData, setChildMenuData] = useState({});
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    fetchCompanyData();
    fetchParentMenus();
    fetchSocialData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/companyprofile`);
      const data = await response.data;
      setCompanyData(data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchParentMenus = async () => {
    try {
      const response = await axios.get(`${baseUrl}/menu`);
      const data = await response.data;
      const parentMenus = data.filter((menu) => menu.parent === "Parent");
      setParentMenuData(parentMenus);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchChildMenus = async (menuId) => {
    try {
      const response = await axios.get(`${baseUrl}/menu/child/${menuId}`);
      const data = await response.data;
      setChildMenuData((prevState) => ({
        ...prevState,
        [menuId]: data,
      }));
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchSocialData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/social`);
      const data = await response.data;
      setSocialData(data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const handleMouseEnter = (menuId) => {
    if (!childMenuData[menuId]) {
      fetchChildMenus(menuId);
    }
  };

  return (
    <>
      {/* sidebar  start*/}
      <div className="sidemenu-wrapper">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget footer-widget">
            <div className="ot-widget-about">
              <div className="about-logo">
                <a href="index.html">
                  <img src="src/assets/img/logo-white.svg" alt="Travon" />
                </a>
              </div>
              <p className="about-text">
                Globally communicate adaptive e-markets &amp; timely
                manufactured product. Objectively exploit collaborative
                relationships vis-a-vis competitive manufactured.
              </p>
              <div className="ot-social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
          <div className="widget footer-widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="src/assets/img/blog/recent-post-2-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      5 Ways to Get Your Dream Photos On Picnic
                    </a>
                  </h4>
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      21 June, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="src/assets/img/blog/recent-post-2-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      9 Essential Tips For Making the Most of Your
                    </a>
                  </h4>
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      22 June, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget footer-widget">
            <h3 className="widget_title">Contact Us</h3>
            <div className="ot-widget-contact">
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-location-dot" />
                </div>
                <p className="info-box_text">
                  5807 W 63rd St, Chicago, IL 60638, United States
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-phone" />
                </div>
                <p className="info-box_text">
                  <a href="tel:+11234567890" className="info-box_link">
                    +(1) 123 456 7890
                  </a>
                  <a href="tel:+10987654321" className="info-box_link">
                    +(1) 098 765 4321
                  </a>
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-envelope" />
                </div>
                <p className="info-box_text">
                  <a href="mailto:info@travon.com" className="info-box_link">
                    info@travon.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar end */}

      {/* popup search box start */}
      <div className="popup-search-box d-none d-lg-block">
        <button className="searchClose">
          <i className="fal fa-times" />
        </button>
        <form action="">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
      {/* popup search box end */}

      {/* Mobile Menu start */}
      <div className="ot-menu-wrapper">
        <div className="ot-menu-area text-center">
          <button className="ot-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <Link to="/">
              <img src="src/assets/img/logo.svg" alt="Travon" />
            </Link>
          </div>
          <div className="ot-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home One</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Two</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Destination</a>
                <ul className="sub-menu">
                  <li>
                    <a href="destination.html">Destination</a>
                  </li>
                  <li>
                    <a href="destination-details.html">Destination Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Tour Types</a>
                <ul className="sub-menu">
                  <li>
                    <a href="tour.html">Tour</a>
                  </li>
                  <li>
                    <a href="tour-details.html">Tour Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu End */}

      {/* Header Area start */}
      {comapnyData?.map((data, index) => (
        <header className="ot-header header-layout1" key={index}>
          <div className="header-top">
            <div className="container">
              <div className="row justify-content-center justify-content-lg-between align-items-center">
                <div className="col-auto d-none d-lg-block">
                  <div className="header-links">
                    <ul>
                      <li>
                        <i className="fal fa-phone" />
                        <Link to={`tel:${data.phone}`}>{data.phone}</Link>
                      </li>
                      <li className="d-none d-xl-inline-block">
                        <i className="fal fa-envelope" />
                        <Link to={`mailto:${data.email}`}>{data.email}</Link>
                      </li>
                      <li>
                        <i className="fal fa-location-dot" />
                        {data.address}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="header-links">
                    <ul>
                      <li className="d-none d-lg-inline-block">
                        <i className="far fa-user" />
                        <a href="contact.html">Login / Register</a>
                      </li>
                      <li>
                        <div className="header-social">
                          <span className="social-title">Follow Us:</span>
                          {socialData?.map((data, index) => (
                            <Link to={data.link} key={index}>
                              <i className={data.title} />
                            </Link>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky-wrapper">
            {/* Main Menu Area */}
            <div className="menu-area">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <Link to="/">
                        <img src={data.url} alt="Travon" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        {parentMenuData.map((parentMenu, parentIndex) => (
                          <li
                            key={parentIndex}
                            className="menu-item-has-children"
                            onMouseEnter={() => handleMouseEnter(parentMenu.id)}
                          >
                            <Link to={parentMenu.slug}>{parentMenu.menu}</Link>
                            {childMenuData[parentMenu.id] &&
                              childMenuData[parentMenu.id].length > 0 && (
                                <ul className="sub-menu">
                                  {childMenuData[parentMenu.id] &&
                                    childMenuData[parentMenu.id].map(
                                      (childMenu, childIndex) => (
                                        <li key={childIndex}>
                                          <Link to={childMenu.slug}>
                                            {childMenu.menu}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <button
                      type="button"
                      className="ot-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <div className="header-button">
                      <button
                        type="button"
                        className="icon-btn searchBoxToggler"
                      >
                        <i className="far fa-search" />
                      </button>
                      <a href="#" className="icon-btn sideMenuToggler">
                        <i className="fa-regular fa-bars" />
                      </a>
                      <a href="contact.html" className="ot-btn ml-25">
                        Book Your Stay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="logo-bg" />
            </div>
          </div>
        </header>
      ))}
      {/* Header area end */}
    </>
  );
};

export default Navbar;
