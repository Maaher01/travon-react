import { useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { baseUrl } from "../../api/api";

const SliderArea = () => {
  const [sliderData, setSliderData] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fetchSliderData = useCallback(async () => {
    try {
      const response = await axios.get(`${baseUrl}/slider`);
      setSliderData(response.data);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  }, []);

  useEffect(() => {
    fetchSliderData();
  }, [fetchSliderData]);

  useEffect(() => {
    if (sliderData.length) {
      const elementsWithDataBgSrc = document.querySelectorAll("[data-bg-src]");
      elementsWithDataBgSrc.forEach((element) => {
        const src = element.getAttribute("data-bg-src");
        element.style.backgroundImage = `url(${src})`;
        element.removeAttribute("data-bg-src");
        element.classList.add("background-image");
      });
    }
  }, [sliderData]);

  return (
    <>
      <div className="ot-hero-wrapper hero-1">
        <div className="hero-slider ot-carousel" data-fade="true">
          <Slider {...settings}>
            {sliderData?.map((slider, index) => (
              <div className="ot-hero-slide" key={index}>
                <div className="ot-hero-bg" data-bg-src={slider.url} />
                <div className="container z-index-common">
                  <div className="hero-style1">
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      {slider.title}
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      {slider.sub_title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
