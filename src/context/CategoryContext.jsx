import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const CategoryContext = createContext({});

export const CategoryDataProvider = ({ children }) => {
  const [categoryContent, setCategoryContent] = useState([]);
  const [categoryComponent, setCategoryComponent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCategoryContent = async () => {
      try {
        const response = await axios.get(`${baseUrl}/content`);
        const data = await response.data;
        const categoryContent = data.find((content) => content.id === 28);
        setCategoryContent(categoryContent);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCategoryComponent = async () => {
      try {
        const response = await axios.get(`${baseUrl}/component`);
        const data = await response.data;
        const categoryComponents = data.filter(
          (component) => component.content === "28"
        );
        setCategoryComponent(categoryComponents);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryContent();
    fetchCategoryComponent();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categoryContent,
        categoryComponent,
        setCategoryContent,
        setCategoryComponent,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
