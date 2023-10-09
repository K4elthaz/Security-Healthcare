// Translate.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Translate() {
  const { i18n } = useTranslation();
  const [isJapanese, setIsJapanese] = useState(false);

  const toggleLanguage = () => {
    setIsJapanese(!isJapanese);
    const newLanguage = isJapanese ? 'en' : 'jp';
    i18n.changeLanguage(newLanguage);
  };

  return { toggleLanguage };
}

export default Translate;
