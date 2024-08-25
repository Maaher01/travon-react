import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import GalleryContext from "../../context/GalleryContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const { galleryInfo } = useContext(GalleryContext);
  const [galleryContent, setGalleryContent] = useState([]);
  const [galleryComponent, setGalleryComponent] = useState([]);

  useEffect(() => {
    fetchGalleryContent();
    fetchGalleryComponents();
  }, []);

  const fetchGalleryContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const galleryContent = data.filter((content) => content.id === 27);
      setGalleryContent(galleryContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchGalleryComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const galleryComponents = data.filter(
        (component) => component.content === "27"
      );
      setGalleryComponent(galleryComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <BreadCumb
        parent={"Home"}
        location={"Image & Video Gallery"}
        title={"Image & Video Gallery"}
      />

      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>
              Travel Image
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title">Image Gallery</h2>
          </div>
          <div className="row gy-30 masonary-active">
            {galleryInfo?.map((img, index) => (
              <div className="col-md-6 col-xxl-auto filter-item" key={index}>
                <div className="gallery-card">
                  <div className="gallery-img">
                    <img src={img.url} alt="gallery image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-smoke space">
        <div className="container mb-4 pb-5">
          {galleryContent?.map((content, index) => (
            <div className="title-area text-center" key={index}>
              <span className="sub-title justify-content-center">
                <span className="shape left">
                  <span className="dots" />
                </span>
                {content.sub_heading}
                <span className="shape right">
                  <span className="dots" />
                </span>
              </span>
              <h2 className="sec-title">{content.heading}</h2>
            </div>
          ))}
          <div className="row gy-30 masonary-active">
            {galleryComponent?.map((comp, index) => (
              <div className="col-md-6 col-xxl-auto filter-item" key={index}>
                <div className="gallery-video">
                  <div className="gallery-img">
                    <img src={comp.url} alt="gallery image" />
                    <Link href={comp.link} className="play-btn popup-video">
                      <i className="far fa-play" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SubscriptionArea />
      </div>
    </>
  );
};

export default GalleryPage;
