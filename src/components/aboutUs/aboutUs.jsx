import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/api";

export const AboutUs = () => {
  const [journeyContent, setJourneyContent] = useState([]);
  const [journeyComponent, setJourneyComponent] = useState([]);

  useEffect(() => {
    fetchJourneyContent();
    fetchJourneyComponents();
  }, []);

  const fetchJourneyContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const homeContent = data.filter((content) => content.id === 13);
      setJourneyContent(homeContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchJourneyComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      console.log(response.data);
      const data = await response.data;
      const homeComponents = data.filter(
        (component) => component.content === "13"
      );
      setJourneyComponent(homeComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <div>
      <div className="space">
        <div className="container">
          {journeyContent?.map((data, index) => (
            <div className="row" key={index}>
              <div className="col-xl-6">
                <div className="img-box1">
                  <div className="img1">
                    <img src={data.url} alt="About" />
                  </div>
                  {/* <div className="img2">
                    <img
                      src="/src/assets/img/normal/about_1_2.jpg"
                      alt="About"
                    />
                  </div> */}
                  <div className="shape1">
                    <img
                      src="/src/assets/img/normal/about_shape_1.svg"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 pe-xl-4">
                <div className="title-area mb-35">
                  <h2 className="sec-title">{data.heading}</h2>
                </div>
                <p className="mt-n2 mb-35">{data.sub_heading}</p>
                <div className="about-media-wrap">
                  {journeyComponent.map((data, index) => (
                    <div className="about-media" key={index}>
                      <div className="about-media_icon">
                        <img src={data.url} alt="icon" />
                      </div>
                      <div className="media-body">
                        <h3 className="about-media_title box-title">
                          {data.title}
                        </h3>
                        <p className="about-media_text">{data.sub_title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="btn-group">
                  <Link to={data.link} className="ot-btn">
                    {data.button}
                  </Link>
                  {/* <div className="customer-avater-wrap">
                    <div className="customer-avater-group">
                      <div className="customer-avater">
                        <img
                          src="/src/assets/img/normal/avater_1_1.jpg"
                          alt="avater"
                        />
                      </div>
                      <div className="customer-avater">
                        <img
                          src="/src/assets/img/normal/avater_1_2.jpg"
                          alt="avater"
                        />
                      </div>
                      <div className="customer-avater">
                        <img
                          src="/src/assets/img/normal/avater_1_3.jpg"
                          alt="avater"
                        />
                      </div>
                      <div className="customer-avater">
                        <img
                          src="/src/assets/img/normal/avater_1_4.jpg"
                          alt="avater"
                        />
                      </div>
                    </div>
                    <p className="mb-0">
                      <span className="text-theme fs-md fw-bold">500k+</span>{" "}
                      Happy Customer
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
