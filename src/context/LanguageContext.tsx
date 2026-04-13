"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "sv";

const LanguageContext = createContext<{
  lang: Language;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [fading, setFading] = useState(false);

  const toggle = () => {
    setFading(true);
    setTimeout(() => {
      setLang((l) => (l === "en" ? "sv" : "en"));
      setFading(false);
    }, 180);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.18s ease",
        }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
