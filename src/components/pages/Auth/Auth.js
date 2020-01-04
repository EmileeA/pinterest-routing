import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Auth</h1>
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Login with</button>
      </div>
    );
  }
}

export default Auth;


// when asked why we use className instead of IDs. Zoe said, you're not supposed to style with Ids.
