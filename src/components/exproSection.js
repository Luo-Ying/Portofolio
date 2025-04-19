import { currentLanguage } from "../utils/globalVars";
import "../styles/exproSection.css";
import React from 'react';
import TitleSectionSeparator from "./titleSectionSeparator";
const ExproSection = () => {
    return (
        <div className="expro-section">
            <TitleSectionSeparator title={currentLanguage.exproSection.title} />
            <div>
                {currentLanguage.exproSection.experiences.map((experience, index) => (
                    <div className="experience-container" key={index}>
                        <div className="experience-timeline">
                            <div className="experience-timeline-item">
                                <div className="experience-timeline-item-circle" />
                                <div className="experience-timeline-item-bar" />
                            </div>
                        </div>
                        <div className="experience-content" key={index}>
                            <div className="experience-title">{experience.title}</div>
                            <div className="experience-company"><a href="https://www.orkis.com/" target="_blank" rel="noopener noreferrer">{experience.company}</a></div>
                            <div className="experience-location-period">
                                <svg style={{ width: '20px', height: '20px', marginRight: '8px', fill: '#ffffff', verticalAlign: 'middle' }} viewBox="0 0 24 24">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM5 6V5h14v1H5z" />
                                </svg> {experience.period}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <svg style={{ width: '20px', height: '20px', margin: '0 8px', fill: '#ffffff', verticalAlign: 'middle' }} viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg> {experience.location}
                            </div>
                            <div className="experience-responsibilities">
                                {experience.responsibilities.map((responsibility, index) => (
                                    <React.Fragment key={index}>
                                        <li className="experience-responsibility-title">{responsibility.title}</li>
                                        <div className="experience-progress">
                                            <div style={{
                                                display: 'flex',
                                                gap: '6px',
                                                marginTop: '12px',
                                                marginBottom: '12px'
                                            }}>
                                                {[...Array(80)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            width: '12px',
                                                            height: '12px',
                                                            backgroundColor: i <= 80 * responsibility.importance ? '#7b6c9d' : '#2d3748',
                                                            borderRadius: '50%'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ExproSection;