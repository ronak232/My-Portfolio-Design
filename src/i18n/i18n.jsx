import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";

// Initizalition of i18n
i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    resources:{
        en:{
            translation:{
                greeting:"Hello, Welcome!",
            }
        }
    }
});
