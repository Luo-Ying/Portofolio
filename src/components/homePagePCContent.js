import PersonalInfo from './personalInfo'
import IntroSection from './introSection'
import ExproSection from './exproSection'
import ProjectsSection from './projectsSection'

const HomePagePCContent = ({ showProjectDetails }) => {
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
                    <ProjectsSection showProjectDetails={showProjectDetails} />
                </div>
            </div>
        </div>
    )
}

export default HomePagePCContent;