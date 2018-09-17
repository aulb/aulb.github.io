import { localStorageQuery, defaultLanguage } from './constants';

const storage = (window && window.localStorage) || (global && global.window && global.window.localStorage) || null;
export const setLanguageFromLocalStorage = lang => {
  try {
    storage.setItem(localStorageQuery.language, lang);
  } catch (err) {
    console.log(err);
  }
};

export const getLanguageFromLocalStorage = () => {
  let lang;
  try {
    lang = storage.getItem(localStorageQuery.language);
  } catch (err) {
    console.log(err);
  }
  return lang || defaultLanguage;
};
