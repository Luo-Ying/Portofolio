import { currentLanguage } from "../utils/globalVars";
import ProjectCard from "./projectCard";
import TitleSectionSeparator from "./titleSectionSeparator";
import { projects } from "../utils/projectsData";

const ProjectsSection = ({ showProjectDetails }) => {

    // TODO: build projects list and add onclick event to project card

    const projectsList = [
        // ...currentLanguage.projectsSection.projects.professionalProjects,
        ...projects.professional,
        // currentLanguage.projectsSection.projects.universityProjects[0],
        // currentLanguage.projectsSection.projects.universityProjects[1],
        // currentLanguage.projectsSection.projects.universityProjects[2],
        // currentLanguage.projectsSection.projects.personalProjects[0],
        // currentLanguage.projectsSection.projects.personalProjects[1]
    ]


    // const projectExample = {
    //     // url: "/projects/spectre",
    //     title: "Spectre - Une application web pour la gestion vidéo",
    //     logo: "/images/company building.png",
    //     organization: {
    //         name: "ORKIS",
    //         link: "https://www.orkis.com/"
    //     },
    //     imagePreview: "/images/spectre/imagePreview.jpeg",
    //     simpleInfo: "Développement full-stack en ReactJS et Python Flask d'une application web constituant une plateforme de gestion vidéo.",
    //     introduction: "Ce project est réalisation d'une application web de gestion vidéo, dont l'objectif est de permettre la recherche dans les paroles des vidéos présentes dans la base de données. Cette application permet aux utilisateurs de uploader des vidéos dans leur base de données et de les gérer. Ensuite, les utilisateurs peuvent effectuer des recherches dans les vidéos grâce à un service de speech-to-text intégré à l'application. L'objectif est de retrouver les moments clés des vidéos contenant les informations correspondant au mot-clé saisi par l'utilisateur.",
    // };


    return (
        <div className="projects-section">
            <TitleSectionSeparator title={currentLanguage.projectsSection.title} />
            <div className="projects-container">
                {projectsList.map((project, index) => (
                    <div key={index} onClick={() => showProjectDetails(project)}>
                        <ProjectCard project={project} />
                    </div>
                ))}
                {/* <div onClick={() => showProjectDetails(projectExample)}>
                    <ProjectCard project={projectExample} />
                </div> */}
            </div>
        </div>

    )
}

export default ProjectsSection;