import './App.css';

import React, { useState } from 'react';

import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectsPage';
import ContactPage from './pages/contactPage';
import PortofolioHeader from './components/portofolioHeader';
import ProjectDetailsPage from './components/projectDetails';
import { currentLanguage } from './utils/globalVars';

function App() {
  const [activeTab, setActiveTab] = useState(currentLanguage.activeTabHome);

  const [projectSelectedToDisplay, setProjectSelectedToDisplay] = useState(null);

  const renderContent = () => {
    if (activeTab === currentLanguage.activeTabHome) {
      return <HomePage goProjectsPage={removeProjectSelectedIfTabActive} projectSelectedToDisplay={projectSelectedToDisplay} setProjectSelectedToDisplay={setProjectSelectedToDisplay} />;
    } else if (activeTab === currentLanguage.activeTabProjects) {
      return <ProjectsPage projectSelectedToDisplay={projectSelectedToDisplay} setProjectSelectedToDisplay={setProjectSelectedToDisplay} />;
    } else if (activeTab === currentLanguage.activeTabContact) {
      return <ContactPage />;
    }
  };

  const removeProjectSelectedIfTabActive = (tab, isRemoveProjectSelected = true) => {
    setActiveTab(tab);
    if (isRemoveProjectSelected) {
      setProjectSelectedToDisplay(null);
    }
  }

  return (
    <div className="portfolio-app">
      <PortofolioHeader activeTab={activeTab} fnSetActiveTab={removeProjectSelectedIfTabActive} />
      <main className="portfolio-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
