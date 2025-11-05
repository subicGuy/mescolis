'use client';

import PropTypes from 'prop-types';
import { useMemo, useState, useContext, createContext  } from 'react';

import { translations } from '../locales/translations';
import { setLanguage as setGlobalLanguage } from '../services/TranslationService'; // Import the service

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get the stored language or default to 'en'
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('userLanguage');
      if (storedLang) {
        // Ensure the global service is synchronized on initial load
        setGlobalLanguage(storedLang);
        return storedLang;
      }
    }
    return 'en';
  });

  // Memoize the value object to prevent re-creating it on every render
  const value = useMemo(() => {
    const trans = (key) => translations[language][key] || key;

    const changeLanguage = (lang) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('userLanguage', lang);
      }
      setLanguage(lang);
      setGlobalLanguage(lang); // Sync with global service
    };

    return { trans, changeLanguage, language };
  }, [language]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTranslation = () => useContext(TranslationContext);
