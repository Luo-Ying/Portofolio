import frenchFlag from '../assets/france.png';
import ukFlag from '../assets/united-kingdom.png';
import chinaFlag from '../assets/china.png';
import { currentLanguage } from '../utils/globalVars';

const LanguageSelector = ({ handleLanguageEffect }) => {
    return (
        <div className="language-selector">

            <button
                onClick={() => handleLanguageEffect('fr')}
                className="lang-btn"
                style={{ color: currentLanguage.language === "fr" ? '#ffffff' : '#4a4a4a' }}
            >
                <img src={frenchFlag} alt="french flag" className="lang-icon" />FR
            </button>
            <button
                onClick={() => handleLanguageEffect('en')}
                className="lang-btn"
                style={{ color: currentLanguage.language === "en" ? '#ffffff' : '#4a4a4a' }}
            >
                <img src={ukFlag} alt="UK flag" className="lang-icon" />EN
            </button>
            <button
                onClick={() => handleLanguageEffect('zh')}
                className="lang-btn"
                style={{ color: currentLanguage.language === "zh" ? '#ffffff' : '#4a4a4a' }}
            >
                <img src={chinaFlag} alt="china flag" className="lang-icon" />中文
            </button>
        </div>
    )
}

export default LanguageSelector;