import '../styles/projectDeatils.css';

import { currentLanguage } from '../utils/globalVars';

import goBack from '../assets/go-back.svg';


const ProjectDetailsPage = ({ project, setProjectSelectedToDisplay, pathAccessed }) => {

    console.log("project", project);


    return (

        <div className="project-details-content">
            <div className='project-details-content-path-accessed'>
                <button className="return-btn" onClick={() => { setProjectSelectedToDisplay(null) }}>
                    <img className='go-back-icon' src={goBack} alt="Go back" />
                </button>
                <div>
                    <a className="return-btn" onClick={() => { setProjectSelectedToDisplay(null) }}>
                        <span className='project-details-span-path-accessed'>{pathAccessed}</span>
                    </a>
                    <span className='project-details-span-path-accessed' > / </span>
                    <a><span className='project-details-span-path-accessed' style={{ textDecoration: 'underline', cursor: 'pointer' }}> {project.title[currentLanguage.language]} </span></a>
                </div>
            </div>

            <div className='project-details-content-title'>  {project.title[currentLanguage.language]} </div>
            <div className='project-details-content-organization'><a href={project.organization.link} target='_blank' rel='noopener noreferrer'>{project.organization.name[currentLanguage.language]}</a></div>
            <p>{project.introduction[currentLanguage.language]}</p>
        </div>
    )

}

export default ProjectDetailsPage;