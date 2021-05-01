import {Register} from './register.js';
import {Login} from './login.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {PrivateRoute} from './privateroute.js';
import {Dashboard} from './dashboard.js';
import {FirebaseAuthProvider} from '../providers/firebaseauthprovider.js';
import { FirebaseDBProvider } from '../providers/firebasedbprovider.js';


function App() {
  return (
    <FirebaseAuthProvider>
      <Router>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
          <FirebaseDBProvider>
            <PrivateRoute path='/' component={Dashboard} />
          </FirebaseDBProvider>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
      </Router>
    </FirebaseAuthProvider>
  );
}

export default App;
