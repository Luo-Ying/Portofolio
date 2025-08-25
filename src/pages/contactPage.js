import { currentLanguage } from '../utils/globalVars';
import githubIcon from '../assets/GitHub.svg';
import linkedinIcon from '../assets/LinkedIn.svg';
import maltIcon from '../assets/malt-logo-red.svg';

const ContactPage = () => {
    return (
        <div>
            <div className="contact-title">
                <h1>{currentLanguage.contactPage.title}</h1>
            </div>
            <div className="contact-container">
                <div className="contact-item">{currentLanguage.contactPage.contact} </div>
                <a className="contact-item-email" href="mailto:yingqi.luo.fr@gmail.com">
                    yingqi.luo.fr@gmail.com
                </a>
                <div className="contact-item">{currentLanguage.contactPage.basedIn} </div>
                <span className="contact-item-location">{currentLanguage.profileLocation}</span>

                <div className="profile-links">
                    <a href="https://github.com/Luo-Ying" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/yingqi-luo/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://www.malt.fr/profile/yingqiluo" target="_blank" rel="noopener noreferrer">
                        <img src={maltIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;