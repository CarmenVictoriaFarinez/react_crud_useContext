import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact';
import CrudApp from '../components/CrudApp';
import Navbar from '../components/Navbar';
import About from '../components/About';
import NotFound from '../components/NotFound';
import ProfilePage from '../components/ProfilePage'

const AppRouter = () => {
    return (
        <Router>
             <Navbar/>
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/"component={CrudApp}/>
                <Route exact path="/profile/:username"component={ProfilePage}/>
                <Route path="*"component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;

