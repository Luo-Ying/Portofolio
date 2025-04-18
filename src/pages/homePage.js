import PersonalInfo from '../components/personalInfo'

const HomePage = () => {
  return (
    <div className="accueil-content">
      <div className="profile-section">
        <PersonalInfo />
      </div>

      <div className='more-details-section'>
        <div className="intro-section">
          <h3>Simple intro</h3>
          <p>Je suis un développeur passionné par la création d'applications web innovantes.</p>
          <p>Explorez mes projets pour découvrir mon travail et mes compétences.</p>
        </div>

        <div className="skills-section">
          <h3>STACK</h3>
          <div className="skills-container">
            <div className="skill-card">React</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">MongoDB</div>
          </div>
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