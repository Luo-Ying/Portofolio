import { useState } from 'react';

const ProjectsPage =()=>{
    const [activeProjectTab, setActiveProjectTab] = useState('professionnels');

    return (
        <div className="projets-content">
          <div className="project-tabs">
            <button 
              className={activeProjectTab === 'professionnels' ? 'active' : ''} 
              onClick={() => setActiveProjectTab('professionnels')}
            >
              Projets Professionnels
            </button>
            <button 
              className={activeProjectTab === 'academiques' ? 'active' : ''} 
              onClick={() => setActiveProjectTab('academiques')}
            >
              Projets Académiques
            </button>
            <button 
              className={activeProjectTab === 'perso' ? 'active' : ''} 
              onClick={() => setActiveProjectTab('perso')}
            >
              Projets Personnels
            </button>
          </div>
          
          {activeProjectTab === 'professionnels' && (
            <div className="project-section">
              <h3>Projets Professionnels</h3>
              <div className="project-card">
                <h4>Projet 1</h4>
                <p>Description du projet professionnel 1.</p>
              </div>
              <div className="project-card">
                <h4>Projet 2</h4>
                <p>Description du projet professionnel 2.</p>
              </div>
            </div>
          )}
          
          {activeProjectTab === 'academiques' && (
            <div className="project-section">
              <h3>Projets Académiques</h3>
              <div className="project-card">
                <h4>Projet Académique 1</h4>
                <p>Description du projet académique 1.</p>
              </div>
              <div className="project-card">
                <h4>Projet Académique 2</h4>
                <p>Description du projet académique 2.</p>
              </div>
            </div>
          )}
          
          {activeProjectTab === 'perso' && (
            <div className="project-section">
              <h3>Projets Personnels</h3>
              <div className="project-card">
                <h4>Projet Personnel 1</h4>
                <p>Description du projet personnel 1.</p>
              </div>
              <div className="project-card">
                <h4>Projet Personnel 2</h4>
                <p>Description du projet personnel 2.</p>
              </div>
            </div>
          )}
        </div>
    )
}

export default ProjectsPage;