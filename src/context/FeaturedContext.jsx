import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const FeaturedContext = createContext({});

export const FeaturedDataProvider = ({ children }) => {
  const [featuredComponents, setFeaturedComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchFeaturedComponents = async () => {
      try {
        const response = await axios.get(`${baseUrl}/component`);
        const data = await response.data;
        const featuredComponents = data
          .filter((component) => component.content === "20")
          .slice(0, 4);
        setFeaturedComponents(featuredComponents);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedComponents();
  }, []);

  return (
    <FeaturedContext.Provider
      value={{
        featuredComponents,
        setFeaturedComponents,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </FeaturedContext.Provider>
  );
};

export default FeaturedContext;
