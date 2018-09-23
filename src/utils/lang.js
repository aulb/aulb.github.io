import { defaultLanguage } from './constants';

/**
 * Super basic lang file, pretty much a const
 */
const l10n = {
  english: {
    seeMore: 'switch between different post types:',
    introRepeat: ', currently based in the bay area',
    about: '',
    blog: 'blog',
    note: 'note',
    link: 'link',
    ferry: 'this is toronto, not bay area. i love toronto yaw',
    madeWithLove: 'made with care by yours truly,'
  },
  japanese: {
    seeMore: 'ポストタイプ変えて：',
    introRepeat: '、ベイエリアで',
    about: '',
    blog: 'ブログ',
    note: 'ノート',
    link: 'リンク',
    ferry: '素晴しく綺麗でした',
    madeWithLove: '愛情を込めて作った😘',
  },
};

/**
 * Standardize fetcher, by default if language not found, give english back.
 */
const getLocale = (language, tag) => {
  if (l10n[language] && l10n[language][tag]) return l10n[language][tag];
  if (l10n[defaultLanguage] && l10n[defaultLanguage][tag]) return l10n[defaultLanguage][tag];
  return null;
};

export default getLocale;
