import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const GalleryPage = () => {
  return (
    <>
      <BreadCumb
        location={"Image and Video Gallery"}
        title={"Image and Video Gallery"}
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
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_1.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_1.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_2.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_2.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_3.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_3.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_4.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_4.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_5.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_5.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_1_6.jpg"
                    alt="gallery image"
                  />
                  {/* <a
                    href="assets/img/gallery/gallery_1_6.jpg"
                    className="gallery-btn popup-image"
                  >
                    <i className="fas fa-eye" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-smoke space">
        <div className="container mb-4 pb-5">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>
              Travel Video
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title">Video Gallery</h2>
          </div>

          <div className="row gy-30 masonary-active">
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-video">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_2_1.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-video">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_2_2.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-video">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_2_3.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-video">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_2_4.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-auto filter-item">
              <div className="gallery-video">
                <div className="gallery-img">
                  <img
                    src="/src/assets/img/gallery/gallery_2_5.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="far fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubscriptionArea />
      </div>
    </>
  );
};

export default GalleryPage;
