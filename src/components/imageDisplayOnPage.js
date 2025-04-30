import '../styles/projectDeatils.css';

import { useEffect, useState } from 'react';

import nextButton from "../assets/droite.png"

const ImageDisplayOnPage = ({
    listProjectImages,
    setImageToDisplay,
    imageToDisplayIndex,
}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [imageToDisplayIndexOnPage, setImageToDisplayIndexOnPage] = useState(imageToDisplayIndex);


    const handleScrollImage = (direction) => {
        if (direction === 'left') {
            if (imageToDisplayIndexOnPage > 0) {
                setImageToDisplayIndexOnPage(imageToDisplayIndexOnPage - 1);
            } else {
                setImageToDisplayIndexOnPage(listProjectImages.length - 1);
            }
        } else {
            if (imageToDisplayIndexOnPage < listProjectImages.length - 1) {
                setImageToDisplayIndexOnPage(imageToDisplayIndexOnPage + 1);
            } else {
                setImageToDisplayIndexOnPage(0);
            }
        }
    };


    return (
        <div>
            <button className="more-projects-button-previous" onClick={() => handleScrollImage('left')} style={{
                zIndex: 2000,
                position: 'fixed',
                top: '50%',
                transform: 'translateY(-50%)',
                left: '10%'
            }}>
                <img
                    src={nextButton}
                    alt="previous"
                    style={{
                        transform: 'rotate(180deg)',
                        width: windowWidth * 0.034 < 30 ? 30 : windowWidth * 0.034,
                        height: windowWidth * 0.034 < 30 ? 30 : windowWidth * 0.034
                    }}
                />
            </button>
            <div className="image-display-on-page" onClick={() => setImageToDisplay(null)}>


                <img src={listProjectImages[imageToDisplayIndexOnPage]} className="image-display-on-page-image" alt="Project" />

            </div>
            <button className="more-projects-button-next" onClick={() => handleScrollImage('right')} style={{
                zIndex: 2000,
                position: 'fixed',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '10%'
            }}>
                <img
                    src={nextButton}
                    alt="next"
                    style={{
                        width: windowWidth * 0.034 < 30 ? 30 : windowWidth * 0.034,
                        height: windowWidth * 0.034 < 30 ? 30 : windowWidth * 0.034
                    }}
                />
            </button>
        </div>
    );
};

export default ImageDisplayOnPage;