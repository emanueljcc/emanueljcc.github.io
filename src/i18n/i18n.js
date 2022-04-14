import i18n from "i18next"
// import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // resources would be bundled with webpack
    // TODO: problem
    // backend: {
    //   // for all available options read the backend"s repository readme file
    //   loadPath: "/locales/{{lng}}/{{ns}}.json"
    // },
    fallbackLng: "es",
    resources: {
      es: {
        translations: require("../../public/locales/es/translation.json")
      },
      en: {
        translations: require("../../public/locales/en/translation.json")
      }
    },
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
  },
  error => {
    if (error) {
      console.error(error);
    }
  })

export default i18n
