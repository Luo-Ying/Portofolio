import React, { useState } from 'react';
import { currentLanguage } from '../utils/globalVars';

const CardProject = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="project-preview">
                <img src={project.imagePreview} alt={project.title[currentLanguage.language]} />
                {console.log("project.imagePreview", project.imagePreview)}
                {isHovered && <div className="card-project-overlay" >{project.simpleInfo[currentLanguage.language]}</div>}
            </div>
            <div className="project-info">
                <div className="project-title">{project.title[currentLanguage.language]}</div>
                <div className="project-organization">
                    <img src={project.logo} alt="companyLogo" className="company-icon" />
                    &nbsp;&nbsp;
                    {project.organization.name[currentLanguage.language]}
                </div>
            </div>
        </div>
    );
}

export default CardProject;