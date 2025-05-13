import '../styles/projectsPage.css';

import { useState, useEffect } from 'react';

import { currentLanguage } from '../utils/globalVars';
import { projects } from '../utils/projectsData';
import ProjectCard from '../components/projectCard';
import ProjectDetailsPage from '../components/projectDetails';
import FilterDropdown from '../components/filterDropdown';

const ProjectsPage = ({ projectSelectedToDisplay, setProjectSelectedToDisplay }) => {

  const [projectsList, setProjectsList] = useState([]);
  //TODO: add the filter options with the technologies and the functions for the projects

  const [typeProjectFilterOptions, setTypeProjectFilterOptions] = useState([]);
  const [typeProjectFilterOptionsSelected, setTypeProjectFilterOptionsSelected] = useState([])

  useEffect(() => {
    setProjectsList(
      [
        ...projects.professional.projects,
        ...projects.personal.projects,
        ...projects.university.projects,
      ]
    );

    setTypeProjectFilterOptions(
      [
        projects.professional.type,
        projects.personal.type,
        projects.university.type,
      ]
    );

  }, []);



  const handleApplyTypeProjectFilters = (selectedOptions) => {

    console.log("selectedOptions", selectedOptions);
    setTypeProjectFilterOptionsSelected(selectedOptions);
    setProjectsList(
      [
        ...projects.professional.projects,
        ...projects.personal.projects,
        ...projects.university.projects,
      ].filter(project => {
        if (selectedOptions.length === 0) {
          return true;
        }

        if (selectedOptions.includes(projects.professional.type) &&
          projects.professional.projects.includes(project)) {
          return true;
        }

        if (selectedOptions.includes(projects.personal.type) &&
          projects.personal.projects.includes(project)) {
          return true;
        }

        if (selectedOptions.includes(projects.university.type) &&
          projects.university.projects.includes(project)) {
          return true;
        }

        return false;
      })
    );
  }

  return (
    <div>
      <div className="projects-title">
        <h1>{currentLanguage.projectPageTitle}</h1>
      </div>

      <div className="filter-button-container">
        <FilterDropdown
          title={
            typeProjectFilterOptionsSelected.length > 0
              ? `Type of project - ${typeProjectFilterOptionsSelected.length}`
              : "Type of project"
          }
          options={typeProjectFilterOptions}
          selectedOptions={typeProjectFilterOptionsSelected}
          nbProjects={projectsList.length}
          onApplyFilters={handleApplyTypeProjectFilters}
        />
      </div>

      <div className="projects-grid" >
        {projectsList.map((project, index) => (
          <div key={index} onClick={() => setProjectSelectedToDisplay(project)} className="project-card-container" >
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