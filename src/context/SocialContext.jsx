import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const SocialContext = createContext({});

export const SocialDataProvider = ({ children }) => {
  const [socialInfo, setSocialInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/social`);
        const data = await response.data;
        setSocialInfo(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocialData();
  }, []);

  return (
    <SocialContext.Provider
      value={{
        socialInfo,
        setSocialInfo,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContext;
