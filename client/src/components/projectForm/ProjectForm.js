import './projectForm.css'
import PersonIcon from '@material-ui/icons/Person'
import { Button, TextField } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { createProject } from '../../redux/action/projectAction'

const ProjectForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [projectData, setProjectData] = useState({
        projectTitle : "",
        year : ""
    });

    const goBackHandler = () => {
        history.push('/dashboard');
    }

    const projectSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(createProject(projectData));
        history.push('/profile');
        setProjectData({
            projectTitle : "",
            year : ""
        });
    }
    return (
        <div>
            <div className="project_form">
                <div className="form_container">
                    <h1 className="main_heading">Create Project</h1>
                    <div className="instruction">
                        <PersonIcon style={{marginRight : "5px"}} />
                        <p>Insert the following information clearly to complete your profile.</p>
                    </div>
                    <form noValidate autoComplete="off" className="form_project" onSubmit={projectSubmitHandler}>
                        <TextField 
                         variant="outlined" 
                         label="Title of your project" 
                         margin="dense" 
                         type="text" 
                         value={projectData.projectTitle}
                         onChange={(e) => setProjectData({...projectData, projectTitle : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Project attended year" 
                         margin="dense" 
                         type="text"
                         value={projectData.year}
                         onChange={(e) => setProjectData({...projectData, year : e.target.value})}
                        />
                        <div className="option_btns">
                            <Button style={{marginRight : "10px"}} color="primary" variant="contained" size="small" type="submit" >submit</Button>
                            <Button variant="contained" size="small" onClick={goBackHandler}>Go back</Button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default ProjectForm
