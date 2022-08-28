import { Language } from "../app/app"

const RU: {[index: string]:string} = {
   language: 'ЯЗЫК - RU', 
   theme: 'тема',
   theory: 'Теория',
   practice: 'Практика',
   start: 'ЗАПУСК',
   pause: 'ПАУЗА', 
   changeMode: 'ИЗМЕНИТЬ РЕЖИМ',
   closeSession:'ЗАКРЫТЬ СЕССИЮ',
   contacts:'Вы можете co мной в telegram \u00A0',
}
const EN: {[index: string]:string} = {
   language: 'LANGUAGE - EN', 
   theme: 'THEME',
   theory: 'Theory',
   practice: 'Practice',
   start: 'START',
   pause: 'PAUSE', 
   changeMode: 'CHANGE MODE',
   closeSession:'CLOSE SESSION',
   contacts:'Contact me via telegram \u00A0',
}

export const translation = (language: string, key:string,) => {
   if (language === Language.RU) {
     return RU[key] 
   } else {
      return EN[key]
   }
}