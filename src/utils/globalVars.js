import dict from './translateFile';

// 语言选项
const LANGUAGES = {
    CHINESE: dict.zh,
    FRENCH: dict.fr,
    ENGLISH: dict.en
};

const LANGUAGES_OPTIONS = {
    'zh': LANGUAGES.CHINESE,
    'fr': LANGUAGES.FRENCH,
    'en': LANGUAGES.ENGLISH
};

// 默认语言
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;

// 当前语言
export let currentLanguage = DEFAULT_LANGUAGE;

// 更新当前语言
export const handleCurrentLanguage = (lang) => {

    if (Object.keys(LANGUAGES_OPTIONS).includes(lang)) {
        currentLanguage = LANGUAGES_OPTIONS[lang];
    }

};
