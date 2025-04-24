// import { useState } from 'react'

import PersonalInfo from '../components/personalInfo'
import IntroSection from '../components/introsection'
import ExproSection from '../components/exproSection'
import ProjectsSection from '../components/projectsSection'
import ProjectDetailsPage from '../components/projectDetails'
import { currentLanguage } from '../utils/globalVars'

const HomePage = ({ projectSelectedToDisplay, setProjectSelectedToDisplay }) => {

  const showProjectDetails = (project) => {
    console.log("project", project);

    setProjectSelectedToDisplay(project);
    console.log("projectSelectedToDisplay", projectSelectedToDisplay);

  }

  return (
    <div>
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
            <ProjectsSection showProjectDetails={showProjectDetails} />
          </div>
        </div>
      </div>
      <div>
        {projectSelectedToDisplay &&
          <ProjectDetailsPage
            project={projectSelectedToDisplay}
            setProjectSelectedToDisplay={setProjectSelectedToDisplay}
            pathAccessed={currentLanguage.activeTabHome}
          />}
      </div>
    </div>
  )
}

export default HomePage;