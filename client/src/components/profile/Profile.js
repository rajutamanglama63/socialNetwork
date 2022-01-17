import './profile.css'
import {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import TopBlock from '../profileBlocks.js/topBlock/TopBlock';
import LastBlock from '../profileBlocks.js/lastBlock/LastBlock';
import { getProfile } from '../../redux/action/profileAction';
import { getProject } from '../../redux/action/projectAction';
import { getEducation } from '../../redux/action/educationAction';

const Profile = () => {
    const profile = useSelector(state => state.profile);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
        dispatch(getProject());
        dispatch(getEducation());
    }, [dispatch]);

    if(!auth._id) {
        return <Redirect to="/login" />
    }
    return (
        <div className="profile">
            <div className="container">
                {profile.map((data) => (
                    <TopBlock key={data._id} data={data} />
                ))}
                <LastBlock />
            </div>
        </div>
    )
}

export default Profile
