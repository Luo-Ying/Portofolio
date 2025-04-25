import { useState, useEffect } from 'react';

import { currentLanguage } from '../utils/globalVars';
import { projects } from '../utils/projectsData';
import ProjectCard from '../components/projectCard';
import ProjectDetailsPage from '../components/projectDetails';
const ProjectsPage = () => {

  const [projectsList, setProjectsList] = useState([]);
  const [projectSelectedToDisplay, setProjectSelectedToDisplay] = useState(null);

  useEffect(() => {
    setProjectsList(
      [
        ...projects.professional,
        ...projects.university,
        ...projects.personal
      ]
    );
  }, []);

  return (
    <div>
      <div className="projects-title">
        <h1>{currentLanguage.projectPageTitle}</h1>
      </div>

      <div className="projects-grid" >
        {projectsList.map((project, index) => (
          <div key={index} onClick={() => setProjectSelectedToDisplay(project)} className="project-card-container">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div>
        {projectSelectedToDisplay && (
          <ProjectDetailsPage project={projectSelectedToDisplay} setProjectSelectedToDisplay={setProjectSelectedToDisplay} pathAccessed={currentLanguage.activeTabProjects} />
        )}
      </div>
    </div>
  )
}

export default ProjectsPage;