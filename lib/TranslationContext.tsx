'use client';
import { createContext, useContext, useState, useEffect } from 'react';
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
  language: 'fr',
  setLanguage: () => {},
  t: (key) => key,
};

export const TranslationContext = createContext<TranslationContextType>(defaultContext);
