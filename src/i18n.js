import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';

import 'moment/locale/fr';
import 'moment/locale/en-gb';

const fallbackLng = ['fr'];
const availableLanguages = ['fr', 'en'];

// availableLanguages.forEach((element) => {
//   if (element !== 'en') {
//     import(`moment/locale/${element}`);
//   }
// });

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    whitelist: availableLanguages,
    fallbackLng,
    debug: true,
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'currentDate')
          return moment(value)
            .locale(lng)
            .format('LL');
        return value;
      } //if the format is 'currentDate', then take its __value__ transfom it to a moment object, translate it to the current language and show it in Month DD, YYYY format.
    },
    react: {
      wait: true
    }
  });

export default i18n;
