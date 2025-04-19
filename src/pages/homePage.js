import PersonalInfo from '../components/personalInfo'
import IntroSection from '../components/introsection'
import ExproSection from '../components/exproSection'
import ProjectsSection from '../components/projectsSection'
const HomePage = () => {
  return (
    <div className="accueil-content">
      <div className="profile-section">
        <PersonalInfo />
      </div>

      <div className='more-details-section'>
        <div className="intro-section">
          <IntroSection />
        </div>

        <div className="featured-projects">
          <ExproSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
  )
}

export default HomePage;