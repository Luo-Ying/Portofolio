import PersonalInfo from '../components/personalInfo'
import IntroSection from '../components/introsection'
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
          <h3>Exp (Pro)</h3>
          <div className="project-preview">
            <p>Description de mon expérience professionnelle, incluant les technologies utilisées et les responsabilités assumées.</p>
          </div>

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