import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import PersonIcon from '@material-ui/icons/Person'
import { Button, TextField } from '@material-ui/core'
import './profileForm.css'
import { createProfile } from '../../redux/action/profileAction'

const ProfileForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [profileData, setProfileData] = useState({
        address : "",
        phone : "",
        mobile : "",
        dob : "",
        profession : "",
        aboutSelf : ""
    });

    const goBackHandler = () => {
        history.push('/dashboard');
    }

    const profileFormHandler = (e) => {
        e.preventDefault();
        dispatch(createProfile(profileData));
        history.push('/profile');
        setProfileData({
            address : "",
            phone : "",
            mobile : "",
            dob : "",
            aboutSelf : "",
            profession : ""
        });
    }
    return (
        <div>
            <div className="profile_form">
                <div className="form_container">
                    <h1 className="main_heading">Create Profile</h1>
                    <div className="instruction">
                        <PersonIcon style={{marginRight : "5px"}} />
                        <p>Insert the following information clearly to complete your profile.</p>
                    </div>
                    <form noValidate autoComplete="off" className="form_profile" onSubmit={profileFormHandler}>
                        <TextField 
                         variant="outlined" 
                         label="Your address" 
                         margin="dense" 
                         type="text" 
                         value={profileData.address}
                         onChange={(e) => setProfileData({...profileData, address : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Your phone number" 
                         margin="dense" 
                         type="text" 
                         value={profileData.phone}
                         onChange={(e) => setProfileData({...profileData, phone : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Your mobile number" 
                         margin="dense" 
                         type="text" 
                         value={profileData.mobile}
                         onChange={(e) => setProfileData({...profileData, mobile : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Date of birth" 
                         margin="dense" 
                         type="text" 
                         value={profileData.dob}
                         onChange={(e) => setProfileData({...profileData, dob : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Profession" 
                         margin="dense" 
                         type="text" 
                         value={profileData.profession}
                         onChange={(e) => setProfileData({...profileData, profession : e.target.value})}
                        />
                        <TextField 
                         variant="outlined" 
                         label="Tell us about yourself..." 
                         margin="dense" 
                         type="text" 
                         multiline 
                         rows={4} 
                         value={profileData.aboutSelf}
                         onChange={(e) => setProfileData({...profileData, aboutSelf : e.target.value})}
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

export default ProfileForm
