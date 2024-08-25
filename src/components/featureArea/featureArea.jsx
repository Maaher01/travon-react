import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const FeatureArea = () => {
  const [travelContent, setTravelContent] = useState([]);
  const [travelComponent, setTravelComponent] = useState([]);

  useEffect(() => {
    fetchTravelContent();
    fetchTravelComponents();
  }, []);

  const fetchTravelContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const travelContent = data.filter((content) => content.id === 14);
      setTravelContent(travelContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchTravelComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const travelComponents = data.filter(
        (component) => component.content === "14"
      );
      setTravelComponent(travelComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <div className="space">
        <div className="container">
          {travelContent?.map((data, index) => (
            <div className="row align-items-center" key={index}>
              <div className="col-xl-7">
                <div className="title-area mb-30 text-center text-xl-start">
                  <span className="sub-title justify-content-center justify-content-xl-start">
                    <span className="shape left d-inline-block d-xl-none">
                      <span className="dots" />
                    </span>
                    Why Choose Us
                    <span className="shape right">
                      <span className="dots" />
                    </span>
                  </span>
                  <h2 className="sec-title">{data.heading}</h2>
                </div>
                <p className="mt-n2 mb-35 text-center text-xl-start">
                  {data.sub_heading}
                </p>
                <div className="feature-media-wrap">
                  {travelComponent?.map((data, index) => (
                    <div className="feature-media" key={index}>
                      <div className="feature-media__icon">
                        <i className={data.heading} />
                      </div>
                      <div className="media-body">
                        <h3 className="feature-media__title">{data.title}</h3>
                        <p className="feature-media__text">{data.sub_title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-5 mt-40 mt-xl-0">
                <div className="text-center">
                  <img src={data.url} alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
