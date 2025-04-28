import { useEffect, useState } from 'react';
import { handleCurrentLanguage, currentLanguage } from '../utils/globalVars';
import DropDownLanguage from './dropDownLanguage';
import LanguageSelector from './languageSelector';
import downloadIcon from '../assets/telecharger.png';

const PortofolioHeader = ({ activeTab, fnSetActiveTab }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [currentLanguageEffect, setCurrentLanguageEffect] = useState(currentLanguage);
    const [activeTabEffect, setActiveTabEffect] = useState("home");

    useEffect(() => { }, [currentLanguageEffect]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLanguageEffect = (lang) => {
        handleCurrentLanguage(lang)
        setCurrentLanguageEffect(currentLanguage)

        if (activeTabEffect === "home") {
            fnSetActiveTab(currentLanguage.activeTabHome, false)
        } else if (activeTabEffect === "projects") {
            fnSetActiveTab(currentLanguage.activeTabProjects, false)
        } else if (activeTabEffect === "contact") {
            fnSetActiveTab(currentLanguage.activeTabContact, false)
        }
    }

    const handleActiveTabEffect = (active, tab) => {
        setActiveTabEffect(active)
        fnSetActiveTab(tab)
    }


    return (
        <header className="portfolio-header">

            {/* <div className="cv-download-link">
                <a>{windowWidth >= 768 ? <img src={downloadIcon} alt="download" /> : ""}CV</a>
            </div> */}

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

            {console.log("window.innerWidth", windowWidth)}


            {windowWidth >= 768 && (
                <LanguageSelector handleLanguageEffect={handleLanguageEffect} />
            )}

            {windowWidth < 768 && (
                <DropDownLanguage handleLanguageEffect={handleLanguageEffect} />
            )}

        </header>
    )
}

export default PortofolioHeader;