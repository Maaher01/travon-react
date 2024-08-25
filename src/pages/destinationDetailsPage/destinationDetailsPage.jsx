import BreadCumb from "../../components/breadcumb/breadcumb";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";

const DestinationDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [destinationComponent, setDestinationComponent] = useState([]);

  useEffect(() => {
    fetchDestinationComponent(id);
  }, [id]);

  const fetchDestinationComponent = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/component/${id}`);
      const destinationComponent = await response.data;
      setDestinationComponent(destinationComponent);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <BreadCumb
        parent={"Destination"}
        title={destinationComponent.title}
        location={destinationComponent.title}
      />

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="destination-details">
            <div
              dangerouslySetInnerHTML={{
                __html: destinationComponent.description,
              }}
            />
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default DestinationDetailsPage;
