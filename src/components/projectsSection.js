import "../styles/projectsSection.css";

import { useState } from "react";

import { currentLanguage } from "../utils/globalVars";
import { projects } from "../utils/projectsData";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";

import nextButton from "../assets/droite.png"

const ProjectsSection = ({ showProjectDetails, goProjectsPage }) => {

    const [isHoveredMoreProjects, setIsHoveredMoreProjects] = useState(false);
    const [isHoveredProjectsDiv, setIsHoveredProjectsDiv] = useState(false);
    // TODO: build projects list and add onclick event to project card

    const projectsList = [
        ...projects.professional,
        // currentLanguage.projectsSection.projects.universityProjects[0],
        // currentLanguage.projectsSection.projects.universityProjects[1],
        // currentLanguage.projectsSection.projects.universityProjects[2],
        projects.personal[0],
        // currentLanguage.projectsSection.projects.personalProjects[1]
    ]

    const handleScroll = (direction) => {
        const container = document.querySelector('.projects-container');
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };



    return (
        <div>
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />

            <div style={{ position: 'relative' }}
                onMouseEnter={() => setIsHoveredProjectsDiv(true)}
                onMouseLeave={() => setIsHoveredProjectsDiv(false)}
            >
                {isHoveredProjectsDiv && (
                    <button className="more-projects-button-previous" onClick={() => handleScroll('left')}>
                        <img src={nextButton} alt="previous" style={{ transform: 'rotate(180deg)', width: 50, height: 50 }} />
                    </button>
                )}

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
                            <div className="more-projects-button-inner" >
                                <div className="more-projects-button-inner-circle-container" >
                                    <div className="more-projects-button-inner-circle">
                                        {isHoveredMoreProjects && (
                                            <div className="more-projects-button-inner-circle-text">
                                                {currentLanguage.projectsSection.moreProjects}
                                            </div>
                                        )}
                                    </div>

                                    <div className="more-projects-button-inner-circle-line-up" ></div>
                                    <img src={nextButton} alt="next" className="more-projects-button-inner-circle-image" />
                                    <div className="more-projects-button-inner-circle-line-bottom"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isHoveredProjectsDiv && (
                    <button className="more-projects-button-next" onClick={() => handleScroll('right')}>
                        <img src={nextButton} alt="next" style={{ width: 50, height: 50 }} />
                    </button>
                )}
            </div>
        </div >

    )
}

export default ProjectsSection;