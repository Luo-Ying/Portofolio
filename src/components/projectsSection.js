import "../styles/projectsSection.css";

import { currentLanguage } from "../utils/globalVars";
import { projects } from "../utils/projectsData";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";

const ProjectsSection = ({ showProjectDetails }) => {

    // TODO: build projects list and add onclick event to project card

    const projectsList = [
        ...projects.professional,
        // currentLanguage.projectsSection.projects.universityProjects[0],
        // currentLanguage.projectsSection.projects.universityProjects[1],
        // currentLanguage.projectsSection.projects.universityProjects[2],
        // currentLanguage.projectsSection.projects.personalProjects[0],
        // currentLanguage.projectsSection.projects.personalProjects[1]
    ]


    return (
        <div>
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />

            <div className="projects-container">
                <div className="projects-container-inner" >
                    {projectsList.map((project, index) => (
                        <div key={index} onClick={() => showProjectDetails(project)} className="project-card-container">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                    {projectsList.map((project, index) => (
                        <div key={index} onClick={() => showProjectDetails(project)} className="project-card-container">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ProjectsSection;