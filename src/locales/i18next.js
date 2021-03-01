//libreria idiomas

import i18next from 'i18next'

fetch('http://localhost:8081/idiomas/lang/es')
   .then(res=>res.json)
   .then(datos=>{
     i18next.addResources('es','translation',datos)
   })

fetch('http://localhost:8081/idiomas/lang/en')
   .then(res=>res.json)
   .then(datos=>{
     i18next.addResources('en','translation',datos)
   })

export default i18next.init({
    lng: 'es',
    fallbackLng: 'en',
    debug: true,
    resources: {
      es:{
        translation:{}
      },
      en:{
        translation:{}
      }
    }
})