import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";

const TeamPage = () => {
  const [expertsComponent, setExpertsComponent] = useState([]);

  useEffect(() => {
    fetchExpertsComponents();
  }, []);

  const fetchExpertsComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/component`);
      const data = await response.data;
      const expertsComponents = data.filter(
        (component) => component.content === "23"
      );
      setExpertsComponent(expertsComponents);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  return (
    <>
      <BreadCumb parent={"Home"} location={"Our Team"} title={"Our Team"} />
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            {expertsComponent?.map((comp, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 mb-30" key={index}>
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src={comp.url} alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus" />
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <Link to={`/team-details/${comp.id}`}>{comp.title}</Link>
                    </h3>
                    <span className="team-desig">{comp.sub_title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default TeamPage;
