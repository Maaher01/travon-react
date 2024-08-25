import { useContext, useState } from "react";
import MenuContext from "../../context/MenuContext";
import SocialContext from "../../context/SocialContext";
import CompanyContext from "../../context/CompanyContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/api";

const Navbar = () => {
  const { menus } = useContext(MenuContext);
  const { companyInfo } = useContext(CompanyContext);
  const { socialInfo } = useContext(SocialContext);

  const [childMenuData, setChildMenuData] = useState({});

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
                <Link to="/">
                  <img src={companyInfo.url} alt="Travon" />
                </Link>
              </div>
              <p className="about-text">{companyInfo.description}</p>
              {socialInfo?.map((social, index) => (
                <div className="ot-social" key={index}>
                  <Link to={social.link}>
                    <i className={social.title} />
                  </Link>
                </div>
              ))}
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
                <p className="info-box_text">{companyInfo.address}</p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-phone" />
                </div>
                <p className="info-box_text">
                  <Link
                    to={`tel:${companyInfo.phone}`}
                    className="info-box_link"
                  >
                    {companyInfo.phone}
                  </Link>
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-envelope" />
                </div>
                <p className="info-box_text">
                  <Link
                    to={`mailto:${companyInfo.email}`}
                    className="info-box_link"
                  >
                    {companyInfo.email}
                  </Link>
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
              {menus?.map((menu, index) => (
                <li className="menu-item-has-children" key={index}>
                  <Link to={menu.slug}>{menu.menu}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Menu End */}
      {/* Header Area start */}
      <header className="ot-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fal fa-phone" />
                      <Link to={`tel:${companyInfo.phone}`}>
                        {companyInfo.phone}
                      </Link>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fal fa-envelope" />
                      <Link to={`mailto:${companyInfo.email}`}>
                        {companyInfo.email}
                      </Link>
                    </li>
                    <li>
                      <i className="fal fa-location-dot" />
                      {companyInfo.address}
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
                        {socialInfo?.map((social, index) => (
                          <Link to={social.link} key={index}>
                            <i className={social.title} />
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
                      <img src={companyInfo.url} alt="Travon" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {menus.map((menu, index) => (
                        <li
                          key={index}
                          className="menu-item-has-children"
                          onMouseEnter={() => handleMouseEnter(menu.id)}
                        >
                          <Link to={menu.slug}>{menu.menu}</Link>
                          {childMenuData[menu.id] &&
                            childMenuData[menu.id].length > 0 && (
                              <ul className="sub-menu">
                                {childMenuData[menu.id] &&
                                  childMenuData[menu.id].map(
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
                    <button type="button" className="icon-btn searchBoxToggler">
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

      {/* Header area end */}
    </>
  );
};

export default Navbar;
