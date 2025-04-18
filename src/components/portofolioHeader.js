import { useEffect, useState } from 'react';
import { handleCurrentLanguage, currentLanguage } from '../utils/globalVars';
import frenchFlag from '../assets/france.png';
import ukFlag from '../assets/united-kingdom.png';
import chinaFlag from '../assets/china.png';
const PortofolioHeader = ({ activeTab, fnSetActiveTab }) => {

    const [currentLanguageEffect, setCurrentLanguageEffect] = useState(currentLanguage);
    const [activeTabEffect, setActiveTabEffect] = useState("home");

    useEffect(() => { }, [currentLanguageEffect]);

    const handleLanguageEffect = (lang) => {
        // fnSetActiveTab(currentLanguage.activeTabHome)
        handleCurrentLanguage(lang)
        setCurrentLanguageEffect(currentLanguage)

        console.log("activeTabEffect", activeTabEffect);

        if (activeTabEffect === "home") {
            fnSetActiveTab(currentLanguage.activeTabHome)
        } else if (activeTabEffect === "projects") {
            fnSetActiveTab(currentLanguage.activeTabProjects)
        } else if (activeTabEffect === "contact") {
            fnSetActiveTab(currentLanguage.activeTabContact)
        }
    }

    const handleActiveTabEffect = (active, tab) => {
        console.log("tab", tab);

        setActiveTabEffect(active)
        fnSetActiveTab(tab)
    }

    return (
        <header className="portfolio-header">
            <nav className="main-nav">
                <button
                    className={activeTab === currentLanguage.activeTabHome ? 'active' : ''}
                    onClick={() => handleActiveTabEffect("home", currentLanguage.activeTabHome)}
                >
                    {currentLanguage.activeTabHome}
                </button>
                <button
                    className={activeTab === currentLanguage.activeTabProjects ? 'active' : ''}
                    onClick={() => handleActiveTabEffect('projects', currentLanguage.activeTabProjects)}
                >
                    {currentLanguage.activeTabProjects}
                </button>
                <button
                    className={activeTab === currentLanguage.activeTabContact ? 'active' : ''}
                    onClick={() => handleActiveTabEffect('contact', currentLanguage.activeTabContact)}
                >
                    {currentLanguage.activeTabContact}
                </button>
            </nav>
            <div className="language-selector">
                <button
                    onClick={() => handleLanguageEffect('fr')}
                    className="lang-btn"
                >
                    <img src={frenchFlag} alt="french flag" className="lang-icon" />FR
                </button>
                <button
                    onClick={() => handleLanguageEffect('en')}
                    className="lang-btn"
                >
                    <img src={ukFlag} alt="UK flag" className="lang-icon" />EN
                </button>
                <button
                    onClick={() => handleLanguageEffect('zh')}
                    className="lang-btn"
                >
                    <img src={chinaFlag} alt="china flag" className="lang-icon" />中文
                </button>
            </div>
        </header>
    )
}

export default PortofolioHeader;