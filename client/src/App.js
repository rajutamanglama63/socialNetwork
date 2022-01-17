import {Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import EduForm from './components/eduForm/EduForm';
import Header from './components/header/Header';
import IndividualPost from './components/individualPost/IndividualPost';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import Posts from './components/posts/Posts';
import Profile from './components/profile/Profile';
import ProfileForm from './components/profileForm/ProfileForm';
import ProjectForm from './components/projectForm/ProjectForm';
import Register from './components/register/Register';
import Technicians from './components/technicians/Technicians';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/technicians" component={Technicians} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile_form" component={ProfileForm} />
        <Route path="/project_form" component={ProjectForm} />
        <Route path="/education_form" component={EduForm} />
        <Route path="/posts" component={Posts} />
        <Route path="/individualPost/:id" component={IndividualPost} />
      </Switch>
    </div>
  );
}

export default App;
