'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = { en, fr };
const defaultLang = 'fr';

type TranslationContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultContext: TranslationContextType = {
  language: defaultLang,
  setLanguage: () => {},
  t: (key) => key,
};

export const TranslationContext = createContext<TranslationContextType>(defaultContext);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(defaultLang);

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
