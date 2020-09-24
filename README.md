# SkimoLive
This is based on Amazon's IVS

# I. Setting up Amazon IVS
1. Goto https://console.aws.amazon.com and login to your account.
2. Search for Amazon Interactive Video Services
3. Press on "Create Channel" Orange button.
4. Create a channel name called "live-stream-app"
5. Choose Default Configuration
6. Press Create Channel button
7. Note down the Ingest Server and Stream key
8. Open OBS Studio. Go to OBS -> Preferences --> Stream
9. Create a Custom Service, paste the Ingest Server and Stream Key
10. Press OK and press start Streaming
11. Check the Live Stream in the Amazon Console to see that the streaming started.

# II. 
1. npx create-react-app mystreamingapp
2. cd mystreamingapp
2. npm install -g @aws-amplify/cli
3. yarn add aws-amplify @aws-amplify/ui-react react-router-dom react-player
4. amplify init and follow along until you get "Your project has been successfully initialized and connected to the cloud!".
amplify init
Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project skimolive
? Enter a name for the environment dev
? Choose your default editor: Atom Editor
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation
AWS access credentials can not be found.
? Setup new user Yes
Follow these steps to set up access to your AWS account:
Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

After you created the account
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default

# III. amplify add auth
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
 
 # IV. amplify add api
 Please select from one of the below mentioned services: GraphQL
? Provide API name: mystreamingapp
? Choose the default authorization type for the API API key
? Enter a description for the API key: public
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some additional changes.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
Cognito UserPool configuration
Use a Cognito user pool configured as a part of this project.
? Configure conflict detection? No
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? Yes

# V. Edit in the text editor 
1. Paste in the text editor under schema.graphql
type Comment @model
  @auth(
    rules: [
      { allow: owner },
      { allow: public, operations: [read] },
      { allow: private, operations: [read] }
    ]
  )
{
  id: ID!
  message: String!
  owner: String
}
# VI. Edit src/App.js
1. Replace the default src file created in your appplication with the src from this git repository
1. before function add the lines:
  a. const streamUrl = <playback url>
  b. import ReactPlayer from 'react-player';
2. In the header copy the following:
      <div style={{width: 900}}>
      <ReactPlayer
        url={streamUrl}
        width="100%"
        height="100%"
        playing
        />
      </div>
3. Run npm start
4.  amplify push --y









to start application run the following on node.js console:
"npm run"
