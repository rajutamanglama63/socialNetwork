import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {IconButton} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {logout} from '../../redux/action/authActions'
import './header.css'

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header_content">
                        <h1 className="logo">
                            <Link className="home_link" to="/">
                                technician<span className="finder">Finder</span>
                            </Link>
                        </h1>
                        {auth._id ? (
                            <>
                                <ul className="right_side_list_authenticated">
                                    {/* <li className="list_item">
                                        Hello {auth.username}
                                    </li> */}
                                    <li className="list_item">
                                        <Link to="/dashboard" className="link">Dashboard</Link>
                                    </li>
                                    <li className="list_item">
                                        <Link to="/profile" className="link">Profile</Link>
                                    </li>
                                    <li className="list_item">
                                        <Link to="/posts" className="link">Posts</Link>
                                    </li>
                                    <IconButton variant="text" size="small" onClick={logoutHandler}>
                                        <ExitToAppIcon fontSize="small"/>
                                    </IconButton>
                                </ul>
                            </>
                        ) : (
                            <>
                                <ul className="right_side_list">
                                    <li className="list_item">
                                        <Link to="/technicians" className="link">Technicians</Link>
                                    </li>
                                    <li className="list_item">
                                        <Link to="/login" className="link">Login</Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
