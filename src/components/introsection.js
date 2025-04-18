import reactIcon from '../assets/React.png'
import nodejsIcon from '../assets/nodejs.png'
import mongodbIcon from '../assets/MongoDB.png'

const IntroSection = () => {
    return (
        <div>
            <h2>Introduction</h2>
            <p>Je suis une Ingénieure Full Stack passionnée avec plus de 2 ans d'expérience dans le développement d'applications web et mobiles.</p>
            <p>Experte en développement front-end et back-end, forte d'une expérience en conception d'API et de services, j'ai conçu et implémenté des architectures modulaires, optimisé les performances et assuré la qualité du code.</p>

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