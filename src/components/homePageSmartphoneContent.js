import PersonalInfo from './personalInfo'
import IntroSection from './introSection'
import ExproSection from './exproSection'
import ProjectsSection from './projectsSection'

const HomePageSmartphoneContent = ({ showProjectDetails, goProjectsPage }) => {
    return (
        <div>
            <div>
                <PersonalInfo isMobile={true} />
            </div>
            <div className="intro-section">
                <IntroSection />
            </div>
            <div className="featured-projects">
                <ExproSection />
                <ProjectsSection showProjectDetails={showProjectDetails} goProjectsPage={goProjectsPage} />
            </div>
        </div>
    )
}

export default HomePageSmartphoneContent;