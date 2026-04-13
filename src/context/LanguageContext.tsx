"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "sv";

const LanguageContext = createContext<{
  lang: Language;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const toggle = () => setLang((l) => (l === "en" ? "sv" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
