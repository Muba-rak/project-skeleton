import { createContext, useContext } from "react";
const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);
const baseURL = "https://api-post-73q2.onrender.com/api/v1";

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ baseURL }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
