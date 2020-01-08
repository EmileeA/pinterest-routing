/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class MyNavBar extends React.Component {
static propTypes = {
  authed: PropTypes.bool,
}

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const buildNavBar = () => {
        // our linter doesn't like if else's
        if (authed) {
          return (
            // you cannot return a list of siblings, you have to return a single element. Essentially the UL is wrapping it
            <ul className="navbar-nav ml-auth">
              <li className="nav-item">
                <Link className="nav-link" to="/">Boards</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/board/new">New Board</Link>
                </li>
                <li className="nav-item">
                <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>
                </li>
            </ul>
          );
        }
        return (<ul className="navbar-nav mr-auth"></ul>);
      };
      return (
        <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand">Pinterest</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* function below will check property of auth */}
            { buildNavBar() }
          </div>
        </nav>
      </div>
      );
    }
}
export default MyNavBar;
