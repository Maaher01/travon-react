import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const GalleryContext = createContext({});

export const GalleryDataProvider = ({ children }) => {
  const [galleryInfo, setGalleryInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/gallery`);
        const data = await response.data;
        setGalleryInfo(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <GalleryContext.Provider
      value={{
        galleryInfo,
        setGalleryInfo,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
