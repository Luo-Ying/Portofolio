import { setCurrentLanguage } from '../utils/globalVars';
import frenchFlag from '../assets/france.png';
import ukFlag from '../assets/united-kingdom.png';
import chinaFlag from '../assets/china.png';
const PortofolioHeader = ({ activeTab, fnSetActiveTab }) => {
    return (
        <header className="portfolio-header">
            <nav className="main-nav">
                <button
                    className={activeTab === 'accueil' ? 'active' : ''}
                    onClick={() => fnSetActiveTab('accueil')}
                >
                    Accueil
                </button>
                <button
                    className={activeTab === 'projets' ? 'active' : ''}
                    onClick={() => fnSetActiveTab('projets')}
                >
                    Projets
                </button>
                <button
                    className={activeTab === 'contact' ? 'active' : ''}
                    onClick={() => fnSetActiveTab('contact')}
                >
                    Contact
                </button>
            </nav>
            <div className="language-selector">
                <button
                    onClick={() => setCurrentLanguage('fr')}
                    className="lang-btn"
                >
                    <img src={frenchFlag} alt="french flag" className="lang-icon" />FR
                </button>
                <button
                    onClick={() => setCurrentLanguage('en')}
                    className="lang-btn"
                >
                    <img src={ukFlag} alt="UK flag" className="lang-icon" />EN
                </button>
                <button
                    onClick={() => setCurrentLanguage('zh')}
                    className="lang-btn"
                >
                    <img src={chinaFlag} alt="china flag" className="lang-icon" />中文
                </button>
            </div>
        </header>
    )
}

export default PortofolioHeader;