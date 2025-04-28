import "../styles/projectsSection.css";

import { useState } from "react";

import { currentLanguage } from "../utils/globalVars";
import { projects } from "../utils/projectsData";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";

import nextButton from "../assets/droite.png"

const ProjectsSection = ({ showProjectDetails, goProjectsPage }) => {

    const [isHoveredMoreProjects, setIsHoveredMoreProjects] = useState(false);

    // TODO: build projects list and add onclick event to project card

    const projectsList = [
        ...projects.professional,
        // currentLanguage.projectsSection.projects.universityProjects[0],
        // currentLanguage.projectsSection.projects.universityProjects[1],
        // currentLanguage.projectsSection.projects.universityProjects[2],
        // currentLanguage.projectsSection.projects.personalProjects[0],
        // currentLanguage.projectsSection.projects.personalProjects[1]
    ]

    // const goProjectsPage = () => {
    //     goProjectsPage(currentLanguage.activeTabProjects, false)
    // }

    return (
        <div>
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />

            <div className="projects-container">

                <div className="projects-container-inner" >

                    {projectsList.map((project, index) => (
                        <div key={index} onClick={() => showProjectDetails(project)} className="project-card-container" style={{}}>
                            <ProjectCard project={project} />
                        </div>
                    ))}

                    <div className="more-projects-button"
                        onMouseEnter={() => setIsHoveredMoreProjects(true)}
                        onMouseLeave={() => setIsHoveredMoreProjects(false)}
                        onClick={() => goProjectsPage(currentLanguage.activeTabProjects, false)}
                    >
                        <div className="more-projects-button-inner">
                            <div className="more-projects-button-inner-circle">
                                {isHoveredMoreProjects && (
                                    <div className="more-projects-button-inner-circle-text">
                                        {currentLanguage.projectsSection.moreProjects}
                                    </div>
                                )}
                            </div>
                            <img src={nextButton} alt="next" className="more-projects-button-inner-circle-image" />
                        </div>
                    </div>

                </div>


            </div>
        </div >

    )
}

export default ProjectsSection;