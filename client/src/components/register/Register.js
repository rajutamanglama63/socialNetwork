import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Button, Card, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {register} from '../../redux/action/authActions'
import './register.css'

const useStyles = makeStyles((theme) => ({
    card : {
        margin : "0 auto",
        width : "50%",
        display : "flex",
        padding : "50px",
        boxShadow: "0px 0px 15px -8px black"
    },
    btn : {
        margin : "1rem 0"
    }
}));

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [userData, setUserData] = useState({
        username : "",
        email : "",
        password : ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(userData));
        history.push('/dashboard')
        setUserData({
            username : "",
            email : "",
            password : ""
        });
    }
    return (
        <div>
            <div className="background">
                <Card className={classes.card}>
                    <form autoComplete="off" noValidate className="left" onSubmit={submitHandler}>
                        <h2>Register</h2>
                        <TextField 
                         variant="standard" 
                         fullWidth 
                         label="username" 
                         margin="dense" 
                         type="text" 
                         value={userData.username}
                         onChange={(e) => setUserData({...userData, username : e.target.value})}
                        />
                        <TextField 
                         variant="standard" 
                         fullWidth 
                         label="email" 
                         margin="dense" 
                         type="text" 
                         value={userData.email}
                         onChange={(e) => setUserData({...userData, email : e.target.value})}
                        />
                        <TextField 
                         variant="standard" 
                         fullWidth 
                         label="password" 
                         margin="dense" 
                         type="text" 
                         value={userData.password}
                         onChange={(e) => setUserData({...userData, password : e.target.value})}
                        />
                        <Button className={classes.btn} size="small" variant="contained" color="primary" type="submit">Sign up</Button>
                        <p className="question">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                    <div className="right">
                        <img src="assets/undraw_completing_6bhr.png" alt="register" />
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Register
