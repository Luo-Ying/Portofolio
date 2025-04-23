import '../styles/projectDeatils.css';

import { useState } from 'react';

import { currentLanguage } from '../utils/globalVars';
import goBack from '../assets/go-back.svg';
import ImageDisplayOnPage from './imageDisplayOnPage';

const ProjectDetailsPage = ({ project, setProjectSelectedToDisplay, pathAccessed }) => {

    console.log("project", project);

    const [imageToDisplay, setImageToDisplay] = useState(null);


    const fnOnMouseEnter = (e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.zIndex = '1';
        // Blur all other images
        const images = e.target.parentElement.getElementsByTagName('img');
        for (let img of images) {
            if (img !== e.target) {
                img.style.filter = 'blur(3px)';
            }
        }
    }

    const fnOnMouseLeave = (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.zIndex = '0';
        // Remove blur from all images
        const images = e.target.parentElement.getElementsByTagName('img');
        for (let img of images) {
            img.style.filter = 'blur(0px)';
        }
    }

    return (

        <div>
            <div className='project-details-content-path-accessed-sticky-header'>
                <button className="return-btn-sticky-header" style={{ paddingRight: "10px" }} onClick={() => { setProjectSelectedToDisplay(null) }}>
                    <img className='go-back-icon' src={goBack} alt="Go back" />
                </button>
                <div>
                    <a className="return-btn-sticky-header" onClick={() => { setProjectSelectedToDisplay(null) }}>
                        <span className='project-details-span-path-accessed'>{pathAccessed}</span>
                    </a>
                    <span className='project-details-span-path-accessed'> / </span>
                    <a><span className='project-details-span-path-accessed' style={{ textDecoration: 'underline' }}> {project.title[currentLanguage.language]} </span></a>
                </div>
            </div>
            <div className="project-details-content" style={{ overflowY: 'auto' }}>
                {/* <div className='project-details-content-path-accessed'>
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
                </div> */}


                <div className='project-details-content-title'>  {project.title[currentLanguage.language]} </div>
                <div className='project-details-content-organization'><a href={project.organization.link} target='_blank' rel='noopener noreferrer'>{project.organization.name[currentLanguage.language]}</a></div>
                <div className='project-details-content-introduction'><p>{project.introduction[currentLanguage.language]}</p></div>

                {
                    project.images.length > 0 &&
                    <div className='project-details-content-images'>
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project image ${index + 1}`}
                                className='project-details-content-images-image'
                                onMouseEnter={(e) => fnOnMouseEnter(e)}
                                onMouseLeave={(e) => fnOnMouseLeave(e)}
                                onClick={() => { setImageToDisplay(image); }}
                            />
                        ))}
                    </div>
                }

                <div className='project-details-content-details-description'>
                    <p>{project.detailsDescription.sentence[currentLanguage.language]}</p>
                    <ul className='project-details-content-details-description-list'>
                        {project.detailsDescription.services.map((service, index) => (
                            <li key={index}>{service[currentLanguage.language]}</li>
                        ))}
                    </ul>
                </div>
                <div className='project-details-content-technologies'>
                    {project.technologies.map((technology, index) => (
                        <div key={index} className="technologies-card"><img src={technology.icone} alt={technology.name} className='technologies-icon' /> {technology.name}</div>
                    ))}

                </div>
            </div>
            {imageToDisplay && <ImageDisplayOnPage image={imageToDisplay} setImageToDisplay={setImageToDisplay} />}
        </div>
    )

}

export default ProjectDetailsPage;