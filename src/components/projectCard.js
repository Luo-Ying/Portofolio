const CardProject = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-preview">
                <img src={project.imagePreview} alt={project.title} />
            </div>
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-source">{project.source}</p>
            </div>
        </div>
    )
}

export default CardProject;