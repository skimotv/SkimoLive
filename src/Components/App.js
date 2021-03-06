import React from 'react';
import ReactPlayer from 'react-player';
import {Link, HashRouter, Route, Switch} from 'react-router-dom';
import AuthComponent from './AuthComponent';
import AuthComponent2 from './AuthComponent2';
import Comment from './comments';
import CommentList from './commentList';
import SearchBar from './searchBar';
import Timer from './timer'
import Clock from './clock'
import Notes from './notes'
import VerticalMenu from './VerticalMenu'
import Bookmark from './bookmark'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios';

import {Auth} from 'aws-amplify';

const Router= () => {
  return(
    <HashRouter>
      <div style={{display: 'flex' ,flexDirection:'row',justifyContent : 'space-between'}}>
        <nav>
          <Link to="/auth">Profile</Link>
          /
          <Link to="/video">Stream</Link>
        </nav>
        <Clock />
      </div>
      <Switch>
        <Route exact path="/video/:VideoGUID" component={App} />
        <Route exact path ="/">
          <h1>Hello</h1>
          <br />
        </Route>
        <Route exact path ="/auth">
          <AuthComponent />
        </Route>
      </Switch>
    </HashRouter>
  );
}


class App extends React.Component{
  state = {};
  GUID = ""
  assetid = uuidv4()
  streamUrl = "https://www.youtube.com/watch?v=bnP5Hxt0C_g";
  emailId = ""

  componentDidMount() {
    this.GUID = this.props.match.params.VideoGUID

      Auth.currentAuthenticatedUser().then((user) => {
        console.log('user email = ' + user.attributes.email);
        this.emailId = user.attributes.email
        const data = JSON.stringify({
          assetid : this.assetid,
          apikey :"abcd",
          username: this.emailId
        })
        console.log(data)
        axios.post('https://skimo.tv/live/recording',data)
        this.setState()
      });
  }

  render(){
    return (
      <React.Fragment>
        <SearchBar onSubmit={(term)=>{console.log(term)}}/>
      <div style={{display: 'flex'}}>
        <div className="Menu class">
          <VerticalMenu />
        </div>
        <div className="App">
          <React.Fragment>
            <div className="Video and comments" style={{display: 'flex'}}>
              <div className="Video" style={{width: 854, height:480}}>
                <ReactPlayer
                  url={this.streamUrl}
                  width="100%"
                  height="100%"
                />
                <div style={{display: 'flex'}}>
                  <button class="compact ui button">
                  Hold
                  </button>
                  <Timer />
                  <button class="ui compact labeled icon button">
                    <i class="pause icon"></i>
                    Pause
                  </button>
                  <Bookmark username={this.emailId} assetid = {this.assetid} apikey="abcd" />
                </div>
              </div>
              <div className="Comments">
                <CommentList username={this.emailId} assetid = {this.assetid} apikey="abcd"/>
              </div>
            </div>
            <br />
            <br />
            <Notes username={this.emailId} assetid = {this.assetid} apikey="abcd"/>
            <br />
            <br />
            <br />
          </React.Fragment>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Router;
