import React from 'react';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify, {Auth, Hub} from 'aws-amplify'
import {withFederated} from 'aws-amplify-react'

class AuthComponent2 extends React.Component {
  state = { user: null, customState: null };

  componentDidMount() {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({ user: data });
          break;
        case "signOut":
          this.setState({ user: null });
          break;
        case "customOAuthState":
          this.setState({ customState: data });
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => console.log("Not signed in"));
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
        {user ? (
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        ) : (
          <React.Fragment>
          <h1>Oauth signIn</h1>
          <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Google Sign In</button>
          <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const AuthComponent3 = () =>{
  return(
    <div>
      <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Google Sign In</button>
    </div>
  )
}

export default AuthComponent2;
