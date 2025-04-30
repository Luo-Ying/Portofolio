import '../styles/projectDeatils.css';

import { useEffect, useState } from 'react';

import { currentLanguage } from '../utils/globalVars';
import goBack from '../assets/go-back.svg';
import ImageDisplayOnPage from './imageDisplayOnPage';

import nextButton from "../assets/droite.png"

const ProjectDetailsPage = ({ project, setProjectSelectedToDisplay, pathAccessed }) => {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [imageToDisplay, setImageToDisplay] = useState(null);
    const [imageToDisplayIndex, setImageToDisplayIndex] = useState(0);

    const [isHoveredProjectImagesDiv, setIsHoveredProjectImagesDiv] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const fnOnMouseEnter = (e) => {
        e.target.style.transform = `scale(1.1)`;
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
        e.target.style.transform = `scale(1)`;
        e.target.style.zIndex = '0';
        // Remove blur from all images
        const images = e.target.parentElement.getElementsByTagName('img');
        for (let img of images) {
            img.style.filter = 'blur(0px)';
        }
    }

    const handleScroll = (direction) => {
        const container = document.querySelector('.project-details-content-images');
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };

    return (

        <div className='project-details-content-container'>
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
            <div className="project-details-content" style={{ overflowY: 'auto', marginTop: '20px' }}>

                <div className='project-details-content-title'>  {project.title[currentLanguage.language]} </div>
                <div className='project-details-content-organization'><a href={project.organization.link} target='_blank' rel='noopener noreferrer'>{project.organization.name[currentLanguage.language]}</a></div>
                <div className='project-details-content-introduction'>
                    {project.introduction.map((introduction, index) => (
                        <p key={index}>{introduction[currentLanguage.language]}</p>
                    ))}
                </div>

                {
                    project.images.length > 0 &&
                    <div style={{ position: 'relative' }}
                        onMouseEnter={() => setIsHoveredProjectImagesDiv(true)}
                        onMouseLeave={() => setIsHoveredProjectImagesDiv(false)}>

                        {isHoveredProjectImagesDiv && windowWidth >= 768 && (
                            <button className="more-projects-button-previous" onClick={() => handleScroll('left')}>
                                <img src={nextButton} alt="previous" style={{ transform: 'rotate(180deg)', width: 50, height: 50 }} />
                            </button>
                        )}

                        <div className='project-details-content-images'>
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Project image ${index + 1}`}
                                    className='project-details-content-images-image'
                                    style={{ width: `${project.imagesMinSize}`, height: `${project.imagesMinSize}` }}
                                    onMouseEnter={(e) => fnOnMouseEnter(e)}
                                    onMouseLeave={(e) => fnOnMouseLeave(e)}
                                    onClick={() => {
                                        setImageToDisplay(image);
                                        setImageToDisplayIndex(index);
                                    }}
                                />
                            ))}
                        </div>

                        {isHoveredProjectImagesDiv && windowWidth >= 768 && !imageToDisplay && (
                            <button className="more-projects-button-next" onClick={() => handleScroll('right')}>
                                <img src={nextButton} alt="next" style={{ width: 50, height: 50 }} />
                            </button>
                        )}

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
            {imageToDisplay &&
                <ImageDisplayOnPage
                    // windowWidth={windowWidth}
                    listProjectImages={project.images}
                    setImageToDisplay={setImageToDisplay}
                    imageToDisplayIndex={imageToDisplayIndex}
                />}
        </div>
    )

}

export default ProjectDetailsPage;