import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import SocialContext from "../../context/SocialContext";
import CompanyContext from "../../context/CompanyContext";
import GalleryContext from "../../context/GalleryContext";
import { Link } from "react-router-dom";

const FooterArea = () => {
  const { menus } = useContext(MenuContext);
  const { companyInfo } = useContext(CompanyContext);
  const { socialInfo } = useContext(SocialContext);
  const { galleryInfo } = useContext(GalleryContext);

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        style={{ marginTop: "-6rem" }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="ot-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img
                          src={"/src/assets/img/logo-white.svg"}
                          alt="Travon"
                        />
                      </a>
                    </div>
                    <p className="about-text">{companyInfo.description}</p>
                    <div className="ot-social">
                      {socialInfo?.map((social, index) => (
                        <a href={social.link} key={index}>
                          <i className={social.title} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {menus?.map((menu, index) => (
                        <li key={index}>
                          <Link to={menu.slug}>{menu.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
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
                        <Link className="info-box_link">
                          {companyInfo.mobile}
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
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Gallery Showcase</h3>
                  <div className="sidebar-gallery">
                    {galleryInfo?.map((img, index) => (
                      <div className="gallery-thumb" key={index}>
                        <img src={img.url} alt="Gallery Image" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap style2">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> {getYear()}
                  <a href="https://www.softintechnology.com/" target="_blank">
                    {" "}
                    Softin Technology Ltd
                  </a>
                  . All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Terms of Use</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Environmental Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterArea;
