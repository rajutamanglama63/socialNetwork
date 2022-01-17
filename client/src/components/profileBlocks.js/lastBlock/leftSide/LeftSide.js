import React from 'react'
import './leftSide.css'

const LeftSide = ({project}) => {
    return (
        <div>
            <div className="proj">
                <p className="paramater">Project Title : <span>{project.projectTitle}</span></p>
                <p className="paramater">Project Handled Year : <span>{project.year}</span></p>
            </div>
        </div>
    )
}

export default LeftSide
