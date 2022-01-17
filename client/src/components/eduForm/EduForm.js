import './eduForm.css'
import {useState} from 'react'
import PersonIcon from '@material-ui/icons/Person'
import { Button, TextField } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { addEducation, getEducation } from '../../redux/action/educationAction'

const EduForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [eduInfo, setEduInfo] = useState({
        school : "",
        degree : "",
        year : ""
    });

    const eduSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addEducation(eduInfo));
        dispatch(getEducation());
        history.push('/profile');
        setEduInfo({
            school : "",
            degree : "",
            year : ""
        })
    }

    const goBackHandler = () => {
        history.push('/dashboard');
    }
    return (
        <div>
            <div className="edu_form">
                <div className="form_container">
                    <h1 className="main_heading">Add Education</h1>
                    <div className="instruction">
                        <PersonIcon style={{marginRight : "5px"}} />
                        <p>Insert the following information clearly to complete your profile.</p>
                    </div>
                    <form noValidate autoComplete="off" className="form_project" onSubmit={eduSubmitHandler}>
                        <TextField 
                         variant="outlined" 
                         label="School/College" 
                         margin="dense" 
                         type="text" 
                         value={eduInfo.school}
                         onChange={(e) => setEduInfo({...eduInfo, school : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Enter degree" 
                         margin="dense" 
                         type="text" 
                         value={eduInfo.degree}
                         onChange={(e) => setEduInfo({...eduInfo, degree : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Pass out year" 
                         margin="dense" 
                         type="text"
                         value={eduInfo.year}
                         onChange={(e) => setEduInfo({...eduInfo, year : e.target.value})}
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

export default EduForm
