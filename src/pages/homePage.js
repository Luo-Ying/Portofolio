import { useState, useEffect } from 'react'

import ProjectDetailsPage from '../components/projectDetails'
import { currentLanguage } from '../utils/globalVars'
import HomePagePCContent from '../components/homePagePCContent'
import HomePageSmartphoneContent from '../components/homePageSmartphoneContent'
const HomePage = ({ projectSelectedToDisplay, setProjectSelectedToDisplay, goProjectsPage }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const showProjectDetails = (project) => {
  //   // console.log("project", project);

  //   setProjectSelectedToDisplay(project);
  //   // console.log("projectSelectedToDisplay", projectSelectedToDisplay);

  // }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      {windowWidth >= 768 && !projectSelectedToDisplay && (
        <HomePagePCContent showProjectDetails={setProjectSelectedToDisplay} goProjectsPage={goProjectsPage} />
      )}


      {windowWidth < 768 && !projectSelectedToDisplay && (
        <HomePageSmartphoneContent showProjectDetails={setProjectSelectedToDisplay} goProjectsPage={goProjectsPage} />
      )}

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