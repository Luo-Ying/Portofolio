import PersonalInfo from '../components/personalInfo'
import IntroSection from '../components/introsection'
import ExproSection from '../components/exproSection'

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

          <h3>Projet (créé en avant)</h3>
          <div className="project-preview">
            <p>Présentation de mes projets les plus importants, avec des détails sur les technologies et les défis relevés.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;