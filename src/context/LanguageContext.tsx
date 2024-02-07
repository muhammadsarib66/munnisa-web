import { createContext, useState, useContext } from "react";
const initialState: any = {
  language: "",
  setLanguage: () => {},
};
const LanguageContext = createContext(initialState);

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
