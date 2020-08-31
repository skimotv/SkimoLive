import React from 'react';


class VerticalMenu extends React.Component {
    state = {}

    render() {
      return (
        <div class="ui vertical menu">
          <a class="item">
            Library
          </a>
          <a class="item">
            Setting
          </a>
          <a class="item">
            Updates
          </a>
          <a class="item">
            Bookmarks
          </a>
          <a class="item">
            Notes
          </a>
          <a class="item">
            Create Stream
          </a>
          <a class="item">
            Recordings
          </a>
          <a class="item">
            Help
          </a>
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search menu..." />
              <i class="search icon"></i>
            </div>
          </div>
        </div>
      );
    }
}

export default VerticalMenu;
