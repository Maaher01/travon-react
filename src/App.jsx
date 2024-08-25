import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { MenuDataProvider } from "./context/MenuContext";
import { CompanyDataProvider } from "./context/CompanyContext";
import { SocialDataProvider } from "./context/SocialContext";
import { GalleryDataProvider } from "./context/GalleryContext";
import Home from "./pages/home/home";
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
import Layout from "./layout/Layout";
import { CategoryDataProvider } from "./context/CategoryContext";
import { FeaturedDataProvider } from "./context/FeaturedContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <FeaturedDataProvider>
      <CategoryDataProvider>
        <MenuDataProvider>
          <CompanyDataProvider>
            <SocialDataProvider>
              <GalleryDataProvider>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<Destination />} path="/destination" />
                    <Route
                      element={<DestinationDetailsPage />}
                      path="/destination-details/:id"
                    />
                    <Route element={<TourPage />} path="/packages" />
                    <Route
                      element={<TourDetailsPage />}
                      path="/package-details/:id"
                    />
                    <Route element={<AboutPage />} path="/about-us" />
                    <Route element={<TeamPage />} path="/team" />
                    <Route
                      element={<TeamDetailsPage />}
                      path="/team-details/:id"
                    />
                    <Route element={<GalleryPage />} path="/gallery" />
                    <Route element={<BlogPage />} path="/blogs" />
                    <Route
                      element={<BlogDetailsPage />}
                      path="/blog-details/:id"
                    />
                    <Route element={<ContactPage />} path="/contact-us" />
                    <Route element={<Error />} path="*" />
                  </Route>
                </Routes>
              </GalleryDataProvider>
            </SocialDataProvider>
          </CompanyDataProvider>
        </MenuDataProvider>
      </CategoryDataProvider>
    </FeaturedDataProvider>
  );
}

export default App;
