import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import PersonIcon from '@material-ui/icons/Person'
import NoteIcon from '@material-ui/icons/Note'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MenuBookIcon from '@material-ui/icons/MenuBook'
import {useEffect} from 'react'
import './dashboard.css'
import { delProject, getProject } from '../../redux/action/projectAction';
import { getEducation } from '../../redux/action/educationAction';

const Dashboard = () => {
    const auth = useSelector(state => state.auth);
    const project = useSelector(state => state.project);
    const education = useSelector(state => state.education);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProject());
        dispatch(getEducation());
    }, [dispatch, auth._id]);

    const history = useHistory();

    const editProfileHandler = () => {
        history.push('/profile_form');
    }

    const editProjectHandler = () => {
        history.push('/project_form');
    }

    const projectDelHandler = (id) => {
        dispatch(delProject(id));
    }

    const editEducationHandler = () => {
        history.push('/education_form');
    }

    return (
        <div>
            <div className="dashboard">
                <div className="info_container">
                    <h1 className="main_heading">Dashboard</h1>
                    <div className="greeting">
                        <PersonIcon />
                        <p>Welcome {auth.username}</p>
                    </div>
                    <ul className="button_list">
                        <li className="btn_item" onClick={editProfileHandler}>
                            <PersonIcon style={{color : "dodgerblue"}} fontSize="small" /> Edit Profile
                        </li>
                        <li className="btn_item" onClick={editProjectHandler}>
                            <NoteIcon style={{color : "dodgerblue"}} fontSize="small" />Add Projects
                        </li>
                        <li className="btn_item" onClick={editEducationHandler}>
                            <MenuBookIcon style={{color : "dodgerblue"}} fontSize="small" />Add Education
                        </li>
                    </ul>
                    <h3 className="sub_heading">Project Credentials</h3>
                    <table>
                        <tr>
                            <th>Project Title</th>
                            <th>Year</th>
                            <th>Options</th>
                        </tr>
                        {project.map((p) => (
                            <>
                                <tr key={p._id}>
                                    <td>{p.projectTitle}</td>
                                    <td>{p.year}</td>
                                    <td>
                                        <DeleteForeverIcon onClick={() => projectDelHandler(p._id)} fontSize="small" color="secondary" />
                                    </td>
                                </tr>
                            </>
                        ))}
                                
                    </table>
                    
                    <h3 className="sub_heading">Project Credentials</h3>
                    <table className="edu_dashboard"> 
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Year</th>
                            <th>Options</th>
                        </tr>
                        {education.map((edu) => (
                            <>
                                <tr key={edu._id}>
                                    <td>{edu.school}</td>
                                    <td>{edu.degree}</td>
                                    <td>{edu.year}</td>
                                    <td>
                                        <DeleteForeverIcon fontSize="small" color="secondary" />
                                    </td>
                                </tr>
                            </>
                        ))}   
                    </table>
                       
                </div>
            </div>
        </div>
    )
}

export default Dashboard
