"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';
import type { Language, LanguageContent } from '@/lib/types';
import { pageContent } from '@/lib/data';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  content: LanguageContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const content = useMemo(() => pageContent[language], [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    content,
  }), [language, content]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
