import { useEffect } from "react";
// import { Link } from "react-router-dom";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import BreadCumb from "../../components/breadcumb/breadcumb";
import ContactArea from "../../components/contactArea/contactArea";

const ContactPage = () => {
  useEffect(() => {
    const elementsWithDataBgSrc = document.querySelectorAll("[data-bg-src]");

    elementsWithDataBgSrc.forEach((element) => {
      const src = element.getAttribute("data-bg-src");
      element.style.backgroundImage = `url(${src})`;
      element.removeAttribute("data-bg-src");
      element.classList.add("background-image");
    });
  }, []);

  return (
    <>
      <BreadCumb location={"Contact Us"} />

      {/* Quote Area   */}

      <div className="space">
        <div className="container">
          <div className="row gy-40">
            <div className="col-xl-5">
              <div className="contact-info-wrap">
                <div className="shape-img">
                  <img
                    src="/src/assets/img/shape/contact_shape.png"
                    alt="shape"
                  />
                </div>
                <h3 className="border-title2">Contact Info</h3>
                <div className="contact-info-box">
                  <div className="contact-info">
                    <h4 className="contact-info__title">Contact Number:</h4>
                    <div className="contact-info__icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                        <a href="tel:+65485965789">(+65) - 48596 - 5789</a>
                        <a href="tel:+65485965789">+65-48596-5789</a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h4 className="contact-info__title">Mail Address:</h4>
                    <div className="contact-info__icon bg-theme">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                        <a href="mailto:info@travon.com">info@travon.com</a>
                        <a href="mailto:info.example@gmail.com">
                          info.example@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h4 className="contact-info__title">Office Address:</h4>
                    <div className="contact-info__icon bg-title">
                      <i className="fal fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                        Burnsville, MN 55337 Streat, <br /> United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuzsoft!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Area   */}

      <ContactArea />

      <SubscriptionArea />
    </>
  );
};

export default ContactPage;
