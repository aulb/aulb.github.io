import { localStorageQuery, defaultLanguage } from './constants';

export const setLanguageFromLocalStorage = (lang) => {
  try {
    localStorage.setItem(localStorageQuery.language, lang);
  } catch (err) {
    console.log(err);
  }
};

export const getLanguageFromLocalStorage = () => {
  let lang;
  try {
    lang = localStorage.getItem(localStorageQuery.language);
  } catch (err) {
    console.log(err);
  }
  return lang || defaultLanguage;
};
