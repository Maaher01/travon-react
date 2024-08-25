import AboutUs from "../../components/aboutUs/aboutUs";
import CounterUp from "../../components/counterUp/counterUp";
import FeatureArea from "../../components/featureArea/featureArea";
import CtaArea from "../../components/ctaArea/ctaArea";
import TourArea from "../../components/tourArea/tourArea";
import DealArea from "../../components/dealArea/dealArea";
import HomeVideo from "../../components/homeVideo/homeVideo";
import Testimonial from "../../components/testimonial/testimonial";
import NewsUpdate from "../../components/newsUpdate/newsUpdate";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import SliderArea from "../../components/sliderArea/SliderArea";

const Home = () => {
  return (
    <>
      <SliderArea />
      <AboutUs />
      <CounterUp />
      <FeatureArea />
      <CtaArea />
      <TourArea />
      <DealArea />
      <HomeVideo />
      <Testimonial />
      <NewsUpdate />
      <SubscriptionArea />
    </>
  );
};

export default Home;
