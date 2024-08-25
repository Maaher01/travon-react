import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const Destination = () => {
  const [destinationComponent, setDestinationComponent] = useState([]);

  useEffect(() => {
    fetchDestinationComponents();
  }, []);

  const fetchDestinationComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const destinationComponents = data.filter(
        (component) => component.content === "19"
      );
      setDestinationComponent(destinationComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <BreadCumb
        parent={"Home"}
        location={"Destinations"}
        title={"Destinations"}
      />

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="dest-sort-bar">
            <div className="row gy-3 align-items-center justify-content-between">
              <div className="col-sm-auto">
                <p className="result">Showing 8 out of 24 destinations</p>
              </div>
              <div className="col-sm-auto">
                <form className="tour-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby form-select nice-select"
                    aria-label="Tour order"
                  >
                    <option
                      value="menu_order"
                      disabled="disabled"
                      selected="selected"
                    >
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            {destinationComponent?.map((comp, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-35" key={index}>
                <div className="trip-box">
                  <div className="trip-box__img">
                    <img src={comp.url} alt="Trip image" />
                  </div>
                  <div className="trip-box__content">
                    <h2 className="trip-box__title box-title">
                      <i className="fas fa-location-dot" />
                      <Link to={`/destination-details/${comp.id}`}>
                        {comp.title}
                      </Link>
                    </h2>
                    <span className="trip-box__count">
                      {comp.sub_title}+ Trips
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ot-pagination mt-3 text-center">
            <ul>
              <li>
                <a href="blog.html">1</a>
              </li>
              <li>
                <a href="blog.html">2</a>
              </li>
              <li>
                <a href="blog.html">3</a>
              </li>
              <li>
                <a href="blog.html">
                  <i className="far fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default Destination;
