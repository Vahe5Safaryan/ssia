import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './Locales/en.json';
import ruTranslations from './Locales/ru.json';
import hyTranslations from './Locales/hy.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            ru: { translation: ruTranslations },
            hy: { translation: hyTranslations },
        },
        lng: 'hy', // Set the default language
        fallbackLng: 'hy', // Fallback language in case the user's preferred language isn't available
        interpolation: {
            escapeValue: false, // React already escapes the values, so don't escape again
        },
    });

export default i18n;
