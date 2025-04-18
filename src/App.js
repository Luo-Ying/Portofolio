import React, { useState } from 'react';
import './App.css';

import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectsPage';
import ContactPage from './pages/contactPage';
import PortofolioHeader from './components/portofolioHeader';
import PortofolioFooter from './components/portofolioFooter';
function App() {
  const [activeTab, setActiveTab] = useState('accueil');


  const renderContent = () => {
    if (activeTab === 'accueil') {
      return <HomePage />;
    } else if (activeTab === 'projets') {
      return <ProjectsPage />;
    } else if (activeTab === 'contact') {
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
