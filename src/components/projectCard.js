import React, { useState } from 'react';
import projectPreviewImage from '../assets/projectsIMGs/spectre/test.jpg'
import companyLogo from '../assets/company building.png'

const CardProject = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '12px',
        zIndex: 2,
    };

    return (
        <div className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="project-preview">
                <img src={projectPreviewImage} alt={project.title} />
                {isHovered && <div style={overlayStyle}>{project.simpleInfo}</div>}
            </div>
            <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-organization">
                    <img src={companyLogo} alt="companyLogo" className="company-icon" />
                    &nbsp;&nbsp;
                    {project.organization}
                </div>
            </div>
        </div>
    );
}

export default CardProject;