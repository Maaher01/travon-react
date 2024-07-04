import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { Link } from "react-router-dom";

const FooterArea = () => {
  const [comapnyData, setCompanyData] = useState([]);
  const [parentMenuData, setParentMenuData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

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

  const fetchSocialData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/social`);
      const data = await response.data;
      setSocialData(data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        style={{ marginTop: "-6rem" }}
      >
        <div className="widget-area">
          <div className="container">
            {comapnyData?.map((data, index) => (
              <div className="row justify-content-between" key={index}>
                <div className="col-md-6 col-xl-3">
                  <div className="widget footer-widget">
                    <div className="ot-widget-about">
                      <div className="about-logo">
                        <a href="index.html">
                          <img
                            src="/src/assets/img/logo-white.svg"
                            alt="Travon"
                          />
                        </a>
                      </div>
                      <p className="about-text">{data.description}</p>
                      <div className="ot-social">
                        {socialData?.map((data, index) => (
                          <a href={data.link} key={index}>
                            <i className={data.title} />
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
                        {parentMenuData.map((data, index) => (
                          <li key={index}>
                            <Link to={data.slug}>{data.menu}</Link>
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
                        <p className="info-box_text">{data.address}</p>
                      </div>
                      <div className="info-box">
                        <div className="info-box_icon">
                          <i className="fas fa-phone" />
                        </div>
                        <p className="info-box_text">
                          <Link className="info-box_link">{data.mobile}</Link>
                        </p>
                      </div>
                      <div className="info-box">
                        <div className="info-box_icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <p className="info-box_text">
                          <Link
                            to={`mailto:${data.email}`}
                            className="info-box_link"
                          >
                            {data.email}
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
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_1.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_1.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_2.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_2.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_3.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_3.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_4.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_4.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_5.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_5.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="gallery-thumb">
                        <img
                          src="/src/assets/img/widget/gallery_1_6.jpg"
                          alt="Gallery Image"
                        />
                        <a
                          href="/src/assets/img/widget/gallery_1_6.jpg"
                          className="gallery-btn popup-image"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright-wrap style2">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> {getYear()}
                  <a href="#"> Softin</a>. All Rights Reserved.
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
