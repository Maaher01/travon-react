import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const CompanyContext = createContext({});

export const CompanyDataProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/companyprofile`);
        const data = await response.data[0];
        setCompanyInfo(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        companyInfo,
        setCompanyInfo,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
