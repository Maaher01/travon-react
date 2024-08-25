import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const MenuContext = createContext({});

export const MenuDataProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetcMenuData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/menu`);
        const data = await response.data;
        const activeMenus = data.filter((menu) => menu.active === 1);
        setMenus(activeMenus);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetcMenuData();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menus,
        setMenus,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
