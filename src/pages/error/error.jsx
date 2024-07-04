import { Link } from "react-router-dom";
import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const Error = () => {
  return (
    <>
      <BreadCumb location={"404 - Error Page"} title={"404 - Error Page"} />

      <section className="space">
        <div className="container">
          <div className="error-img">
            <img src="/src/assets/img/normal/error_img.svg" alt="404 image" />
          </div>
          <div className="error-content">
            <h2 className="error-title">Opp’s that page can’t be found</h2>
            <p className="error-text">
              It looks like nothing was found at this location. The page or post
              you are looking for has been moved or removed.
            </p>
            <Link to="/" className="ot-btn">
              <i className="fas fa-home me-2" />
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default Error;
