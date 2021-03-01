//libreria idiomas
import es from './es.json'
import en from './en.json'
import i18next from 'i18next'

export default i18next.init({
    lng: 'es',
    fallbackLng: 'en',
    debug: true,
    resources: {
      es,
      en
    }
})