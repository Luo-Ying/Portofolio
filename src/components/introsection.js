import reactIcon from '../assets/React.png'
import nodejsIcon from '../assets/nodejs.png'
import mongodbIcon from '../assets/MongoDB.png'
import { currentLanguage } from '../utils/globalVars';

const IntroSection = () => {
    return (
        <div>
            <h2>{currentLanguage.profileIntroTitle}</h2>
            <p>{currentLanguage.profileIntroContent.p1}</p>
            <p>{currentLanguage.profileIntroContent.p2}</p>

            <div className="skills-section">
                <h3>Stack</h3>
                <div className="skills-container">
                    <div className="skill-card"><img src={reactIcon} alt="react" className="skill-icon" /> React</div>
                    <div className="skill-card"><img src={nodejsIcon} alt="node.js" className="skill-icon" />Node.js</div>
                    <div className="skill-card"><img src={mongodbIcon} alt="mongodb" className="skill-icon" />MongoDB</div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;