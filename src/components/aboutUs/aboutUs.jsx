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
                </div>
              </div>

              <div className="col-xl-6 pe-xl-4">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    {data.sub_heading}
                    <span className="shape right">
                      <span className="dots"></span>
                    </span>
                  </span>
                  <h2 className="sec-title">{data.heading}</h2>
                </div>
                <p className="mt-n2 mb-35">{data.sub_title}</p>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
