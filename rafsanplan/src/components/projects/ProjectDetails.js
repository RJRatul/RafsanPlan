import React from 'react'

const ProjectDetails = (props) => {
    const id =props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The RJ Ratul</div>
                    <div>5th June,2021, 1am</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
