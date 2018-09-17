import { availableLanguages, languageTexts } from './constants.js';

export const shuffle = array => {
  let currentIndex = array.length
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const simplePythonRange = end => {
  let array = [];
  for (let i = 0; i < end; i++) {
    array.push(i);
  }

  return array;
};

export const getActivePosts = (data, options) => {
  const allEdges = data.allMarkdownRemark.edges;
  const { selectedType, selectedLanguage } = options;
  return allEdges.filter(edge => {
    const post = edge.node;
    const frontmatter = post.frontmatter;
    const { published, language, type } = frontmatter;
    return published && language === selectedLanguage && type === selectedType;
  });
};

export const getOtherLanguageOption = selectedLanguage => {
  let language = {
    text: languageTexts.english,
    value: availableLanguages.english,
  };

  if (availableLanguages.english === selectedLanguage) {
    language.text = languageTexts.japanese;
    language.value = availableLanguages.japanese;
    return language;
  }
  return language;
};
