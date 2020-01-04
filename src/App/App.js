import React from 'react';
import './App.scss';
import
{
  BrowserRouter as Router, Route, Redirect, Switch,
}
  from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import SingleBoard from '../components/pages/SingleBoard/SingleBoard';
import NewBoard from '../components/pages/NewBoard/NewBoard';


// this function takes in a component, and the authed keyword. and ...rest takes in whatever else you put in on the line after {authed}
// four public... if auth is false load the authcomponent that's passed in
// otherwise redirect to "/"
const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
// this function is foing the route makeing. and rendering a function call it calls the routechecker function and passes in props. the function says are you authenticted.
// for private if you're auth then load the thing I've told you to load. (I think it's authcomponent)
// otherwise redirect to /auth
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

// Router the thing that chooses from different routes
// Route is individual routes
// finds a route if it doesn't find the matching route

class App extends React.Component {
  state = {
    authed: true,
  };

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed} />
            <PrivateRoute path="/board/new" exact component={NewBoard} authed={authed} />
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
            <PrivateRoute path="/board/:boardId" exact component={SingleBoard} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
