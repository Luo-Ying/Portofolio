import githubIcon from '../assets/github-icon.png'

const PersonalInfo = () => {
    return (
        <div>
            <div className="profile-photo">
                <div className="photo-placeholder">
                    <span>Photo</span>
                </div>
            </div>
            <div className="profile-info">
                <h2>Nom Prénom</h2>
                <p className="title">Développeur Web Full Stack</p>
                <div className="profile-links">
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;