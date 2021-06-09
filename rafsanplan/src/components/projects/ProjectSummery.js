import React from 'react'

const ProjectSummery = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by the RJ Ratul</p>
                    <p className="grey-text">5th June,2021, 1am</p>
                </div>
            </div>
    )
}

export default ProjectSummery
