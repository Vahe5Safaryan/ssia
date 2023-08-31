import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './Locales/en.json';
import ruTranslations from './Locales/ru.json';
import hyTranslations from './Locales/hy.json';

let savedLanguage = localStorage.getItem('language');
if (savedLanguage == null) {
    savedLanguage = "hy";
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            ru: { translation: ruTranslations },
            hy: { translation: hyTranslations },
        },
        lng: savedLanguage || 'hy',
        fallbackLng: 'hy',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
