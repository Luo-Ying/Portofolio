// 语言选项
export const LANGUAGES = {
    CHINESE: 'zh',
    FRENCH: 'fr',
    ENGLISH: 'en'
};

// 默认语言
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;

// 当前语言
export let currentLanguage = DEFAULT_LANGUAGE;

// 更新当前语言
export const setCurrentLanguage = (lang) => {
    if (Object.values(LANGUAGES).includes(lang)) {
        currentLanguage = lang;
    }
};
