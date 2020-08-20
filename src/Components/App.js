import React from 'react';
import ReactPlayer from 'react-player';
import {Link, HashRouter, Route, Switch} from 'react-router-dom';
import AuthComponent from './AuthComponent';
import Comment from './comments';
import CommentList from './commentList';
import SearchBar from './searchBar';
import Timer from './timer'
import Clock from './clock'
import Notes from './notes'

import {Auth} from 'aws-amplify';

const streamUrl = "https://www.youtube.com/watch?v=FjU_x1106pg";

const Router= () => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/home">
          <App/>
        </Route>
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
  render(){
    return (
      <div className="App">
        <React.Fragment>
        <SearchBar onSubmit={(term)=>{console.log(term)}}/>
        <div style={{display: 'flex'}}>
          <div style={{width: 854, height:465, border:'1px solid black'}}>
            <ReactPlayer
              url={streamUrl}
              width="100%"
              height="100%"
            />
          </div>
          <CommentList />
        </div>
        <div style={{display: 'flex'}}>
          <button class="compact ui button">
          Hold
          </button>
          <button class="ui compact labeled icon button">
            <i class="pause icon"></i>
            Pause
          </button>
          <button class="compact ui button" onClick={(e)=>{console.log("Bookmarking content from "+ new Date().toLocaleString())}}>Bookmark this moment</button>
        </div>
        <Notes />
        <Timer />
        <Clock />
        </React.Fragment>
      </div>
    );
  }
}

export default Router;
