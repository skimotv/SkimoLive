import React from 'react';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify'

const AuthComponent = () =>{
  const [user, updateUser] = React.useState(null);
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(currentUser => updateUser(currentUser))
    .catch(err => console.log({err}))
  }, [])
  return(
    <div>
      {
        user &&<h3> {user.username} </h3>
      }
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(AuthComponent)
