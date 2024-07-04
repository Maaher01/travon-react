const HomeVideo = () => {
  return (
    <>
      <section
        className="space-top bg-auto"
        data-bg-src="/src/assets/img/bg/bg_map_1.png"
      >
        <div className="">
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title justify-content-center">
                <span className="shape left">
                  <span className="dots" />
                </span>
                Watch Our Story
                <span className="shape right">
                  <span className="dots" />
                </span>
              </span>
              <h2 className="sec-title">
                Unforgettable Travel Experiences <br />
                Get Your Guide
              </h2>
              <div className="btn-group pb-3 mt-30 justify-content-center">
                <a href="contact.html" className="ot-btn">
                  Contact Us
                </a>
                <a href="contact.html" className="ot-btn style3">
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
              <img src="/src/assets/img/normal/video_1.jpg" alt="Video" />
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn style3 popup-video"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeVideo;
