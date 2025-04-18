import githubIcon from '../assets/github-icon.png'
import profilPhoto from '../assets/profil_linkdin.jpg'
import linkedinIcon from '../assets/linkedin.png'
const PersonalInfo = () => {
    return (
        <div>
            <div className="profile-photo">
                <div className="photo-placeholder">
                    <img src={profilPhoto} alt="Profile" className='profile-photo' />
                </div>
            </div>
            <div className="profile-info">
                <div className='name'>Yingqi LUO</div>
                <p className="title">Développeur Web Full Stack</p>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <svg style={{ width: '20px', height: '20px', marginRight: '8px', fill: '#f4f4f4' }} viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span style={{ color: '#ccc8c8' }}>Monpellier, France</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <svg style={{ width: '20px', height: '20px', marginRight: '8px', fill: '#f4f4f4' }} viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="mailto:yingqi.luo.fr@gmail.com" style={{ color: '#ccc8c8', textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
                        yingqi.luo.fr@gmail.com
                    </a>
                </div>
                <div className="profile-links">
                    <a href="https://github.com/Luo-Ying" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/yingqi-luo/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;