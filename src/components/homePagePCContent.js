import PersonalInfo from './personalInfo'
import IntroSection from './introSection'
import ExproSection from './exproSection'
import ProjectsSection from './projectsSection'

const HomePagePCContent = ({ showProjectDetails, goProjectsPage }) => {
    return (
        <div className="accueil-content">
            <div className="profile-section">
                <PersonalInfo isMobile={false} />
            </div>

            <div className='more-details-section'>
                <div className="intro-section">
                    <IntroSection />
                </div>

                <div className="featured-projects">
                    <ExproSection />
                    <ProjectsSection showProjectDetails={showProjectDetails} goProjectsPage={goProjectsPage} />
                </div>
            </div>
        </div>
    )
}

export default HomePagePCContent;