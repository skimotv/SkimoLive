import React from 'react';

const ApprovalCard = (props) => {
  return(
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
      <div class="ui buttons">
        <button class="ui button">Cancel</button>
        <div class="or"></div>
        <button class="ui positive button">Save</button>
      </div>
      </div>
    </div>
  );
};


export default ApprovalCard;
