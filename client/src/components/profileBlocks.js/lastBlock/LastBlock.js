import './lastBlock.css'
import {useSelector} from 'react-redux'
import LeftSide from './leftSide/LeftSide'
import EducationSide from './educationSide/EducationSide';

const LastBlock = () => {
    const projects = useSelector(state => state.project);
    const education = useSelector(state => state.education);
    return (
        <div>
            <div className="last_block">
                <div className="left_part">
                    <h2>Projects</h2>
                    {projects.map((project) => (
                        <LeftSide key={projects._id} project={project} />
                    ))}
                </div>
                <div className="education">
                    <h2>Education</h2>
                    {education.map((edu) => (
                        <EducationSide key={edu._id} edu={edu} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default LastBlock
