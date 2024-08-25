import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import DOMPurify from "dompurify";

const PercentageArea = () => {
  const [percentageContent, setPercentageContent] = useState([]);
  const [percentageComponent, setPercentageComponent] = useState([]);

  useEffect(() => {
    fetchPercentageContent();
    fetchPercentageComponents();
  }, []);

  const fetchPercentageContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const percentageContent = data.filter((content) => content.id === 24);
      setPercentageContent(percentageContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchPercentageComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const percentageComponents = data.filter(
        (component) => component.content === "24"
      );
      setPercentageComponent(percentageComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const sanitizeContent = (content) => {
    return DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
  };

  return (
    <div className="overflow-hidden bg-smoke space">
      <div className="container">
        {percentageContent?.map((content, index) => (
          <div className="row" key={index}>
            <div className="col-xl-6 pe-xxl-5 text-center text-xl-start">
              <div className="title-area mb-35">
                <span className="sub-title justify-content-center justify-content-xl-start">
                  <span className="shape left d-inline-block d-xl-none">
                    <span className="dots" />
                  </span>
                  {content.sub_heading}
                  <span className="shape right">
                    <span className="dots" />
                  </span>
                </span>
                <h2 className="sec-title">{content.heading}</h2>
              </div>
              <p className="mt-n2 mb-40">
                {sanitizeContent(content.description)}
              </p>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Countryside</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    <div className="progress-value">85%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Vineyard</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    <div className="progress-value">95%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Wine Tasting</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}>
                    <div className="progress-value">60%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="img-box2">
                <div className="img1">
                  <img src={content.url} alt="About" />
                </div>
                <div className="ot-video" data-overlay="title" data-opacity={2}>
                  <img src="/src/assets/img/normal/about_2_2.jpg" alt="Video" />
                  <a href={content.link} className="play-btn popup-video">
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="shape1">
                  <img
                    src="/src/assets/img/normal/about_shape_2.svg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentageArea;
