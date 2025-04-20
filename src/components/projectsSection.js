import { currentLanguage } from "../utils/globalVars";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";

const ProjectsSection = () => {

    // TODO: build projects list and add onclick event to project card

    // const projects = [
    //     ...currentLanguage.projectsSection.projects.professionalProjects,
    //     currentLanguage.projectsSection.projects.universityProjects[0],
    //     currentLanguage.projectsSection.projects.universityProjects[1],
    //     currentLanguage.projectsSection.projects.universityProjects[2],
    //     currentLanguage.projectsSection.projects.personalProjects[0],
    //     currentLanguage.projectsSection.projects.personalProjects[1]
    // ]


    const projectExample = {
        title: "Spectre - Une application web pour la gestion vidéo",
        organization: "ORKIS",
        imagePreviw: "../assets/projectIMGs/spectre/test.png",
        simpleInfo: "Développement Full-Stack ReactJS et Node.js d’une application web pour construire une plateforme de la gestion vidéo",
        introduction: "C'est une application web de gestion vidéo, dont l'objectif est de permettre la recherche dans les paroles des vidéos présentes dans la base de données. Cette application permet aux utilisateurs de uploader des vidéos dans leur base de données et de les gérer. Ensuite, les utilisateurs peuvent effectuer des recherches dans les vidéos grâce à un service de speech-to-text intégré à l'application. L'objectif est de retrouver les moments clés des vidéos contenant les informations correspondant au mot-clé saisi par l'utilisateur.",
    };


    return (
        <div className="projects-section">
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />
            <div className="projects-container">
                {/* {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))} */}
                <ProjectCard project={projectExample} />
            </div>
        </div>

    )
}

export default ProjectsSection;