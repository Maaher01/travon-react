import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import FooterArea from "./components/footerArea/footerArea";
import Home from "./components/home/home";
import ContactPage from "./pages/contactPage/contactPage";
import TeamPage from "./pages/teamPage/teamPage";
import TeamDetailsPage from "./pages/teamDetailsPage/teamDetailsPage";
import Destination from "./pages/destination/destination";
import DestinationDetailsPage from "./pages/destinationDetailsPage/destinationDetailsPage";
import TourPage from "./pages/tourPage/tourPage";
import TourDetailsPage from "./pages/tourDetailsPage/tourDetailsPage";
import BlogPage from "./pages/blogPage/blogPage";
import BlogDetailsPage from "./pages/blogDetailsPage/blogDetailsPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import GalleryPage from "./pages/galleryPage/galleryPage";
import Error from "./pages/error/error";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Destination />} path="/destination" />
        <Route
          element={<DestinationDetailsPage />}
          path="/destination-details"
        />
        <Route element={<TourPage />} path="/tour" />
        <Route element={<TourDetailsPage />} path="/tour-details" />

        <Route element={<AboutPage />} path="/about" />

        <Route element={<TeamPage />} path="/team" />
        <Route element={<TeamDetailsPage />} path="/team-details" />
        <Route element={<GalleryPage />} path="/gallery" />

        <Route element={<BlogPage />} path="/blog" />
        <Route element={<BlogDetailsPage />} path="/blog-details" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<Error />} path="*" />
      </Routes>
      <FooterArea />
    </>
  );
}

export default App;
