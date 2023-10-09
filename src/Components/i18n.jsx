import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enTranslation from './Translation/en.json';

// Japanese translations
import jaTranslation from './Translation/jp.json';

// Set up i18next configuration
i18next
    .use(initReactI18next)
    .init({
        lng: 'en', // Set default language to English
        fallbackLng: 'en', // Fallback to English if translation for selected language is not available
        debug: true, // Enable debug mode
        resources: {
            en: {
                translation: enTranslation, // English translations
            },
            jp: {
                translation: jaTranslation, // Japanese translations
            },
        },
    });

export default i18next;
