import { createContext, ReactNode, useContext, useState } from "react";

type LanguageCode = "en" | "cs";
interface LsiContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LsiContext = createContext<LsiContextType | undefined>(undefined);

export function LsiProvider({ children }: { children: ReactNode }) {
  function getDefaultLanguage(): LanguageCode {
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === "cs" ? "cs" : "en";
  }

  const [language, setLanguage] = useState<LanguageCode>(getDefaultLanguage);

  return (
    <LsiContext.Provider value={{ language, setLanguage }}>
      {children}
    </LsiContext.Provider>
  );
}

export function useLsi() {
  const context = useContext(LsiContext);
  if (!context) {
    throw new Error("useLsi must be used within an LsiProvider");
  }
  return context;
}
