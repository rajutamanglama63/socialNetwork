import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Button, Card, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import './login.css'
import { login } from '../../redux/action/authActions'

const useStyles = makeStyles((theme) => ({
    card : {
        margin : "0 auto",
        width : "50%",
        display : "flex",
        padding : "30px",
        boxShadow: "0px 0px 15px -8px black"
    },
    btn : {
        margin : "1rem 0"
    }
}));

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    });

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(credentials.email, credentials.password));
        setCredentials({
            email : "",
            password : ""
        });
        history.push('/dashboard')
    }
    return (
        <div>
            <div className="background">
                <Card className={classes.card}>
                    <div className="right">
                        <img src="assets/undraw_Access_account_re_8spm.png" alt="login" />
                    </div>
                    <form autoComplete="off" noValidate className="left" onSubmit={loginHandler}>
                        <h2>Login</h2>
                        <TextField 
                         variant="standard" 
                         fullWidth 
                         label="email" 
                         margin="dense" 
                         type="text" 
                         value={credentials.email}
                         onChange={(e) => setCredentials({...credentials, email : e.target.value})}
                        />
                        <TextField 
                         variant="standard" 
                         fullWidth 
                         label="password" 
                         margin="dense" 
                         type="text" 
                         value={credentials.password}
                         onChange={(e) => setCredentials({...credentials, password : e.target.value})}
                        />
                        <Button className={classes.btn} size="small" variant="contained" color="primary" type="submit">Sign in</Button>
                        <p className="question">Not registered yet? <Link to="/register">Register</Link></p>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login

