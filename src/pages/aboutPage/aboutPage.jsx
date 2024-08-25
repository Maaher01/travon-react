import AboutUs from "../../components/aboutUs/aboutUs";
import BreadCumb from "../../components/breadcumb/breadcumb";
import CounterUp from "../../components/counterUp/counterUp";
import HomeVideo from "../../components/homeVideo/homeVideo";
import Testimonial from "../../components/testimonial/testimonial";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import ExpertsArea from "../../components/expertsArea/expertsArea";
import PercentageArea from "../../components/percentageArea/percentageArea";

const AboutPage = () => {
  return (
    <>
      <BreadCumb parent={"Home"} location={"About Us"} title={"About Us"} />
      <AboutUs />
      <PercentageArea />
      <div className="bg-dark2 py-5">
        <CounterUp color={"text-white"} />
      </div>
      <ExpertsArea />
      <HomeVideo />
      <Testimonial />
      <SubscriptionArea />
    </>
  );
};

export default AboutPage;
