import { currentLanguage } from '../utils/globalVars';

import javascriptIcon from '../assets/JavaScript.svg'
import reactIcon from '../assets/React.png'
import nodejsIcon from '../assets/nodejs.png'
import mongodbIcon from '../assets/MongoDB.png'
import pythonIcon from '../assets/python.png'
import javaIcon from '../assets/Java.svg'
import postgreSQLIcon from '../assets/postgresql.svg'
import flutterIcon from '../assets/fluttericon.svg'


const IntroSection = () => {
    return (
        <div>
            <h2>{currentLanguage.introSection.title}</h2>
            <p>{currentLanguage.introSection.content.p1}</p>
            <p>{currentLanguage.introSection.content.p2}</p>

            <div className="skills-section">
                <h3>{currentLanguage.introSection.technologies}</h3>
                <div className="skills-container">
                    <div className="skill-card"><img src={javascriptIcon} alt="javascript" className="skill-icon" /> JavaScript</div>
                    <div className="skill-card"><img src={reactIcon} alt="react" className="skill-icon" /> React</div>
                    <div className="skill-card"><img src={flutterIcon} alt="flutter" className="skill-icon" /> Flutter</div>
                    <div className="skill-card"><img src={nodejsIcon} alt="node.js" className="skill-icon" />Node.js</div>
                    <div className="skill-card"><img src={pythonIcon} alt="Python" className="skill-icon" />Python</div>
                    <div className="skill-card"><img src={javaIcon} alt="java" className="skill-icon" />Java</div>
                    <div className="skill-card"><img src={mongodbIcon} alt="mongodb" className="skill-icon" />MongoDB</div>
                    <div className="skill-card"><img src={postgreSQLIcon} alt="postgreSQL" className="skill-icon" />PostgreSQL</div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;