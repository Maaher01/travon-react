import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../api/api";

const CtaArea = () => {
  const [hotelDiscountContent, setHotelDiscountContent] = useState([]);
  const [flightDiscountContent, setFlightDiscountContent] = useState([]);

  useEffect(() => {
    fetchHotelDiscountContent();
    fetchFlightDiscountContent();
  }, []);

  const fetchHotelDiscountContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const homeContent = data.filter((content) => content.id === 15);
      setHotelDiscountContent(homeContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const fetchFlightDiscountContent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/content`);
      const data = await response.data;
      const homeContent = data.filter((content) => content.id === 16);
      setFlightDiscountContent(homeContent);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <section className="" data-pos-for="#tour-sec" data-sec-pos="bottom-half">
        <div className="container">
          <div className="row">
            {hotelDiscountContent?.map((data, index) => (
              <div className="col-lg-6 mb-30 mb-xl-0" key={index}>
                <div className="offer-card" data-bg-src={data.url}>
                  <h2 className="offer-card__offer">{data.heading}</h2>
                  <h3 className="offer-card__text box-title">
                    {data.sub_heading}
                  </h3>
                  <Link to={data.link} className="ot-btn">
                    {data.button}
                  </Link>
                </div>
              </div>
            ))}
            {flightDiscountContent?.map((data, index) => (
              <div className="col-lg-6" key={index}>
                <div className="offer-card" data-bg-src={data.url}>
                  <h2 className="offer-card__offer">{data.heading}</h2>
                  <h3 className="offer-card__text box-title">
                    {data.sub_heading}
                  </h3>
                  <Link to={data.link} className="ot-btn">
                    {data.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaArea;
