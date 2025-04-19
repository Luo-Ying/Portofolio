import { currentLanguage } from "../utils/globalVars";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";

const ProjectsSection = () => {

    // const projects = [
    //     ...currentLanguage.projectsSection.projects.professionalProjects,
    //     currentLanguage.projectsSection.projects.universityProjects[0],
    //     currentLanguage.projectsSection.projects.universityProjects[1],
    //     currentLanguage.projectsSection.projects.universityProjects[2],
    //     currentLanguage.projectsSection.projects.personalProjects[0],
    //     currentLanguage.projectsSection.projects.personalProjects[1]
    // ]


    const projects = [
        {
            title: "Project 1",
            image: "../assets/projectsIMGs/spectre/test.jpg",
            page: "https://example.com/project1",
        }
    ]


    return (
        <div className="projects-section">
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </div>

    )
}

export default ProjectsSection;