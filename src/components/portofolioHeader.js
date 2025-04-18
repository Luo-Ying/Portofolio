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
        </header>
    )
}

export default PortofolioHeader;