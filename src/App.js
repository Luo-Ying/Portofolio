import React, { useState } from 'react';
import './App.css';

import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectsPage';
import ContactPage from './pages/contactPage';
import PortofolioHeader from './components/portofolioHeader';
import PortofolioFooter from './components/portofolioFooter';
import { currentLanguage } from './utils/globalVars';

function App() {
  const [activeTab, setActiveTab] = useState(currentLanguage.activeTabHome);

  const renderContent = () => {
    if (activeTab === currentLanguage.activeTabHome) {
      return <HomePage />;
    } else if (activeTab === currentLanguage.activeTabProjects) {
      return <ProjectsPage />;
    } else if (activeTab === currentLanguage.activeTabContact) {
      return <ContactPage />;
    }
  };

  return (
    <div className="portfolio-app">
      <PortofolioHeader activeTab={activeTab} fnSetActiveTab={setActiveTab} />
      <main className="portfolio-content">
        {renderContent()}
      </main>
      <PortofolioFooter />
    </div>
  );
}

export default App;
