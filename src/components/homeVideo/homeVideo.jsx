import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/api";

const HomeVideo = () => {
  const [videoContent, setVideoContent] = useState([]);

  useEffect(() => {
    fetchVideoContent();
  }, []);

  const fetchVideoContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const homeContent = data.filter((content) => content.id === 18);
      setVideoContent(homeContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <section
        className="space-top bg-auto"
        data-bg-src="/src/assets/img/bg/bg_map_1.png"
      >
        <div className="">
          {videoContent?.map((data, index) => (
            <div className="container" key={index}>
              <div className="title-area text-center">
                <span className="sub-title justify-content-center">
                  <span className="shape left">
                    <span className="dots" />
                  </span>
                  {data.sub_heading}
                  <span className="shape right">
                    <span className="dots" />
                  </span>
                </span>
                <h2 className="sec-title">{data.heading}</h2>
                <h2 className="sec-title">{data.title}</h2>
                <div class="btn-group pb-3 mt-30 justify-content-center">
                  <a href="contact.html" class="ot-btn">
                    Contact Us
                  </a>
                  <a href="contact.html" class="ot-btn style3">
                    Book Now
                  </a>
                </div>
              </div>
              <div
                className="ot-video"
                data-overlay="title"
                data-opacity={5}
                data-pos-for=".testi-sec"
                data-sec-pos="bottom-half"
              >
                <img src={data.url} alt="Video" />
                <Link to={data.link} className="play-btn style3 popup-video">
                  <i className="fas fa-play" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeVideo;
